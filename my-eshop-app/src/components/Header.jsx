import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import Logo from '../assets/chez_ladji.png';

const Header = ({ category, onCategoryChange }) => {
  const { userAuthenticated, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/" className="brand">
            <img src={Logo} alt="Chez Ladji Logo" />
            <h1>Chez Ladji</h1>
          </Link>
          
          {category && (
            <div className="category-nav">
              <button 
                className={`nav-button ${category === 'sunglasses' ? 'active' : ''}`}
                onClick={() => onCategoryChange('sunglasses')}
              >
                Lunettes de soleil
              </button>
              <button 
                className={`nav-button ${category === 'mens-shirts' ? 'active' : ''}`}
                onClick={() => onCategoryChange('mens-shirts')}
              >
                Chemises Homme
              </button>
            </div>
          )}
          
          <div className="header-actions">
            {userAuthenticated ? (
              <div className="user-menu">
                <Link to="/dashboard" className="user-profile">
                  <img 
                    src={userAuthenticated.image} 
                    alt={userAuthenticated.firstName} 
                    className="user-avatar" 
                  />
                  <span className="user-name">{userAuthenticated.firstName}</span>
                </Link>
                <button onClick={handleLogout} className="logout-btn">
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link to="/login" className="login-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Connexion
              </Link>
            )}
            
            <Link to="/cart" className="cart">
              <button className="cart-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;