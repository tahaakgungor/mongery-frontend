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

// types
import { CustomInput, ProjectsList } from './types';

// dummy data
import { projects } from './data';
import { ChangeEvent, useState } from 'react';
import { useRedux } from '../../../hooks';

type SingleProjectProps = {
    projects: ProjectsList[];
};

const SingleProject = ({ projects }: SingleProjectProps) => {
    const [cartItems, setCartItems] = useState<ProjectsList[]>([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { dispatch, appSelector } = useRedux();

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

    const musteri = appSelector((state) => state.Musteriler.musteriler);

    console.log(musteri);

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
    const [modalVisible, setModalVisible] = useState(false);
    const [customInputs, setCustomInputs] = useState<CustomInput[]>([{ name: '', placeholder: '' }]);

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

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleAddProject = () => {
        toggleModal();
    };

    const handleSaveProduct = () => {
        toggleModal();
    };

    const handleAddInput = (index: number, key: string = '', value: string = ''): void => {
        const list = [...customInputs];
        list[index][key] = value;
        setCustomInputs(list);
    };

    function handleRemoveInput(index: number): void {
        const list = [...customInputs];
        list.splice(index, 1);
        setCustomInputs(list);
    }
    return (
        <>
            <Row>
                <Modal show={modalVisible} onHide={toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ürün Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={8}>
                            <FormSelect name="phase" className="mb-3">
                                <option value="0">Ürün Kategorisi</option>
                                <option value="1">Kategori 1</option>
                                <option value="2">Kategori 2</option>
                                <option value="3">Kategori 3</option>
                            </FormSelect>

                            <FormInput type="text" name="name" placeholder="Ürün Adı" containerClass={'mb-3'} />

                            <FormInput type="text" name="name" placeholder="Ürün Fiyatı" containerClass={'mb-3'} />
                            <FormInput type="text" name="name" placeholder="Ürün Stoğu" containerClass={'mb-3'} />
                            <FormInput type="text" name="name" placeholder="Ürün Açıklaması" containerClass={'mb-3'} />
                            <FormInput type="text" name="name" placeholder="Ürün Resmi" containerClass={'mb-3'} />
                            <Form.Group>
                                <Form.Label>Özel Alanlar</Form.Label>
                                {customInputs.map((input, index) => (
                                    <InputGroup key={index} className="mb-3">
                                        <FormControl
                                            placeholder="Alan Adı"
                                            value={input.name}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                handleAddInput(index, 'name', e.target.value)
                                            }
                                        />
                                        <FormControl
                                            placeholder="Alan Değeri"
                                            value={input.placeholder}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                handleAddInput(index, 'placeholder', e.target.value)
                                            }
                                        />
                                        <Button variant="danger" onClick={() => handleRemoveInput(index)}>
                                            <BsDash />
                                        </Button>
                                    </InputGroup>
                                ))}
                                <Button
                                    variant="success"
                                    onClick={() => setCustomInputs([...customInputs, { name: '', placeholder: '' }])}>
                                    <BsPlus />
                                </Button>
                            </Form.Group>
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSaveProduct}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Col sm={4}>
                    <Button variant="primary" className="mb-3" onClick={handleAddProject}>
                        <i className="mdi mdi-plus-circle me-1"></i> Ürün Ekle
                    </Button>
                </Col>
            </Row>
            <SingleProject projects={projects} />
        </>
    );
};

export default Projects;
