import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Chez Ladji</h4>
            <p>Revendeur officiel de sapes certifiées "RDC Quality" depuis 1954</p>
          </div>
          
          <div className="footer-section">
            <h4>Liens Utiles</h4>
            <ul className="footer-links">
              <li><a href="#">À propos</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <div className="newsletter">
              <input type="email" placeholder="Votre email" />
              <button>S'abonner</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Chez Ladji. Tous droits réservés.
          </div>
          
          <div className="social-links">
            <a href="#"><svg viewBox="0 0 24 24"><path d="M18.2 0H5.8C2.6 0 0 2.6 0 5.8v12.4C0 21.4 2.6 24 5.8 24h12.4c3.2 0 5.8-2.6 5.8-5.8V5.8C24 2.6 21.4 0 18.2 0zm-9 17.8H6.2v-9.6h3v9.6zm-1.5-10.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm12 10.8h-3v-4.8c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v4.9h-3v-9.6h2.8v1.3h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5z"></path></svg></a>
            <a href="#"><svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href="#"><svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;