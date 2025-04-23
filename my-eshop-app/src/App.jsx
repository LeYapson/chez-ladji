import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import OrderBy from './components/OrderBy';
import BrandsAvailable from './components/Brandsavailable';
import HomePage from './components/HomePage';
import './index.css';

const App = () => {
  const [category, setCategory] = useState('sunglasses');
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [currentOrder, setCurrentOrder] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data.products);
        const uniqueBrands = [...new Set(data.products.map(product => product.brand))];
        setBrands(uniqueBrands);
        setSelectedBrands(uniqueBrands);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
  
    fetchProducts();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleOrderChange = (order) => {
    setCurrentOrder(order);
    
    let sortedProducts = [...products];
    if (order === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'rating-asc') {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (order === 'rating-desc') {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sortedProducts);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prevSelectedBrands =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter(b => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const filteredProducts = selectedBrands.length
    ? products.filter(product => selectedBrands.includes(product.brand))
    : products;

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const ShopPage = () => (
    <>
      <Header category={category} onCategoryChange={handleCategoryChange} cartCount={cartCount} />
      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Trier par</h3>
            <OrderBy 
              onOrderChange={handleOrderChange} 
              currentOrder={currentOrder} 
            />
          </div>
          <div className="sidebar-section">
            <BrandsAvailable 
              brands={brands} 
              onBrandChange={handleBrandChange} 
              products={products}
              selectedBrands={selectedBrands}
            />
          </div>
        </aside>
        <main className="main-content">
          <Products products={filteredProducts} onAddToCart={addToCart} />
        </main>
      </div>
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onCategoryChange={handleCategoryChange} />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:categoryId" element={<ShopPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;