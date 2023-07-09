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
} from 'react-bootstrap';
import classNames from 'classnames';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import { FormInput } from '../../../components/form';

// types
import { ProjectsList } from './types';

// dummy data
import { projects } from './data';
import { useState } from 'react';

type SingleProjectProps = {
    projects: ProjectsList[];
};

const SingleProject = ({ projects }: SingleProjectProps) => {
    const [cartItems, setCartItems] = useState<ProjectsList[]>([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const addToCart = (project: ProjectsList, quantity: number) => {
        const exist = cartItems.find((x) => x.id === project.id);

        if (exist) {
            setCartItems(
                cartItems.map((x) => (x.id === project.id ? { ...exist, quantity: exist.quantity + quantity } : x))
            );
        } else {
            setCartItems([...cartItems, { ...project, quantity: quantity }]);
        }
    };

    const handleSelectQuantity = (value: string) => {
        setSelectedQuantity(Number(value));
    };
    return (
        <Row>
            {(projects || []).map((project, index) => {
                return (
                    <Col xl={4} key={index.toString()}>
                        <Card>
                            <Card.Body className="project-box">
                                <Badge bg={project.variant} className="float-end">
                                    {project.state}
                                </Badge>
                                <h4 className="mt-0">
                                    <Link to="#" className="text-dark">
                                        {project.title}
                                    </Link>
                                </h4>
                                <p className={classNames('text-' + project.variant, 'text-uppercase', 'font-13')}>
                                    {project.category}
                                </p>
                                <p className="text-muted font-13">
                                    {project.shortDesc}
                                    <Link to="#" className="text-primary">
                                        View more
                                    </Link>
                                </p>

                                <ul className="list-inline">
                                    <li className="list-inline-item me-4">
                                        <h4 className="mb-0">{project.price}</h4>
                                        <p className="text-muted">Fiyat</p>
                                    </li>
                                </ul>
                                <h5 className="mb-2 fw-semibold">
                                    Stok
                                    <span className={classNames('float-end', 'text-' + project.variant)}>
                                        {project.quantity}%
                                    </span>
                                </h5>
                                <ProgressBar
                                    className={classNames('quantity-bar-alt-' + project.variant, 'quantity-sm')}>
                                    <ProgressBar
                                        variant={project.variant}
                                        now={project.quantity}
                                        className="quantity-animated"
                                    />
                                </ProgressBar>
                                <input
                                    key={index}
                                    type="number"
                                    className="form-control mt-3"
                                    value={selectedQuantity.toString()}
                                    onChange={(e) => handleSelectQuantity(e.target.value)}></input>
                                <Button
                                    variant="outline-primary"
                                    className="btn-sm mt-3"
                                    onClick={() => addToCart(project, selectedQuantity)}>
                                    <i className="mdi mdi-cart me-1"></i>
                                    Sepete Ekle
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
            {cartItems.length >= 0 && (
                <Col xl={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Sepet</h4>
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '70px' }}>Ürün</th>
                                            <th>Ürün Adı</th>
                                            <th>Adet</th>
                                            <th>Fiyat</th>
                                            <th>Toplam</th>
                                            <th style={{ width: '50px' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => {
                                            return (
                                                <tr key={index.toString()}>
                                                    <td>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            title={item.title}
                                                            className="avatar-sm"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h5 className="m-0">{item.title}</h5>
                                                        <p className="mb-0 text-muted">{item.shortDesc}</p>
                                                    </td>
                                                    <td>
                                                        <h5 className="m-0">{item.quantity}</h5>
                                                    </td>
                                                    <td>{item.price}</td>
                                                    <td>{item.price * item.quantity}</td>
                                                    <td>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>Remove</Tooltip>}>
                                                            <Button
                                                                variant="light"
                                                                className="btn-sm"
                                                                onClick={() =>
                                                                    setCartItems(
                                                                        cartItems.filter((x) => x.id !== item.id)
                                                                    )
                                                                }>
                                                                <i className="mdi mdi-close"></i>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <Link to="#" className="btn btn-secondary waves-effect waves-light">
                                        <i className="mdi mdi-arrow-left"></i> Geri
                                    </Link>
                                </Col>
                                <Col sm={6}>
                                    <div className="text-sm-end mt-2 mt-sm-0">
                                        <Link
                                            to={{
                                                pathname: `/pages/invoice/`,
                                            }}>
                                            <Button variant="success" className="waves-effect waves-light">
                                                Onayla
                                            </Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
};

const Projects = () => {
    // set pagetitle
    usePageTitle({
        title: 'Ürünler',
        breadCrumbItems: [
            {
                path: 'apps/projects',
                label: 'Apps',
            },
            {
                path: 'apps/projects',
                label: 'Projects',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col sm={4}>
                    <Link to="#" className="btn btn-purple rounded-pill w-md waves-effect waves-light mb-3">
                        <i className="mdi mdi-plus me-1"></i>
                        Create Project
                    </Link>
                </Col>
                <Col sm={8}>
                    <div className="float-end">
                        <form className="row g-2 align-items-center mb-2 mb-sm-0">
                            <div className="col-auto">
                                <div className="d-flex">
                                    <label className="d-flex align-items-center">
                                        Phase
                                        <FormInput
                                            type="select"
                                            name="phase"
                                            containerClass="d-inline-block ms-2"
                                            className="form-select-sm">
                                            <option>All Projects(6)</option>
                                            <option>completed</option>
                                            <option>Quantity</option>
                                        </FormInput>
                                    </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="d-flex">
                                    <label className="d-flex align-items-center">
                                        Sort
                                        <FormInput
                                            type="select"
                                            name="sort"
                                            containerClass="d-inline-block ms-2"
                                            className="form-select-sm">
                                            <option>Date</option>
                                            <option>Name</option>
                                            <option>End date</option>
                                            <option>Start Date</option>
                                        </FormInput>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
            <SingleProject projects={projects} />
        </>
    );
};

export default Projects;
