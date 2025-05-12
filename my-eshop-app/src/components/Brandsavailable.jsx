import React from 'react';

const BrandsAvailable = ({ brands, onBrandChange, products, selectedBrands }) => {
  return (
    <>
      <h3>Marques disponibles</h3>
      <div className="checkbox-group">
        {brands.map(brand => (
          <label key={brand} className="checkbox-label">
            <input 
              type="checkbox" 
              onChange={() => onBrandChange(brand)} 
              checked={selectedBrands.includes(brand)}
            />
            {brand} ({products.filter(product => product.brand === brand).length})
          </label>
        ))}
      </div>
    </>
  );
};

export default BrandsAvailable;