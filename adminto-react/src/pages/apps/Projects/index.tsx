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
    Dropdown,
} from 'react-bootstrap';
import { BsPlus, BsDash } from 'react-icons/bs';
import classNames from 'classnames';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import { FormInput } from '../../../components/form';

// types
import { CustomInput, ProjectsList, SepetData } from './types';

// dummy data
import { projects } from './data';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRedux } from '../../../hooks';
import { selectedSepet } from '../../../redux/sepet/actions';
import { createKategori, getKategori, getKategoriler } from '../../../service/kategori';
import { addProduct, getProducts, removeProduct, updateProduct } from '../../../service/urunler';
import { set } from 'react-hook-form';

type SingleProjectProps = {
    projects: ProjectsList[];
    searchOptions: any[];
};

const SingleProject = ({ projects, searchOptions }: SingleProjectProps) => {
    const [cartItems, setCartItems] = useState<ProjectsList[]>([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [products, setProducts] = useState<any[]>([]);
    const [state, setState] = useState<string>('');
    const { dispatch, appSelector } = useRedux();
    const [triggerGetProducts, setTriggerGetProducts] = useState<boolean>(false);
    const [stockLabels, setStockLabels] = useState<{ [key: string]: string }>({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [updatedData, setUpdatedData] = useState<any>({});
    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        // Retrieve stock labels from localStorage
        const storedStockLabels = localStorage.getItem('stockLabels');
        if (storedStockLabels) {
            setStockLabels(JSON.parse(storedStockLabels));
        }
    }, []);

    useEffect(() => {
        // Save stock labels to localStorage
        localStorage.setItem('stockLabels', JSON.stringify(stockLabels));
    }, [stockLabels]);

    useEffect(() => {
        handleGetProducts();
    }, [triggerGetProducts]);
    const checkStock = (stock: number) => {
        if (stock == 0) {
            return 'Stok Yok';
        }
        if (stock < 100) {
            return 'Stok Az';
        }
        return 'Stok Var';
    };

    const openEditModal = (title: any) => {
        setModalVisible(true);
        setSelectedProject(title);
        setUpdatedData({ title });
    };
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUpdatedData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const updateStockStatus = () => {
        const updatedStockLabels: { [key: string]: string } = {};

        products.forEach((project) => {
            const stockStatus = checkStock(project.stock);
            updatedStockLabels[project.id] = stockStatus;
        });

        setStockLabels(updatedStockLabels);
    };

    useEffect(() => {
        updateStockStatus();
    }, []);

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
    const handleSelectSepet = (sepet: ProjectsList[]) => {
        dispatch(selectedSepet('sepet', cartItems));
    };

    const musteri = appSelector((state) => state.Musteriler.musteriler);

    const handleGetProducts = async () => {
        try {
            const response = await getProducts(token); // Fetch categories from the database
            setProducts(response); // Update the search options with the formatted categories
            console.log('Ürünler:', response);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    const getCategoryName = (categoryId: string) => {
        const category = searchOptions.find((option) => option.id === categoryId);
        return category ? category.name : '';
    };

    const handleRemoveProduct = (id: number) => {
        removeProduct(id, token);
        setTriggerGetProducts(!triggerGetProducts);
    };

    const handleUpdateProduct = async (id: number) => {
        try {
            // Find the product with the matching id
            const product = products.find((item) => item.id === id);
            console.log('Ürün:', product);

            if (product) {
                // Perform the update operation on the product
                await updateProduct(product, token);
                console.log('Ürün güncellendi:', product);

                // Trigger the getProducts function to fetch the updated product list
                setTriggerGetProducts(!triggerGetProducts);
                setModalVisible(false);
            }
        } catch (error) {
            console.error('Ürün güncelleme hatası:', error);
        }
    };

    return (
        <Row>
            {(products || []).map((product, index) => {
                return (
                    <Col xl={4} key={index.toString()}>
                        <Card>
                            <Card.Body className="project-box">
                                <Dropdown className="float-end" align="end">
                                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => openEditModal(product.title)}>
                                            {' '}
                                            Düzenle
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleRemoveProduct(product.id)}>
                                            {' '}
                                            Sil
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Proje Düzenle</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Proje Adı</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="title"
                                                    value={updatedData.title || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            {/* Add more form fields for other project properties */}
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setModalVisible(false)}>
                                            İptal
                                        </Button>
                                        <Button variant="primary" onClick={() => handleUpdateProduct(product.id)}>
                                            Düzenle
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Badge bg={product.variant} className="float-end">
                                    {state}
                                </Badge>
                                <h4 className="mt-0">
                                    <Link to="#" className="text-dark">
                                        {product.title}
                                    </Link>
                                </h4>
                                <p className={classNames('text-' + product.variant, 'text-uppercase', 'font-13')}>
                                    {getCategoryName(product.categoryId)}
                                </p>

                                <p className="text-muted font-13">
                                    {product.description}
                                    <Link to="#" className="text-primary">
                                        View more
                                    </Link>
                                </p>

                                <ul className="list-inline">
                                    <li className="list-inline-item me-4">
                                        <h4 className="mb-0">{product.price}</h4>
                                        <p className="text-muted">Fiyat</p>
                                    </li>
                                    {product.customInputs.map((input: any, index: number) => (
                                        <li className="list-inline-item" key={index.toString()}>
                                            <h4 className="mb-0">{input.value}</h4>
                                            <p className="text-muted">{input.key}</p>
                                        </li>
                                    ))}
                                </ul>

                                <h5 className="mb-2 fw-semibold">
                                    Stok
                                    <span className={classNames('float-end', 'text-' + product.variant)}>
                                        {product.stock}
                                    </span>
                                </h5>
                                <ProgressBar
                                    className={classNames('quantity-bar-alt-' + product.variant, 'quantity-sm')}>
                                    <ProgressBar
                                        variant={product.variant}
                                        now={product.stock}
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
                                    onClick={() => addToCart(product, selectedQuantity)}>
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
                                            <Button
                                                variant="success"
                                                className="waves-effect waves-light"
                                                onClick={() => handleSelectSepet(cartItems)}>
                                                <i className="mdi mdi-cash-multiple me-1"></i> Onayla
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
    const [kategoriInput, setKategoriInput] = useState('');
    const [existingKategoriler, setExistingKategoriler] = useState<string[]>([]);
    const [avatar, setAvatar] = useState<File>() || '';
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [variant, setVariant] = useState<string>('');
    const [res, setRes] = useState<any>();

    const [searchInputValue, setSearchInputValue] = useState<string>('');
    const [searchOptions, setSearchOptions] = useState<any[]>([]);
    const [triggerGetKategoriler, setTriggerGetKategoriler] = useState<boolean>(false);
    const [products, setProducts] = useState<any[]>([]);

    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        hangleGetKategoriler();
        console.log(products);

        console.log(searchInputValue);
    }, [res]);

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

    const handleSaveProduct = async () => {
        toggleModal();

        if (searchInputValue) {
            try {
                console.log('Kategori oluşturuluyor:', searchInputValue, 'exist', existingKategoriler);
                // Check if the category already exists
                const categoryExists = existingKategoriler.some(
                    (x) => x.toLowerCase() === searchInputValue.toLowerCase()
                );

                let categoryId = null;

                if (!categoryExists) {
                    console.log('Yeni kategori oluşturuluyor:', searchInputValue);
                    const response = await createKategori(searchInputValue, token);
                    setRes(response);
                    categoryId = response.id;
                    console.log('Yeni Kategori, ', categoryId);
                    console.log('Yeni kategori oluşturuldu:', response);

                    // Update the existing categories with the newly added category
                    setExistingKategoriler([...existingKategoriler, searchInputValue]);
                    setTriggerGetKategoriler(!triggerGetKategoriler);
                } else {
                    console.log('Bu kategori zaten mevcut:', searchInputValue);
                    const category = existingKategoriler.find(
                        (x) => x.toLowerCase() === searchInputValue.toLowerCase()
                    );
                    const categoryObject = searchOptions.find((option) => option.name === category);
                    categoryId = categoryObject.id;
                    console.log('Kategori id ELSE:', categoryId);
                }

                // Save the product information to the database
                const productData = {
                    name: name,
                    price: price,
                    stock: stock,
                    description: description,
                    variant: stock >= 100 ? 'success' : stock < 100 ? 'warning' : stock === 0 ? 'danger' : 'danger',
                    category: categoryId,
                    customFields: customInputs,
                    image: 'avatar',
                };
                console.log('Ürün kaydediliyor:', productData);

                // Perform the API request to save the product data to the database
                await addProduct(productData, token);

                // Perform additional operations after saving the product, such as updating or reloading the product data
            } catch (error) {
                console.error('Ürün kaydetme hatası:', error);
            }
        }
    };

    const hangleGetKategoriler = async () => {
        try {
            const response = await getKategoriler(token); // Fetch categories from the database

            setExistingKategoriler(response.map((x: any) => x.name));

            setSearchOptions(response); // Update the search options with the formatted categories
            console.log('Kategorsiler:', searchOptions);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleGetProducts = async () => {
        try {
            const response = await getProducts(token); // Fetch categories from the database
            setProducts(response); // Update the search options with the formatted categories
            console.log('Ürünler:', response);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
        }
    };

    return (
        <>
            <Row>
                <Modal show={modalVisible} onHide={toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ürün Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={8}>
                            <Stack spacing={2} sx={{ width: 310, height: 70 }}>
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={searchOptions.map((option) => option.name)}
                                    onInputChange={(event, value) => setSearchInputValue(value)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Kategori Ara"
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                            }}
                                        />
                                    )}
                                />
                            </Stack>

                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Ürün Adı"
                                containerClass={'mb-3'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />

                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Ürün Fiyatı"
                                containerClass={'mb-3'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
                            />
                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Ürün Stoğu"
                                containerClass={'mb-3'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setStock(Number(e.target.value))}
                            />
                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Ürün Açıklaması"
                                containerClass={'mb-3'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                            />
                            <FormInput
                                label={'Avatar'}
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                containerClass={'mb-3'}
                            />
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
            <SingleProject projects={projects} searchOptions={searchOptions} />
        </>
    );
};

export default Projects;
