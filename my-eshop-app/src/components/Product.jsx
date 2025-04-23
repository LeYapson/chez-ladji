import React, { useState } from 'react';
import Ratings from './Ratings';

const Product = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Calculer le prix avec remise
  const discountedPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart();
  };

  // Déterminer le statut du stock
  const getStockStatus = () => {
    if (product.stock <= 0) {
      return <span className="stock out">Rupture de stock</span>;
    } else if (product.stock <= 10) {
      return <span className="stock low">Plus que {product.stock} en stock</span>;
    } else {
      return <span className="stock available">En stock</span>;
    }
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={isHovered && product.images && product.images.length > 1 ? product.images[1] : product.thumbnail} 
          alt={product.title} 
          className="product-image"
        />
        {product.discountPercentage > 0 && (
          <div className="discount-badge">-{Math.round(product.discountPercentage)}%</div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-category">{product.category}</p>
          
          {/* Utilisation du composant Ratings */}
          <div className="product-rating">
            <Ratings rating={product.rating} />
            <span className="rating-value">({product.rating})</span>
          </div>
          
          {/* Ajout du stock disponible */}
          <div className="product-stock">
            {getStockStatus()}
          </div>
        </div>
        
        <div className="product-price">
          <span className="price">{discountedPrice} €</span>
          {product.discountPercentage > 0 && (
            <span className="original-price">{product.price} €</span>
          )}
        </div>
      </div>
      
      <div className={`product-actions ${isHovered ? 'show' : ''}`}>
        <button className="action-button details">Voir détails</button>
        <button className="action-button add-to-cart" onClick={handleAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Product;