import { useRef } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const trackRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  // 🔑 Touch start
  const onTouchStart = (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = trackRef.current.scrollLeft;
  };

  // 🔑 Touch move
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = startX - x;
    trackRef.current.scrollLeft = scrollLeft + walk;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-label">Our Clients</span>
          <h2>What are our clients saying about us</h2>
        </div>

        {/* Marquee */}
        <div
          className="testimonials-track"
          ref={trackRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <div className="testimonials-marquee">

            {/* ===== ORIGINAL SET ===== */}
            <div className="testimonial-card">
              <img src="./images/client1.jpg" alt="Client" />
              <h4>Dana Gilmore</h4>
              <span>Excellent team!</span>
              <p>
                The real estate team did an outstanding job helping me
                buy my first home.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client2.jpg" alt="Client" />
              <h4>Ana Anderson</h4>
              <span>Very good work</span>
              <p>
                High level of service and dedication. Smooth experience.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client3.jpg" alt="Client" />
              <h4>Albert Adame</h4>
              <span>Very well</span>
              <p>
                Excellent experience from start to finish.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client4.jpg" alt="Client" />
              <h4>George Lopez</h4>
              <span>Amazing service</span>
              <p>
                Friendly staff and professional support.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            {/* ===== DUPLICATE SET (REQUIRED FOR SMOOTH LOOP) ===== */}
            <div className="testimonial-card">
              <img src="./images/client1.jpg" alt="Client" />
              <h4>Dana Gilmore</h4>
              <span>Excellent team!</span>
              <p>
                The real estate team did an outstanding job helping me
                buy my first home.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client2.jpg" alt="Client" />
              <h4>Ana Anderson</h4>
              <span>Very good work</span>
              <p>
                High level of service and dedication. Smooth experience.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client3.jpg" alt="Client" />
              <h4>Albert Adame</h4>
              <span>Very well</span>
              <p>
                Excellent experience from start to finish.
              </p>
              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <img src="./images/client4.jpg" alt="Client" />
              <h4>George Lopez</h4>
              <span>Amazing service</span>
              <p>
                Friendly staff and professional support.
              </p>
              <div className="stars">★★★★★</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


