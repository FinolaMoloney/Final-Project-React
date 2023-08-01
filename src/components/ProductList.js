import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll';
import axios from 'axios';
import Product from './Product';
import './Product.css'
import NourishAndSproutGFIcon from '../images/products/NourishAndSproutGFIcon.jpg';
import NourishAndSproutDFIcon from '../images/products/NourishAndSproutDFIcon.jpg';

function ProductList({ cartItems, setCartItems  }) {
    const [productList, setProductList] = useState([]);
    const [dietFilter, setDietFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    
    useEffect(() =>
    async function () {
        var response = await axios.get("http://localhost:4000/products",
        {headers: {Accept: "application/json"}})
        setProductList(response.data)
    }, [])

    function handleDietFilterChange(e) {
        e.preventDefault();
        setDietFilter(e.target.value === 'null' ? null : e.target.value);
        setAgeFilter('');
    }

    function handleAgeFilterChange(e) {
        e.preventDefault();
        setAgeFilter(e.target.value === 'null' ? null : e.target.value);
        setDietFilter('');
    }

    const navigate = useNavigate();
    const addItemToCart = (index) => {
        const selectedProduct = productList[index];
        setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);
        navigate('/cart');
    };

    function getImageFilePath(productId) {
        return `${process.env.PUBLIC_URL}/images/products/NourishAndSprout${productId}.jpg`;
    }
       
    return (
        <div className="background">           
            <div className="row banner" id="back">
                <h3>SHOP HERE</h3>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 filters">
                        <h6>Filter by dietary requirement here</h6>
                        <select
                        value={dietFilter}
                        className="btn btn-outline-secondary btn-sm filters"
                        type="dropdown"
                        onChange={handleDietFilterChange}
                        >
                            <option value="">All</option>
                            <option value="gluten">Gluten Free</option>
                            <option value="diary">Diary Free</option>
                        </select>
                    </div>
                    <div className="col-sm-8">
                            <h6>Filter by age group here</h6>

                            <select
                            value={ageFilter}
                            className="btn btn-outline-secondary btn-sm"
                            type="dropdown"
                            onChange={handleAgeFilterChange}
                            >
                                <option value="">All</option>
                                <option value="6-12M">6 Months+</option>
                                <option value="1-2Y">1 Year+</option>
                                <option value="2-4Y">2 Years+</option>
                            </select>
                        </div>
                    </div>
                <div className="row">
                    {productList.map(function (product, index) {
                        const imageFilePath = getImageFilePath(product.id);
                    if (
                        (dietFilter === 'gluten' && ageFilter === '') &&
                        product.gluten_free
                    ) {
                    return (
                        <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                            <div className="card">
                                <div className="card-body shop-card">
                                    <Product
                                    title={product.title}
                                    description={product.description}
                                    price={'€'+product.price}
                                    stock={product.stock} gluten_free={product.gluten_free} diary_free={product.diary_free} image_url={getImageFilePath(product.id)}
                                    />
                                    <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => addItemToCart(index)}
                                    >
                                        Add to Cart
                                    </button><br/><br/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {product.gluten_free && (
                                                <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                            )}
                                        </div>
                                        <div className="col-sm-6">
                                            {product.diary_free && (
                                                <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                    } else if (
                    (dietFilter === 'diary' && ageFilter === '') &&
                    product.diary_free
                    ) {
                    return (
                        <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                            <div className="card">
                                <div className="card-body shop-card">
                                    <Product
                                    title={product.title}
                                    description={product.description}
                                    price={'€'+product.price}
                                    stock={product.stock}
                                    gluten_free={product.gluten_free}
                                    diary_free={product.diary_free}
                                    image_url={getImageFilePath(product.id)}
                                    />
                                    <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => addItemToCart(index)}
                                    >
                                    Add to Cart
                                    </button><br/><br/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {product.gluten_free && (
                                                <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                            )}
                                        </div>
                                        <div className="col-sm-6">
                                            {product.diary_free && (
                                                <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                    }
                    else if (
                        (dietFilter === '' && ageFilter === '6-12M') &&
                        product.months_6_to_12
                        ) {
                        return (
                            <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                                <div className="card">
                                    <div className="card-body shop-card">
                                        <Product
                                        title={product.title}
                                        description={product.description}
                                        price={'€'+product.price}
                                        stock={product.stock}
                                        gluten_free={product.gluten_free}
                                        diary_free={product.diary_free}
                                        image_url={getImageFilePath(product.id)}
                                        />
                                        <button
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => addItemToCart(index)}
                                        >
                                        Add to Cart
                                        </button><br/><br/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {product.gluten_free && (
                                                    <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                                )}
                                            </div>
                                            <div className="col-sm-6">
                                                {product.diary_free && (
                                                    <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        }
                        else if (
                            (dietFilter === '' && ageFilter === '1-2Y') &&
                            product.years_1_to_2
                            ) {
                            return (
                                <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                                    <div className="card">
                                        <div className="card-body shop-card">
                                            <Product
                                            title={product.title}
                                            description={product.description}
                                            price={'€'+product.price}
                                            stock={product.stock}
                                            gluten_free={product.gluten_free}
                                            diary_free={product.diary_free}
                                            image_url={getImageFilePath(product.id)}
                                            />
                                            <button
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={() => addItemToCart(index)}
                                            >
                                            Add to Cart
                                            </button><br/><br/>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    {product.gluten_free && (
                                                        <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                                    )}
                                                </div>
                                                <div className="col-sm-6">
                                                    {product.diary_free && (
                                                        <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        );
                        }
                        else if (
                            (dietFilter === '' && ageFilter === '2-4Y') &&
                            product.years_2_to_4
                            ) {
                            return (
                                <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                                    <div className="card">
                                        <div className="card-body shop-card">
                                            <Product
                                            title={product.title}
                                            description={product.description}
                                            price={'€'+product.price}
                                            stock={product.stock}
                                            gluten_free={product.gluten_free}
                                            diary_free={product.diary_free}
                                            image_url={getImageFilePath(product.id)}
                                            />
                                            <button
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={() => addItemToCart(index)}
                                            >
                                            Add to Cart
                                            </button><br/><br/>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    {product.gluten_free && (
                                                        <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                                    )}
                                                </div>
                                                <div className="col-sm-6">
                                                    {product.diary_free && (
                                                        <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            }
                            else if (
                                (dietFilter === '' && ageFilter === '') 
                                ) {
                                return (
                                    <div className="col-sm-5 mb-3 mb-sm-4" key={index}>
                                        <div className="card">
                                            <div className="card-body shop-card">
                                                <Product
                                                image_url={getImageFilePath(product.id)}
                                                title={product.title}
                                                description={product.description}
                                                price={'€'+product.price}
                                                stock={product.stock}
                                                gluten_free={product.gluten_free}
                                                diary_free={product.diary_free}
                                                />
                                                <button
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => addItemToCart(index)}
                                                >
                                                Add to Cart
                                                </button><br/><br/>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        {product.gluten_free && (
                                                            <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                                        )}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {product.diary_free && (
                                                            <img src={NourishAndSproutDFIcon} alt="Diary-Free Icon" className="df-icon" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                                }
                    return null;
                    })}
                    <div class="row">
				        <button class="col-sm-1 btn btn-outline-secondary btn-sm"><Link to="back" smooth={true} duration={500}>Back to Top</Link></button>
                        <small className="col-sm-11 disclaimer">*Please note all products marked with DF are diary free and all products marked with GF are gluten free</small>
			        </div>
                </div>
            </div>
        </div>
    );
  }

export default ProductList;
