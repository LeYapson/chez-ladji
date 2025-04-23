import React from 'react';

const OrderBy = ({ onOrderChange }) => {
  return (
    <div>
      <label htmlFor="order">Order By:</label>
      <select id="order" onChange={(e) => onOrderChange(e.target.value)}>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
        <option value="rating-asc">Rating Ascending</option>
        <option value="rating-desc">Rating Descending</option>
      </select>
    </div>
  );
};

export default OrderBy;
