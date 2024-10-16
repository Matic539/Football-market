import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/pages/productdetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="product-detail">
            <h1>Detalle del producto {id}</h1>
            <p>Descripción detallada del producto.</p>
        </div>
    );
};

export default ProductDetail;
