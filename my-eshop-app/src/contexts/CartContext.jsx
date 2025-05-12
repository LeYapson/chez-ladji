import { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [cartTotal, setCartTotal] = useState(0);

  // Calculer le total du panier à chaque changement des items
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const discountedPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);
      return sum + (parseFloat(discountedPrice) * item.quantity);
    }, 0);
    setCartTotal(parseFloat(total.toFixed(2)));
  }, [cartItems]);

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Vérifier si le produit est déjà dans le panier
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si oui, augmenter la quantité
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Sinon, ajouter le produit avec quantité = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Mettre à jour la quantité d'un produit
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Nombre total d'articles dans le panier
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      cartTotal, 
      cartCount, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};