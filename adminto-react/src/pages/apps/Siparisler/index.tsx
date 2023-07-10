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

// hooks
import { usePageTitle } from '../../../hooks';

// components
import { FormInput } from '../../../components/form';

import { ChangeEvent, useState } from 'react';
import { SiparislerList } from './types';

type SiparislerProps = {
    siparisler: SiparislerList[];
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

    const [siparisler, setSiparisler] = useState<SiparislerList[]>([
        {
            id: 1,
            image: 'https://via.placeholder.com/110x110',
            title: 'Apple iPhone XR (64GB) - Black',
            price: 250,
            quantity: 1,
            state: 'Onay Bekliyor',
            shortDesc: 'Color : Black, Storage : 64 GB',
            category: 'Electronics',
            variant: 'Black',
            urun: 'Apple iPhone XR',
        },
    ]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        <th>İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                <label className="form-check-label" htmlFor="customCheck2">
                                                    &nbsp;
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 className="font-size-14 mb-1">
                                                <Link to="#" className="text-dark">
                                                    Apple iPhone XR (64GB) - Black
                                                </Link>
                                            </h5>
                                            <p className="text-muted mb-0">Color : Black</p>
                                        </td>
                                        <td>
                                            <FormSelect aria-label="Default select example">
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                                <option value="4">5</option>
                                            </FormSelect>
                                        </td>
                                        <td>$ 250 x 1</td>
                                        <td>
                                            <Button variant="danger" className="btn-sm">
                                                <BsDash />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input type="checkbox" className="form-check-input" id="customCheck3" />
                                                <label className="form-check-label" htmlFor="customCheck3">
                                                    &nbsp;
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 className="font-size-14 mb-1">
                                                <Link to="#" className="text-dark">
                                                    Apple iPhone XR (64GB) - Black
                                                </Link>
                                            </h5>
                                            <p className="text-muted mb-0">Color : Black</p>
                                        </td>
                                        <td>
                                            <FormSelect aria-label="Default select example">
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                                <option value="4">5</option>
                                            </FormSelect>
                                        </td>
                                        <td>$ 250 x 1</td>
                                        <td>
                                            <Button variant="danger" className="btn-sm">
                                                <BsDash />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}>
                                            <div className="text-end">
                                                <Button variant="danger" className="btn-sm">
                                                    <BsDash />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Row className="mt-4">
                            <Col sm={6}>
                                <div className="text-sm-start">
                                    <Button variant="light" className="btn-sm">
                                        <i className="mdi mdi-cart-plus me-1"></i> Add Coupon
                                    </Button>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="text-sm-end mt-2 mt-sm-0">
                                    <Button variant="success" className="btn-sm">
                                        <i className="mdi mdi-cart-arrow-right me-1"></i> Checkout
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        {/* <Modal show={true} onHide={() => {}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary">Close</Button>
                                <Button variant="primary">Save Changes</Button>
                            </Modal.Footer>
                        </Modal> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Siparisler;
