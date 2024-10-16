import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/productcard.css';

const ProductCard = () => {
    return (
        <div className="product-card">
            <h2>Producto</h2>
            <p>Descripción corta del producto.</p>
            <Link to="/products/1">Ver detalles</Link>
        </div>
    );
};

export default ProductCard;