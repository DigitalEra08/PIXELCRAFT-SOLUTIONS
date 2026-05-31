import { Link } from 'react-router-dom';
import { MapPin, Phone, User, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">PIXELCRAFT<span className="accent">SOLUTIONS</span></h3>
          <p className="footer-desc">
            Your premium destination for high-quality LEDs and professional Sound Solutions. 
            Crafting light and sound for your perfect space.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Business Info</h4>
          <ul className="contact-info">
            
            <li>
              <MapPin size={18} className="icon" />
              <span>Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar</span>
            </li>
            <li>
              <Phone size={18} className="icon" />
              <span>03013765608</span>
            </li>
            <li>
              <Mail size={18} className="icon" />
              <span>info@pixelcraft.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PIXELCRAFT SOLUTIONS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
