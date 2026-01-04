import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-inner">

        {/* LEFT — Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input type="tel" placeholder="Phone number" />
            <textarea
              rows="5"
              placeholder="Tell us about your needs"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT — Content */}
        <div className="contact-content">
          <span className="contact-label">Reach us</span>

          <h2>
            Get in touch with us today and our team will assist you
          </h2>

          <p>
            Our experts and developers would love to contribute their
            expertise and insights and help you today. Contact us to help
            you plan your next transaction, either buying or selling a home.
          </p>
        </div>

      </div>
    </section>
  );
}
