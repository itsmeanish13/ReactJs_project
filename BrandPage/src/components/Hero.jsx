const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your Feet Deserves the Best</h1>
        <p>
          Discover the best products and services tailored just for you.This is
          your chance to shine
        </p>
        <div className="hero-btn">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="shopping">
          <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/flipkart.png" alt="Flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
