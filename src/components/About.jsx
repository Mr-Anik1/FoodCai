const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p className="about-text">
            <span className="app-name">Food Cai</span> is a leading online food
            buying platform that connects you with local farmers and producers.
            We offer a wide variety of fresh, high-quality food products
            delivered straight to your door.
          </p>
          <p className="about-text">
            Our mission is to make it easier than ever to access healthy,
            sustainable food options. We believe in supporting local agriculture
            and providing customers with the freshest, most delicious food
            possible.
          </p>
        </div>
        <div className="about-values">
          <h3>Our Values</h3>
          <ul>
            <li>
              Freshness: We prioritize sourcing the freshest produce directly
              from local farms.
            </li>
            <li>
              Quality: We only offer high-quality products that meet our strict
              standards.
            </li>
            <li>
              Sustainability: We are committed to sustainable practices and
              supporting local agriculture.
            </li>
            <li>
              Convenience: We make it easy to order your groceries online and
              have them delivered straight to your door.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
