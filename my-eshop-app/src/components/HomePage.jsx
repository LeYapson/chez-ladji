import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/chez_ladji.png';
import Footer from './Footer';

const HomePage = ({ onCategoryChange }) => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img src={Logo} alt="Chez Ladji Logo" className="home-logo" />
        <h1>Chez Ladji</h1>
        <h2>Le boutiquier supérieur</h2>
        <p className="tagline">Revendeur officiel de sapes certifiées "RDC Quality" depuis 1954</p>
      </div>
      
      <div className="about-section">
        <h2>Notre boutique</h2>
        <p>
          Bienvenue dans l'univers de Ladji, une référence incontournable pour les amateurs de mode authentique et de qualité.
          Depuis 1954, nous sélectionnons avec passion les meilleurs articles pour vous offrir un style unique et raffiné.
        </p>
        <p>
          Notre mission est simple : vous proposer des produits d'exception au meilleur prix, dans une expérience d'achat agréable
          et personnalisée. Que vous cherchiez des lunettes de soleil tendance ou des chemises élégantes, notre collection saura répondre à vos attentes.
        </p>
      </div>
      
      <div className="categories-section">
        <h2>Nos catégories</h2>
        <div className="category-cards">
          <Link to="/shop/sunglasses" className="category-card" onClick={() => onCategoryChange('sunglasses')}>
            <div className="category-image sunglasses"></div>
            <h3>Lunettes de soleil</h3>
            <p>Protection et style pour tous les visages</p>
          </Link>
          
          <Link to="/shop/mens-shirts" className="category-card" onClick={() => onCategoryChange('mens-shirts')}>
            <div className="category-image shirts"></div>
            <h3>Chemises Homme</h3>
            <p>Élégance et confort au quotidien</p>
          </Link>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Prêt à découvrir nos produits?</h2>
        <Link to="/shop" className="cta-button">
          Voir la boutique
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;