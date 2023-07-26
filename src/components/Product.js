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
                {props.stock ? "In Stock" : "Out of Stock"}
            </p>
            <p>
                {props.gluten_free ? "Gluten Free" : "Not Gluten Free"}
            </p>
            <p>
                {props.diary_free ? "Dairy Free" : "Not Dairy Free"}
            </p>
        </div>
    )
}

export default Product;
