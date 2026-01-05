import "./About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-inner">

        {/* ARCH IMAGE */}
        <div className="about-image-wrapper">
          <div className="arch-glow"></div>

          <svg
            viewBox="0 0 400 520"
            className="arch-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="trueArch">
                {/* TRUE ARCH SHAPE */}
                <path
                  d="
                    M 40 180
                    A 160 160 0 0 1 360 180
                    L 360 500
                    L 40 500
                    Z
                  "
                />
              </clipPath>
            </defs>

            <image
              href="./images/About.jpg"
              width="400"
              height="520"
              clipPath="url(#trueArch)"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* GOLD BORDER */}
            <path
              d="
                M 40 180
                A 160 160 0 0 1 360 180
                L 360 500
                L 40 500
                Z
              "
              fill="none"
              stroke="url(#gold)"
              strokeWidth="4"
            />

            <defs>
              <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c9a44b" />
                <stop offset="100%" stopColor="#f5d98b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        
        <div className="about-card">
          <h2>About Us</h2>

          <p className="about-subtitle">
            Designed spaces. Meaningful living.
          </p>

          <p>
            We are a modern real estate platform focused on refined living
            experiences. Our approach blends architectural beauty, curated
            properties, and intuitive digital tools.
          </p>

          <p>
            From elegant interiors to inspiring homes, we help you discover
            spaces that reflect your lifestyle, aspirations, and future.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;

