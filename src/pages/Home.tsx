import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Volume2, ShieldCheck } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Illuminate Your Space, <br />
            <span className="neon-text">Amplify Your Life.</span>
          </h1>
          <p className="hero-subtitle">
            Premium LED lighting and professional audio solutions from PIXELCRAFT SOLUTIONS.
            Discover the future of home electronics today.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/products" className="btn btn-outline">View Categories</Link>
          </div>
        </div>
        <div className="hero-visual">
          {/* Stylized visual elements would go here */}
          <div className="glow-orb primary-glow"></div>
          <div className="glow-orb secondary-glow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why PIXELCRAFT?</h2>
            <div className="title-underline"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Lightbulb className="feature-icon" size={40} />
              <h3>Premium LEDs</h3>
              <p>Energy-efficient, vibrant, and long-lasting lighting solutions for every corner.</p>
            </div>
            <div className="feature-card">
              <Volume2 className="feature-icon" size={40} />
              <h3>Crisp Audio</h3>
              <p>Experience studio-quality sound with our range of high-performance speakers.</p>
            </div>
            <div className="feature-card">
              <ShieldCheck className="feature-icon" size={40} />
              <h3>Guaranteed Quality</h3>
              <p>Every product is tested to ensure it meets our high standards of excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="categories-preview section-padding">
        <div className="container">
          <div className="categories-grid">
            <div className="category-box led-box">
              <div className="category-overlay">
                <h2>LED Collection</h2>
                <Link to="/products" className="category-link">
                  Explore <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="category-box speaker-box">
              <div className="category-overlay">
                <h2>Sound Systems</h2>
                <Link to="/products" className="category-link">
                  Explore <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
