import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          PIXELCRAFT<span className="accent">SOLUTIONS</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link to="/terms" onClick={() => setIsMenuOpen(false)}>Terms</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cart-btn">
            <ShoppingCart size={24} />
            <span className="cart-count">0</span>
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
