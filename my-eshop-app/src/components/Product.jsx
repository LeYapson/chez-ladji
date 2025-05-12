import React, { useState, useContext } from 'react';
import Ratings from './Ratings';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const discountedPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  // Déterminer le statut du stock
  const getStockStatus = () => {
    if (product.stock <= 0) {
      return <span className="stock-badge stock-out">Rupture de stock</span>;
    } else if (product.stock <= 10) {
      return <span className="stock-badge stock-low">Plus que {product.stock} en stock</span>;
    } else {
      return <span className="stock-badge stock-available">En stock</span>;
    }
  };

  return (
    <div 
      className="product-card product-horizontal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img 
          src={isHovered && product.images && product.images.length > 1 ? product.images[1] : product.thumbnail} 
          alt={product.title} 
          loading="lazy"
        />
        {product.discountPercentage > 0 && (
          <div className="discount-badge">-{Math.round(product.discountPercentage)}%</div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <div className="rating-wrapper">
            <Ratings rating={product.rating} />
            <span className="rating-value">({product.rating})</span>
          </div>
          
          {getStockStatus()}
        </div>
        
        <div className="product-footer">
          <div className="price-wrapper">
            <span className="price">{discountedPrice} €</span>
            {product.discountPercentage > 0 && (
              <span className="original-price">{product.price} €</span>
            )}
          </div>
          
          <button 
            className="product-button"
            onClick={handleAddToCart}
            aria-label={`Ajouter ${product.title} au panier`}
            disabled={product.stock <= 0}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;