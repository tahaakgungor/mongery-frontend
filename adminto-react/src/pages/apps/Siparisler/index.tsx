import { Link } from 'react-router-dom';
import {
    Badge,
    Button,
    Card,
    Col,
    OverlayTrigger,
    ProgressBar,
    ProgressBarProps,
    Row,
    Tooltip,
    FormSelect,
    Modal,
    Form,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import { BsPlus, BsDash } from 'react-icons/bs';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import { FormInput } from '../../../components/form';
import { SiparislerList } from './types';
import { deleteSiparis, getSiparisler, updateSiparis } from '../../../service/siparisler';
import { getStates } from '../../../service/states';

type SiparislerProps = {
    siparis: SiparislerList;
};

const Siparisler = () => {
    // set page title
    usePageTitle({
        title: 'Siparisler',
        breadCrumbItems: [
            {
                path: 'apps/siparisler',
                label: 'Apps',
            },
            {
                path: 'apps/siparisler',
                label: 'Siparisler',
                active: true,
            },
        ],
    });

    useEffect(() => {
        handleGetSiparisler();
        handleGetStates();
    }, []);

    const token = localStorage.getItem('token') || '';
    const [orders, setOrders] = useState<any[]>([]);
    const [states, setStates] = useState<any[]>([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedStateId, setSelectedStateId] = useState<Number | null>(null);

    const dummyData: SiparislerList[] = [
        {
            id: 1,
            title: 'Ürün 1',
            shortDesc: 'Ürün 1 açıklama',
            category: 'Kategori 1',
            price: 100,
            quantity: 1,
            image: 'https://via.placeholder.com/300x200',
            state: 'Hazırlanıyor',
            variant: 'warning',
            urun: 'Ürün 1',
        },
    ];

    const [sepet, setSepet] = useState<SiparislerList[]>([]);

    const [item, setitem] = useState<SiparislerList | null>(null);
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const sepeteEkle = (siparis: SiparislerList) => {
        setSepet((prevSepet) => [...prevSepet, siparis]);
    };

    const siparisiOnayla = (siparis: SiparislerList) => {
        console.log('Siparişi onayla:', siparis);
        setitem(siparis);
        setModalShow(true);
        setSelectedItem(siparis.id);
    };

    const handleClose = () => setModalShow(false);

    const handleGetSiparisler = async () => {
        try {
            const response = await getSiparisler(token);
            console.log(response);
            setOrders(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGetStates = async () => {
        try {
            const response = await getStates(token);
            console.log(response);
            setStates(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateState = async (orderId: number, stateId: number) => {
        if (stateId === null) {
            // State ID is not selected, handle the error condition
            return;
        }

        try {
            console.log(orderId, stateId);
            const response = await updateSiparis(orderId, stateId, token);
            // Update the order with the updated state
            const updatedOrders = orders.map((order) => {
                if (order.id === orderId) {
                    return {
                        ...order,
                        state: {
                            id: stateId,
                            name: response.state.name,
                            createdAt: response.state.createdAt,
                            updatedAt: response.state.updatedAt,
                        },
                    };
                }
                return order;
            });
            setOrders(updatedOrders);
            handleClose();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteSiparis(id, token);
            const updatedOrders = orders.filter((order) => order.id !== id);
            setOrders(updatedOrders);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '20px' }}>
                                            <div className="form-check font-size-16">
                                                <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <label className="form-check-label" htmlFor="customCheck1">
                                                    &nbsp;
                                                </label>
                                            </div>
                                        </th>
                                        <th>Firma</th>
                                        <th>Toplam</th>
                                        <th>Durum</th>
                                        <th>İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders
                                        .sort((a, b) => a.id - b.id)
                                        .map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="form-check font-size-16">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id={`customCheck${item.id}`}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor={`customCheck${item.id}`}>
                                                            &nbsp;
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="font-size-14 mb-1">
                                                        <Link to="#" className="text-dark">
                                                            {item.customer.firmName}
                                                        </Link>
                                                    </h5>
                                                    <p className="text-muted mb-0">{item.shortDesc}</p>
                                                </td>
                                                <td>
                                                    {item.products.reduce(
                                                        (total: number, productItem: any) =>
                                                            total +
                                                            productItem.quantity * productItem.product.price * 1.2,
                                                        0
                                                    )}{' '}
                                                    TL
                                                </td>

                                                <td>
                                                    {item.state.name === 'Onaylandı' && (
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>{item.state.name}</Tooltip>}>
                                                            <Badge bg="warning">{item.state.name}</Badge>
                                                        </OverlayTrigger>
                                                    )}
                                                    {item.state.name === 'Hazırlanıyor' && (
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>{item.state.name}</Tooltip>}>
                                                            <Badge bg="info">{item.state.name}</Badge>
                                                        </OverlayTrigger>
                                                    )}
                                                    {item.state.name === 'Yolda' && (
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>{item.state.name}</Tooltip>}>
                                                            <Badge bg="success">{item.state.name}</Badge>
                                                        </OverlayTrigger>
                                                    )}
                                                    {item.state.name === 'Tamamlandı' && (
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>{item.state.name}</Tooltip>}>
                                                            <Badge bg="danger">{item.state.name}</Badge>
                                                        </OverlayTrigger>
                                                    )}
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="success"
                                                        className="btn-sm"
                                                        onClick={() => sepeteEkle(item)}>
                                                        <i className="fas fa-file-invoice"></i>
                                                    </Button>
                                                    <Button
                                                        style={{ marginLeft: '5px' }}
                                                        variant="primary"
                                                        className="btn-sm"
                                                        onClick={() => siparisiOnayla(item)}>
                                                        <i className="fas fa-edit"></i>
                                                    </Button>
                                                    <Button
                                                        style={{ marginLeft: '5px' }}
                                                        variant="danger"
                                                        className="btn-sm"
                                                        onClick={() => handleDelete(item.id)}>
                                                        <i className="fas fa-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    {sepet.length > 0 && (
                                        <tr>
                                            <td colSpan={5}>
                                                <div className="text-end">
                                                    <Button
                                                        variant="danger"
                                                        className="btn-sm"
                                                        onClick={() => setSepet([])}>
                                                        <BsDash />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {orders.map((item) => (
                            <Modal show={modalShow} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Siparis Detayları</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Ürün Detayları</Card.Title>
                                                    {item.products.map((product: any) => (
                                                        <Card.Text>
                                                            <strong>Ürün:</strong> {product.product.title} -{' '}
                                                            {product.product.price} TL
                                                        </Card.Text>
                                                    ))}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Adres Bilgileri</Card.Title>
                                                    <Card.Text>
                                                        <strong>Adres:</strong> {item.customer.address}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Telefon:</strong> {item.customer.phone}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Email:</strong> {item.customer.email}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Card.Text>
                                            <strong>Siparis Tarihi:</strong> {item.createdAt}
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Siparis Durumu</Card.Title>
                                                    <FormSelect
                                                        aria-label="Default select example"
                                                        onChange={(e) => setSelectedStateId(Number(e.target.value))}>
                                                        <option>Seçiniz</option>
                                                        {states.map((state) => (
                                                            <option value={state.id}>{state.name}</option>
                                                        ))}
                                                    </FormSelect>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Kapat
                                    </Button>
                                    <Button
                                        variant="primary"
                                        disabled={selectedStateId === null}
                                        onClick={() => handleUpdateState(selectedItem, Number(selectedStateId))}>
                                        Kaydet
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Siparisler;
