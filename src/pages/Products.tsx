import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [filter, setFilter] = useState<'All' | 'LED' | 'Speakers'>('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="products-page section-padding">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Our <span className="neon-text">Collection</span></h1>
          <div className="title-underline"></div>
        </div>

        <div className="filter-container">
          <button 
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${filter === 'LED' ? 'active' : ''}`}
            onClick={() => setFilter('LED')}
          >
            LEDs
          </button>
          <button 
            className={`filter-btn ${filter === 'Speakers' ? 'active' : ''}`}
            onClick={() => setFilter('Speakers')}
          >
            Speakers
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
