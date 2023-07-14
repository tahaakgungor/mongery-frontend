import { Button, Card, Dropdown, Form, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../components/form';
// types
import { Contact } from '../pages/apps/Contacts/List/types';
import { Link, Location } from 'react-router-dom';
import { BaseSyntheticEvent, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { musteriSec } from '../myRedux/Musteriler/slice';
import { selectedMusteri } from '../redux/musteriler/actions';
import { useRedux } from '../hooks';
import { getCustomers, CustomerData, deleteCustomer, updateCustomer } from '../service/musteri';

type ContactDetailsProps = {
    contact: Contact;
};

const ContactDetails = ({ contact }: ContactDetailsProps) => {
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
    const { dispatch, appSelector } = useRedux();
    const [customers, setCustomers] = useState<CustomerData[]>([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [updatedCustomerData, setUpdatedCustomerData] = useState<CustomerData | null>(null);
    const [avatar, setAvatar] = useState<File | null>(null);
    const [triggerGetCustomers, setTriggerGetCustomers] = useState(false);

    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        handleGetCustomers();
    }, [triggerGetCustomers]);

    const handleSelectCustomer = (customer: CustomerData) => {
        setSelectedCustomer(customer);
        console.log(customer);
        dispatch(selectedMusteri('musteri', customer));
    };

    const handleOpenEditModal = (customer: CustomerData) => {
        setUpdatedCustomerData(customer);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setTriggerGetCustomers(!triggerGetCustomers);
        setUpdatedCustomerData(null);
    };

    const handleGetCustomers = async () => {
        try {
            const response = await getCustomers(token);
            console.log('Müşteriler:', response);
            setCustomers(response);
        } catch (error) {
            console.error('Müşterileri alma hatası:', error);
        }
    };

    const handleDeleteCustomer = async (customerId: number) => {
        try {
            // Müşteriyi sil
            await deleteCustomer(customerId, token);

            console.log(customerId, 'idli müşteri silindi');

            // Güncellenmiş müşteri listesini getir
            const updatedCustomers = await getCustomers(token);
            console.log('Güncellenmiş Müşteriler:', updatedCustomers);
            setCustomers(updatedCustomers);

            // Silinen müşteriyi seçili müşteriden kaldır (eğer seçiliyse)
            if (selectedCustomer && selectedCustomer.id === customerId) {
                setSelectedCustomer(null);
            }

            // Handle any additional logic or state updates here
        } catch (error) {
            console.error('Müşteri silme hatası:', error);
        }
    };

    const handleUpdateCustomerData = async () => {
        if (updatedCustomerData) {
            try {
                const updatedCustomer = await updateCustomer(updatedCustomerData.id, updatedCustomerData, token);
                console.log(updatedCustomer, 'idli müşteri güncellendi');
                // Update the customers list or perform any necessary actions after successful update

                handleCloseEditModal();
            } catch (error) {
                console.error('Müşteri güncelleme hatası:', error);
            }
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedCustomerData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            {customers.map((customer) => (
                <Card key={customer.id}>
                    <Card.Body className="text-center">
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleOpenEditModal(customer)}>Düzenle</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleDeleteCustomer(customer.id)}>Sil</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div>
                            <img
                                src={customer.avatar}
                                alt="profileImage"
                                className="rounded-circle avatar-xl img-thumbnail mb-2"
                            />
                            <p className="text-muted font-13 mb-3">{customer.description}</p>
                            <div className="text-start">
                                <p className="text-muted font-13">
                                    <strong>Full Name :</strong> <span className="ms-2">{customer.name}</span>
                                </p>

                                <p className="text-muted font-13">
                                    <strong>Mobile :</strong>
                                    <span className="ms-2">{customer.phone}</span>
                                </p>

                                <p className="text-muted font-13">
                                    <strong>Email :</strong> <span className="ms-2">{customer.email}</span>
                                </p>

                                <p className="text-muted font-13">
                                    <strong>Adress :</strong> <span className="ms-2">{customer.address}</span>
                                </p>
                                <p className="text-muted font-13">
                                    <strong>Firma Adı : </strong> <span className="ms-2">{customer.firmName}</span>
                                </p>
                            </div>
                            <Link
                                to={{
                                    pathname: '/apps/projects/',
                                }}>
                                <Button
                                    className="rounded-pill waves-effect waves-light"
                                    onClick={() => handleSelectCustomer(customer)}>
                                    Müşteriyi Seç
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            ))}
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Müşteri Bilgilerini Düzenle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VerticalForm<CustomerData> onSubmit={handleUpdateCustomerData}>
                        <FormInput
                            label={'İsim Soyisim'}
                            type="text"
                            name="name"
                            placeholder="İsim Giriniz"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.name}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Firma'}
                            type="text"
                            name="firmName"
                            placeholder="Firma Adı"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.firmName}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Telefon'}
                            type="text"
                            name="phone"
                            placeholder="Telefon Numarası"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.phone}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Email address'}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.email}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Adres'}
                            type="text"
                            name="address"
                            placeholder="Firma Adresi"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.address}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Açıklama'}
                            type="text"
                            name="description"
                            placeholder="Açıklama"
                            containerClass={'mb-3'}
                            defaultValue={updatedCustomerData?.description}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label={'Avatar'}
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            containerClass={'mb-3'}
                        />
                        <Button variant="secondary" onClick={handleCloseEditModal}>
                            İptal
                        </Button>
                        <Button variant="primary" type="submit">
                            Kaydet
                        </Button>
                    </VerticalForm>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactDetails;
