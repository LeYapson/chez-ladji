import { createContext, useState, useEffect } from 'react';

// Valeur initiale du contexte
const initialContext = {
  userAuthenticated: null,
  setUserAuthenticated: () => {},
  logout: () => {}
};

// Création du contexte
export const AuthContext = createContext(initialContext);

// Création d'un Provider personnalisé pour faciliter l'utilisation du contexte
export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(null);
  
  // Vérification au chargement si un utilisateur est déjà connecté
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (userStr && token) {
      try {
        const userData = JSON.parse(userStr);
        setUserAuthenticated(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);
  
  // Fonction pour gérer la déconnexion
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserAuthenticated(null);
  };
  
  // Fournir les valeurs du contexte
  const contextValue = {
    userAuthenticated,
    setUserAuthenticated,
    logout
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};