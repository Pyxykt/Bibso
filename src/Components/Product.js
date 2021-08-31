import React from 'react';
import image from './ProductList';
import './Product.style.css';

const Product = () => {
    return (
        <section id="product">
            {
                image.map(item => (<img key={item} src={item} alt="img" />))
            }
        </section>
    )
}
export default Product;