import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Logo from '../assets/chez_ladji.png';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = ({ onCategoryChange }) => {
  const { userAuthenticated } = useContext(AuthContext);
  
  return (
    <>
      <Header />
      
      <div className="home-hero">
        <div className="container">
          <div className="hero-content">
            <img src={Logo} alt="Chez Ladji Logo" className="hero-logo" />
            <h1>Bienvenue chez Ladji</h1>
            <p className="hero-tagline">Le boutiquier supérieur depuis 1954</p>
            <p className="hero-description">
              Découvrez notre collection exclusive de sapes certifiées "RDC Quality".
              Qualité exceptionnelle, style incomparable.
            </p>
            <div className="hero-cta">
              <Link to="/shop" className="primary-button">
                Découvrir la collection
              </Link>
              {!userAuthenticated && (
                <Link to="/login" className="secondary-button">
                  Se connecter
                </Link>
              )}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop" 
                alt="Collection Chez Ladji"
              />
            </div>
          </div>
        </div>
      </div>
      
      <section className="featured-categories">
        <div className="container">
          <h2 className="section-title">Nos catégories</h2>
          <div className="category-cards">
            <div 
              className="category-card" 
              onClick={() => {
                onCategoryChange('sunglasses');
                window.location.href = '/shop';
              }}
            >
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lunettes de soleil" 
                />
              </div>
              <div className="card-content">
                <h3>Lunettes de soleil</h3>
                <p>Protection et style pour tous les visages</p>
                <Link to="/shop" className="card-link" onClick={() => onCategoryChange('sunglasses')}>
                  Explorer
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div 
              className="category-card" 
              onClick={() => {
                onCategoryChange('mens-shirts');
                window.location.href = '/shop';
              }}
            >
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1965&auto=format&fit=crop" 
                  alt="Chemises homme" 
                />
              </div>
              <div className="card-content">
                <h3>Chemises Homme</h3>
                <p>Élégance et confort au quotidien</p>
                <Link to="/shop" className="card-link" onClick={() => onCategoryChange('mens-shirts')}>
                  Explorer
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Livraison mondiale</h3>
              <p>Nous expédions nos produits de qualité aux quatre coins du globe</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Qualité garantie</h3>
              <p>Tous nos produits sont certifiés RDC Quality pour une durabilité maximale</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Service client</h3>
              <p>Une équipe dédiée pour vous accompagner dans vos achats</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <svg className="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7M18 14H14C13.4696 14 12.9609 14.2107 12.5858 14.5858C12.2107 14.9609 12 15.4696 12 16V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18M10 19V5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Chez Ladji propose les meilleures sapes certifiées RDC Quality que j'ai pu trouver. La qualité est incroyable et le style est unique. Je recommande vivement!</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jean Dupont" />
                <div>
                  <h4>Jean Dupont</h4>
                  <p>Client fidèle depuis 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h2>Restez informé</h2>
              <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et nouveautés</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Votre adresse email" />
              <button className="primary-button">S'inscrire</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HomePage;