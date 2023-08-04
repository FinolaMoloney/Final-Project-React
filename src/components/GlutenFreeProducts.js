import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Product from './Product';
import NourishAndSproutGFIcon from '../images/products/NourishAndSproutGFIcon.jpg';
import NourishAndSproutDFIcon from '../images/products/NourishAndSproutDFIcon.jpg';

function GlutenFreeProducts() {
    const [productList, setProductList] = useState([]);
    const [categoryFilter] = useState('true');
    
    useEffect(() =>
    async function () {
        var response = await axios.get("http://localhost:4000/products",
        {headers: {Accept: "application/json"}})
        setProductList(response.data)
    }, [])
    
    const navigate = useNavigate();
    const handleShopHereClick = () => {
    navigate('/products');
    };

    function getImageFilePath(productId) {
        return `${process.env.PUBLIC_URL}/images/products/NourishAndSprout${productId}.webp`;
    }

    return (
        <div className="background">
            <div className="row banner rangeHeader">
                <h3>Our Coeliec Range</h3>
                <p>At Nourish and Sprout our goal is to ensure all our customers are looked after. We have worked hard and curated a range of products that considers all dietary requirements without compromising on taste. Below you can find the list of products that are gluten free and therefore suitable for Coeliecs.</p>
                <button className="btn btn-outline-secondary btn-sm col-sm-1" onClick={handleShopHereClick}>Shop here</button>
            </div>
            <div className="container-fluid">
                <div className="row sub-header">
                </div>
                <div className="row">
                    {productList.map(function (product, index) {
                    const imageFilePath = getImageFilePath(product.id);
                    if (
                        (categoryFilter === '' || categoryFilter === 'true') &&
                        product.gluten_free
                    ) {
                    return (
                        <div className="col-sm-5 col-lg-4 mb-3 mb-sm-5" key={index}>
                            <div className="card h-100">
                                <div className="card-body shop-card">
                                    <Product
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    stock={product.stock} gluten_free={product.gluten_free} diary_free={product.diary_free} image_url={getImageFilePath(product.id)}
                                    /><br/><br/>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            {product.gluten_free && (
                                                <img src={NourishAndSproutGFIcon} alt="Gluten-Free Icon" className="gf-icon" />
                                            )}
                                        </div>
                                        <div className="col-sm-1">
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
                </div>
            </div>
        </div>
    );
  }

export default GlutenFreeProducts;
