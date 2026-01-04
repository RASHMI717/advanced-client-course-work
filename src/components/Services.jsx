import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      {/* Dark overlay for readability */}
      <div className="services-overlay" />

      <div className="services-inner">
        {/* Header */}
        <div className="services-header">
          <span className="services-label">Our Services</span>
          <h2>Premium real estate solutions</h2>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src="/icon1.svg"
                alt="Sell Property Icon"
              />
            </div>

            <h3>Sell Your Property</h3>
            <p>
              We help you sell your property at the best market value with
              expert strategy and visibility.
            </p>

            <span className="service-link">Read more</span>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src="/icon2.svg"
                alt="Home Loans Icon"
              />
            </div>

            <h3>Home Loans</h3>
            <p>
              Get professional consultation to find loan options that suit
              your financial goals.
            </p>

            <span className="service-link">Read more</span>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src="/icon3.svg"
                alt="Legal Services Icon"
              />
            </div>

            <h3>Legal Services</h3>
            <p>
              Expert legal support for documentation, contracts, and secure
              property transactions.
            </p>

            <span className="service-link">Read more</span>
          </div>
        </div>
      </div>
    </section>
  );
}


