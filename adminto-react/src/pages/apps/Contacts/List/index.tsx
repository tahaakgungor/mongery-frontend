import { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// hooks
import { usePageTitle } from '../../../../hooks';
import { CustomerData, createCustomer, getCustomers } from '../../../../service/musteri';
import { useRedux } from '../../../../hooks';

// component
import { VerticalForm, FormInput } from '../../../../components/form';

import ContactDetails from '../../../../components/ContactDetails';

// data
import { contacts } from './data';

// dummy data

type MemberData = {
    id: number;
    name: string;
    position: string;
    company: string;
    email: string;
    avatar: File | null;
    description: string;
    address: string;
};

const List = () => {
    // set pagetitle
    usePageTitle({
        title: 'Müşteri Listesi',
        breadCrumbItems: [
            {
                path: '/apps/contacts',
                label: 'Müşteriler',
            },
            {
                path: '/apps/contacts',
                label: 'Müşteri Listesi',
                active: true,
            },
        ],
    });

    const [triggerGetCustomers, setTriggerGetCustomers] = useState(false);

    useEffect(() => {
        handleGetCustomers();
    }, [triggerGetCustomers]);

    const [modal, setModal] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<File | null>(null);
    const [customers, setCustomers] = useState<CustomerData[]>([]);

    const token = localStorage.getItem('token') || '';

    // Show/hide the modal
    const toggle = () => {
        setTriggerGetCustomers(!triggerGetCustomers);
        setModal(!modal);
    };

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter name'),
            position: yup.string().required('Please enter your position'),
            company: yup.string().required('Please enter your company name'),
            email: yup.string().required('Please enter Email address').email('Enter valid email'),
            description: yup.string().required('Please enter description'),
            address: yup.string().required('Please enter adres'),
        })
    );

    const handleSave = async (data: MemberData) => {
        try {
            const { id, name, position, company, email, description, address } = data;
            const customerData: CustomerData = {
                id,
                name,
                email,
                phone: position,
                firmName: company,
                avatar: '',
                description,
                address,
            };

            const response = await createCustomer(customerData, token);
            console.log('Müşteri oluşturuldu:', response);
            toggle();

            // Handle any additional logic or state updates here
        } catch (error) {
            console.error('Müşteri oluşturma hatası:', error);
        }
    };
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
        }
    };
    const chunkArray = (array: any[], size: number) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    };

    const chunkedContacts = chunkArray(contacts, contacts.length);

    const handleGetCustomers = async () => {
        try {
            const response = await getCustomers(token);

            setCustomers(response);
        } catch (error) {
            console.error('Müşteri listeleme hatası:', error);
        }
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col md={4}>
                                    <div className="mt-3 mt-md-0">
                                        <Button variant="success" className="waves-effect waves-light" onClick={toggle}>
                                            <i className="mdi mdi-plus-circle me-1"></i>
                                            Müşteri Ekle
                                        </Button>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <form className="d-flex flex-wrap align-items-center justify-content-sm-end">
                                        <label className="me-2">Sort By</label>
                                        <FormInput type="select" name="sort">
                                            <option>All</option>
                                            <option>Name</option>
                                            <option>Post</option>
                                            <option>Followers</option>
                                            <option>Followings</option>
                                        </FormInput>
                                        <FormInput
                                            type="search"
                                            name="search"
                                            placeholder="Search..."
                                            className="ms-sm-2"
                                        />
                                    </form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <ContactDetails contact={contacts[1]} />
            </Row>
            {/* Displaying contacts horizontally in a 3x5 grid */}

            <Modal show={modal} onHide={toggle} centered>
                <Modal.Header closeButton>
                    <Modal.Title as="h4">Müşteri Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VerticalForm<MemberData> onSubmit={handleSave} resolver={schemaResolver} defaultValues={{}}>
                        <FormInput
                            label={'İsim Soyisim'}
                            type="text"
                            name="name"
                            placeholder="İsim Giriniz"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Firma'}
                            type="text"
                            name="company"
                            placeholder="Firma Adı"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Telefon'}
                            type="text"
                            name="position"
                            placeholder="Telefon Numarası"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Email address'}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Adres'}
                            type="text"
                            name="address"
                            placeholder="Firma Adresi"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Açıklama'}
                            type="text"
                            name="description"
                            placeholder="Açıklama"
                            containerClass={'mb-3'}
                        />

                        <FormInput
                            label={'Avatar'}
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            containerClass={'mb-3'}
                        />

                        <Button variant="light" className="waves-effect waves-light me-1" type="submit">
                            Save
                        </Button>
                        <Button variant="danger" className="waves-effect waves-light" onClick={toggle}>
                            Cancel
                        </Button>
                    </VerticalForm>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default List;
