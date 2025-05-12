import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import OrderBy from './components/OrderBy';
import BrandsAvailable from './components/Brandsavailable';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import './index.css';

// Ce composant wrapper permet d'éviter d'afficher le header sur certaines pages
const AppContent = () => {
  const location = useLocation();
  const [category, setCategory] = useState('sunglasses');
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [currentOrder, setCurrentOrder] = useState('');

  // Définir les routes où le header et footer ne doivent pas apparaître
  const noHeaderRoutes = ['/login'];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

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
      {showHeader && <Header category={category} onCategoryChange={handleCategoryChange} cartCount={cartCount} />}
      <div className="container">
        <div className="main-layout">
          <aside className="sidebar">
            <div className="sidebar-card">
              <h3>Trier par</h3>
              <OrderBy 
                onOrderChange={handleOrderChange} 
                currentOrder={currentOrder} 
              />
            </div>
            <div className="sidebar-card">
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
      </div>
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage onCategoryChange={handleCategoryChange} />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:categoryId" element={<ShopPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;