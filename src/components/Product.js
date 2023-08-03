import React from 'react';
import './Product.css'

function Product(props) {
    return (
        <div>
            <img className="productImg" src={props.image_url} alt={props.title} />
            <h3>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
            <p>
                {props.price}
            </p>
            <p>
                {props.stock ? "" : "This product is currently out of stock, please check back soon!"}
            </p>
            {/*
            <small>
                {props.gluten_free ? "" : " *Contains Gluten "}
                {props.diary_free ? "" : " *Contains Dairy "}
            </small>
            </p>*/}
        </div>
    )
}

export default Product;
