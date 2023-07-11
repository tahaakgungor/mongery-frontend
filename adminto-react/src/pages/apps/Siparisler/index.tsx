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
import { useState } from 'react';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import { FormInput } from '../../../components/form';
import { SiparislerList } from './types';


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

    const [onaylananSiparis, setOnaylananSiparis] = useState<SiparislerList | null>(null);

    const sepeteEkle = (siparis: SiparislerList) => {
        setSepet((prevSepet) => [...prevSepet, siparis]);
    };

    const siparisiOnayla = (siparis: SiparislerList) => {
        setOnaylananSiparis(siparis);
    };

    const handleClose = () => setOnaylananSiparis(null);



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
                                        <th>Ürün</th>
                                        <th>Adet</th>
                                        <th>Toplam</th>
                                        <th>Durum</th>
                                        <th>İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((item) => (
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
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                <p className="text-muted mb-0">{item.shortDesc}</p>
                                            </td>
                                            <td>
                                                {item.quantity}
                                            </td>
                                            <td>{item.price * item.quantity}</td>
                                            <td>
                                                {item.state === 'Hazırlanıyor' && (
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>{item.state}</Tooltip>}>
                                                        <Badge bg="warning">{item.state}</Badge>
                                                    </OverlayTrigger>
                                                )}
                                                {item.state === 'Yolda' && (
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>{item.state}</Tooltip>}>
                                                        <Badge bg="info">{item.state}</Badge>
                                                    </OverlayTrigger>
                                                )}
                                                {item.state === 'Teslim Edildi' && (
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>{item.state}</Tooltip>}>
                                                        <Badge bg="success">{item.state}</Badge>
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
                        {onaylananSiparis && (
                            <Modal show={true} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Siparis Detayları</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Ürün Detayları</Card.Title>
                                                    <Card.Text>
                                                        <strong>Ürün Adı:</strong> {onaylananSiparis.title}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Ürün Kategori:</strong> {onaylananSiparis.category}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Ürün Fiyatı:</strong> {onaylananSiparis.price}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Adres Bilgileri</Card.Title>
                                                    <Card.Text>
                                                        <strong>Adres:</strong> Lorem Ipsum Adresi
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Telefon:</strong> 555-555-5555
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Email:</strong> example@example.com
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Kapat
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Kaydet
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Siparisler;
