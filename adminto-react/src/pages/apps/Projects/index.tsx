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

import { ChangeEvent, useEffect, useState } from 'react';
import { useRedux } from '../../../hooks';
import { selectedSepet } from '../../../redux/sepet/actions';
import { createKategori, getKategori, getKategoriler } from '../../../service/kategori';
import { addProduct, getProducts, removeProduct, updateProduct } from '../../../service/urunler';
import { set } from 'react-hook-form';
import { createSepet, getSepet, removeCart, updateCart } from '../../../service/sepet';

type SingleProjectProps = {
    searchOptions: any[];
};

const SingleProject = ({ searchOptions }: SingleProjectProps) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [products, setProducts] = useState<any[]>([]);
    const [state, setState] = useState<string>('');
    const { dispatch, appSelector } = useRedux();
    const [triggerGetProducts, setTriggerGetProducts] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProjectsList>();
    const [updatedData, setUpdatedData] = useState<any>({});
    const token = localStorage.getItem('token') || '';
    const [sepet, setSepet] = useState<any[]>([]);

    useEffect(() => {
        handleGetCartItems();
    }, [setSepet]);

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

    const openEditModal = (product: ProjectsList) => {
        const prod = {
            id: product.id,
            title: product.title,
            price: product.price,
            stock: product.quantity,
            description: product.shortDesc,
            variant: product.quantity >= 100 ? 'success' : product.variant,
        };
        setModalVisible(true);
        setUpdatedData(prod);

        setSelectedProduct(product);
        console.log('Ürün:', product);
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
    };

    useEffect(() => {
        updateStockStatus();
    }, []);

    const addToCart = async (project: ProjectsList, quantity: number) => {
        const existingCartItem = sepet.find((item) => item.products.id === project.id);
        if (existingCartItem) {
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + quantity,
            };
            setSepet(sepet.map((item) => (item.products.id === project.id ? updatedCartItem : item)));
            try {
                await updateCartQuantity(existingCartItem.id, updatedCartItem.quantity);
                console.log('Sepet güncellendi:', existingCartItem.id);
            } catch (error) {
                console.error('Sepet güncelleme hatası:', error);
            }
        } else {
            try {
                console.log('Sepet oluşturuluyor:', project);
                const response = await createSepet(project, quantity, token);
                setSepet([...sepet, response]);
                console.log('Sepet oluşturuldu:', response);
            } catch (error) {
                console.error('Sepet oluşturma hatası:', error);
            }
        }
    };

    const updateCartQuantity = async (cartItemId: number, quantity: number) => {
        try {
            await updateCart(cartItemId, quantity, token);
        } catch (error) {
            console.error('Hata:', error);
        }
    };

    const handleSelectQuantity = async (value: string) => {
        setSelectedQuantity(Number(value));
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
    const getCategoryName = (categoryId: string) => {
        const category = searchOptions.find((option) => option.id === categoryId);
        return category ? category.name : '';
    };

    const handleRemoveProduct = (id: number) => {
        removeProduct(id, token);
        setTriggerGetProducts(!triggerGetProducts);
    };

    const handleUpdateProduct = async () => {
        try {
            setSelectedProduct({ ...selectedProduct, ...updatedData });
            console.log('Güncellenen Ürün:', updatedData);
            await updateProduct(updatedData, token);
            setTriggerGetProducts(!triggerGetProducts);
            setModalVisible(false);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleRemoveFromCart = async (id: number) => {
        await removeCart(id, token);
        setSepet(sepet.filter((item) => item.id !== id));
    };

    const handleGetCartItems = async () => {
        try {
            const response = await getSepet(token); // Fetch categories from the database
            setSepet(response); // Update the search options with the formatted categories
            console.log('Sepet:', response);
        } catch (error) {
            console.error('Error fetching categories:', error);
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
                                        <Dropdown.Item onClick={() => openEditModal(product)}> Düzenle</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleRemoveProduct(product.id)}>
                                            {' '}
                                            Sil
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Ürünleri Düzenle</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ürün Adı</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="title"
                                                    value={updatedData.title || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ürün Fiyatı</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="price"
                                                    value={updatedData.price || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ürün Stoğu</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="stock"
                                                    value={updatedData.stock || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ürün Açıklaması</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="description"
                                                    value={updatedData.description || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setModalVisible(false)}>
                                            İptal
                                        </Button>
                                        <Button variant="primary" onClick={() => handleUpdateProduct()}>
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
                                        <h4 className="mb-0">${product.price}</h4>
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
                                        {product.stock}KG
                                    </span>
                                </h5>
                                <ProgressBar
                                    className={classNames('quantity-bar-alt-' + product.variant, 'quantity-sm')}>
                                    <ProgressBar
                                        variant={product.variant}
                                        now={product.stock}
                                        max={1000}
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
            {sepet.length >= 0 && (
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
                                            <th>Özellikler</th>
                                            <th>Adet</th>
                                            <th>Fiyat</th>
                                            <th>Toplam</th>
                                            <th style={{ width: '50px' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sepet.map((item, index) => {
                                            return (
                                                <tr key={index.toString()}>
                                                    <td>
                                                        <img
                                                            src={item.products.image}
                                                            alt={item.products.title}
                                                            title={item.products.title}
                                                            className="avatar-sm"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h5 className="m-0">{item.products.title}</h5>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '200px',
                                                        }}>
                                                        {item.products.customInputs.map((input: any, index: number) => (
                                                            <div key={index.toString()}>
                                                                <h5 className="m-0">{input.key}</h5>
                                                                <p className="m-0">{input.value}</p>
                                                            </div>
                                                        ))}
                                                    </td>

                                                    <td>
                                                        <h5 className="m-0">{item.quantity}</h5>
                                                    </td>
                                                    <td>{item.products.price}</td>
                                                    <td>{item.products.price * item.quantity}</td>
                                                    <td>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip>Remove</Tooltip>}>
                                                            <Button
                                                                variant="light"
                                                                className="btn-sm"
                                                                onClick={() => handleRemoveFromCart(item.id)}>
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

    const categoryObject = {
        id: '',
        name: '',
    };

    useEffect(() => {
        hangleGetKategoriler();
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

                if (!categoryExists) {
                    console.log('Yeni kategori oluşturuluyor:', searchInputValue);
                    const response = await createKategori(searchInputValue, token);
                    categoryObject.id = response.id;
                    categoryObject.name = response.name;
                    console.log('Yeni kategori oluşturuldu:', response);

                    // Update the existing categories with the newly added category
                    setExistingKategoriler([...existingKategoriler, searchInputValue]);
                    setTriggerGetKategoriler(!triggerGetKategoriler);
                } else {
                    const category = existingKategoriler.find(
                        (x) => x.toLowerCase() === searchInputValue.toLowerCase()
                    );
                    console.log('Kategori id:', category);
                    const kategoriObject = searchOptions.find((option) => option.name === category);
                    console.log('Kategori object:', kategoriObject);
                    categoryObject.id = kategoriObject?.id;
                    categoryObject.name = kategoriObject?.name;
                }

                // Save the product information to the database
                const productData = {
                    name: name,
                    price: price,
                    stock: stock,
                    description: description,
                    variant: stock >= 100 ? 'success' : stock < 100 ? 'warning' : stock === 0 ? 'danger' : 'danger',
                    categoryId: {
                        id: categoryObject.id,
                        name: categoryObject.name,
                    },
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
            <SingleProject searchOptions={searchOptions} />
        </>
    );
};

export default Projects;
