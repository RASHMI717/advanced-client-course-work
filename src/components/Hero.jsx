import "./Hero.css";

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      <div className="hero-overlay">
        <h1>Find Your Next Home</h1>
        <p>Search properties for sale and rent</p>
      </div>
    </div>
  );
}

export default Hero;

