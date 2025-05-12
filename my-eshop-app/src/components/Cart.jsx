import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };

  const getDiscountedPrice = (product) => {
    return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
  };

  const getItemTotal = (product) => {
    return (parseFloat(getDiscountedPrice(product)) * product.quantity).toFixed(2);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="cart-page">
          <h1 className="page-title">Mon Panier</h1>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h2>Votre panier est vide</h2>
              <p>Parcourez notre boutique pour trouver des produits qui vous plaisent</p>
              <Link to="/shop" className="primary-button">Continuer mes achats</Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                <div className="cart-header">
                  <div className="cart-header-product">Produit</div>
                  <div className="cart-header-price">Prix</div>
                  <div className="cart-header-quantity">Quantité</div>
                  <div className="cart-header-total">Total</div>
                  <div className="cart-header-action"></div>
                </div>
                
                {cartItems.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-product">
                      <img src={item.thumbnail} alt={item.title} />
                      <div className="cart-item-details">
                        <h3>{item.title}</h3>
                        <p className="cart-item-brand">{item.brand}</p>
                      </div>
                    </div>
                    
                    <div className="cart-item-price">
                      <span className="current-price">{getDiscountedPrice(item)} €</span>
                      {item.discountPercentage > 0 && (
                        <span className="original-price">{item.price} €</span>
                      )}
                    </div>
                    
                    <div className="cart-item-quantity">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      />
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="cart-item-total">
                      {getItemTotal(item)} €
                    </div>
                    
                    <div className="cart-item-remove">
                      <button onClick={() => removeFromCart(item.id)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <button className="secondary-button" onClick={clearCart}>Vider le panier</button>
                
                <div className="cart-totals">
                  <div className="cart-subtotal">
                    <span>Sous-total</span>
                    <span>{cartTotal} €</span>
                  </div>
                  <div className="cart-shipping">
                    <span>Frais de livraison</span>
                    <span>Gratuit</span>
                  </div>
                  <div className="cart-total">
                    <span>Total</span>
                    <span>{cartTotal} €</span>
                  </div>
                  
                  <button className="primary-button checkout-button">
                    Passer la commande
                  </button>
                </div>
              </div>
              
              <div className="cart-continue">
                <Link to="/shop" className="secondary-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Continuer mes achats
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;