import React from 'react';

const BrandsAvailable = ({ brands, onBrandChange, products }) => {
  return (
    <>
      <h3>Marques disponibles</h3>
      <div className="brand-checkboxes">
        {brands.map(brand => (
          <label key={brand}>
            <input type="checkbox" onChange={() => onBrandChange(brand)} defaultChecked />
            {brand} ({products.filter(product => product.brand === brand).length})
          </label>
        ))}
      </div>
    </>
  );
};

export default BrandsAvailable;