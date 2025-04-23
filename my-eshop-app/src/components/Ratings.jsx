import React from 'react';

const Ratings = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];
  
  // Étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star filled">★</span>);
  }
  
  // Étoile à moitié pleine si nécessaire
  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">★</span>);
  }
  
  // Étoiles vides pour compléter à 5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star">☆</span>);
  }
  
  return <div className="ratings">{stars}</div>;
};

export default Ratings;