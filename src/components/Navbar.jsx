import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

const Navbar = () => {
    return (
        <header className='nav-container'>
            <section className='user-nav'>
                <img src="" alt="Logo" />
                <a href="#">Register / Login</a>
            </section>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/products">Camisetas</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
};

export default Navbar;