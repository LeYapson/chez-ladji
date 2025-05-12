import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { userAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    if (!userAuthenticated) {
      navigate('/login');
    }
  }, [userAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!userAuthenticated) {
    return <div className="loading-container">Chargement...</div>;
  }

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Tableau de bord</h1>
          <button className="logout-button" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
        
        <div className="user-info-card">
          <div className="user-avatar">
            <img src={userAuthenticated.image} alt={`${userAuthenticated.firstName} ${userAuthenticated.lastName}`} />
          </div>
          <div className="user-details">
            <h2>{userAuthenticated.firstName} {userAuthenticated.lastName}</h2>
            <p><strong>Email:</strong> {userAuthenticated.email}</p>
            <p><strong>Téléphone:</strong> {userAuthenticated.phone || 'Non renseigné'}</p>
          </div>
        </div>
        
        <div className="dashboard-content">
          <p>Contenu du tableau de bord à venir...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;