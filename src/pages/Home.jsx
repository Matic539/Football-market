import React from 'react';
import cc91 from '../assets/img/colocolo/colocolo91.webp';
import uch11 from '../assets/img/uchile/uchile11.webp';
import chleague from '../assets/img/leagues/chleague.png';
import enleague from '../assets/img/leagues/premierleague.png';
import chselec from '../assets/img/leagues/selecciones.webp';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/pages/home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Fútbol Camisetas Vintage</h1>
            <p>Descubre los mejores productos a los mejores precios.</p>
            <section className='img-products'>
                <img src={cc91} alt="colocolo91" />
                <div>
                    <h2>COMPRA TUS CAMISETAS FAVORITAS</h2>
                    <Link to="/products" className="btn-products"><b>Ver Productos</b></Link>
                </div>
                <img src={uch11} alt="" />
            </section>

            <h2>Busca por tus ligas favoritas</h2>
            <section className='leagues'>
                <div className="league-card">
                    <img src={chleague} alt="Liga Chilena" />
                    <p>Liga Chilena</p>
                </div>
                <div className="league-card">
                    <img src={enleague} alt="Premier League" />
                    <p>Premier League</p>
                </div>
                <div className="league-card">
                    <img src={chselec} alt="Selecciones" />
                    <p>Selecciones</p>
                </div>
                <div className="league-card">
                    <p>Más Ligas...</p>
                </div>
            </section>
        </div>
    );
};

export default Home;