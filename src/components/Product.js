import React from 'react';

function Product(props) {
    return (
        <div>
            {props.image_url ? (
                <img src={props.image_url} alt={props.title} />
            ) : (
                <p>No Image Available</p>
            )}
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
