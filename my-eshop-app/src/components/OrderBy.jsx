import React from 'react';

const OrderBy = ({ onOrderChange, currentOrder }) => {
  return (
    <div className="custom-select">
      <select 
        onChange={(e) => onOrderChange(e.target.value)}
        value={currentOrder || ''}
      >
        <option value="">Trier par...</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
        <option value="rating-asc">Note croissante</option>
        <option value="rating-desc">Note décroissante</option>
      </select>
    </div>
  );
};

export default OrderBy;