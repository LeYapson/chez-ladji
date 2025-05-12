import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Logo from '../assets/chez_ladji.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { setUserAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }
    
    try {
      setStatus('loading');
      
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Identifiants incorrects');
      }
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      setUserAuthenticated(data);
      setStatus('success');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Erreur de connexion');
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-sidebar">
        <div className="login-sidebar-content">
          <h2>Bienvenue chez Ladji</h2>
          <p>Connectez-vous pour accéder à votre espace personnel et profiter de nos offres exclusives.</p>
          
          <div className="testimonial">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="testimonial-avatar" />
            <div className="testimonial-content">
              <p>"Chez Ladji propose les meilleures sapes certifiées RDC Quality que j'ai pu trouver."</p>
              <span className="testimonial-author">Jean Dupont, client fidèle</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-header">
            <img src={Logo} alt="Chez Ladji" />
            <h2>Connexion</h2>
            <p>Accédez à votre compte Chez Ladji</p>
          </div>
          
          {status === 'error' && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
          
          {status === 'success' && (
            <div className="success-message">
              Connexion réussie. Redirection...
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={status === 'loading'}
                placeholder="Entrez votre nom d'utilisateur"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={status === 'loading'}
                placeholder="Entrez votre mot de passe"
              />
            </div>
            
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="keep-signed" />
                <label htmlFor="keep-signed">Rester connecté</label>
              </div>
              <a href="#" className="forgot-password">Mot de passe oublié?</a>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="login-button"
            >
              {status === 'loading' ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>
          
          <div className="login-divider">
            <span>OU</span>
          </div>
          
          <div className="demo-account">
            <h3>Compte de démonstration</h3>
            <div className="credential">
              <span className="label">Utilisateur:</span>
              <code>kminchelle</code>
            </div>
            <div className="credential">
              <span className="label">Mot de passe:</span>
              <code>0lelplR</code>
            </div>
          </div>
          
          <div className="signup-prompt">
            Pas encore membre? <Link to="/register" className="signup-link">Créer un compte</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;