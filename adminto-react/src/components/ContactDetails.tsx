import { Button, Card, Dropdown } from 'react-bootstrap';

// types
import { Contact } from '../pages/apps/Contacts/List/types';
import { Link, Location } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { musteriSec } from '../myRedux/Musteriler/slice';
import { selectedMusteri } from '../redux/musteriler/actions';
import { useRedux } from '../hooks';
import { getCustomers, CustomerData } from '../service/musteri';

type ContactDetailsProps = {
    contact: Contact;
};

const ContactDetails = ({ contact }: ContactDetailsProps) => {
    const [selectedCustomer, setSelectedCustomer] = useState<Contact | null>(null);
    const { dispatch, appSelector } = useRedux();
    const [customers, setCustomers] = useState<CustomerData[]>([]);

    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        handleGetCustomers();
    }, []);

    const handleSelectCustomer = (customer: Contact) => {
        setSelectedCustomer(customer);
        console.log(customer);
        dispatch(selectedMusteri('musteri', customer));
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
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                <Dropdown.Item>Something Else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
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
                                    onClick={() => handleSelectCustomer(contact)}>
                                    Müşteriyi Seç
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ContactDetails;
