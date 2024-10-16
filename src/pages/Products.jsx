import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/pages/products.css';

const Products = () => {
    return (
        <div className="products">
            <h1>Productos</h1>
            <div className="product-list">
                {/* Aquí puedes mapear una lista de productos para mostrar */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;