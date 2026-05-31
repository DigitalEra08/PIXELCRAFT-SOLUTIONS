import '../styles/Terms.css';

const Terms = () => {
  return (
    <div className="terms-page section-padding">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Terms & <span className="neon-text">Conditions</span></h1>
          <div className="title-underline"></div>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Business Information</h2>
            <p>Welcome to PIXELCRAFT SOLUTIONS. These terms and conditions outline the rules and regulations for the use of our website and the purchase of our products.</p>
            <div className="business-card">
              <p><strong>Business Name:</strong> PIXELCRAFT SOLUTIONS</p>
              <p><strong>Address:</strong> Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar</p>
              <p><strong>Contact:</strong> 03013765608</p>
            </div>
          </section>

          <section className="terms-section">
            <h2>2. Product Information</h2>
            <p>We specialize in selling electronics, specifically LEDs and Speakers. We strive to provide accurate descriptions and images of our products. However, we do not warrant that the descriptions or other content are error-free.</p>
          </section>

          <section className="terms-section">
            <h2>3. Purchases & Payments</h2>
            <p>By placing an order, you agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. We reserve the right to refuse any order you place with us.</p>
          </section>

          <section className="terms-section">
            <h2>4. Shipping & Delivery</h2>
            <p>Delivery times may vary based on your location. PIXELCRAFT SOLUTIONS is not responsible for delays caused by the courier service. Any delivery dates provided are estimates.</p>
          </section>

          <section className="terms-section">
            <h2>5. Returns & Refunds</h2>
            <p>Our return policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
          </section>

          <section className="terms-section">
            <h2>6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
