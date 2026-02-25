import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <style>
        {`
        .about-section {
          padding: 110px 8%;
          background: #ffffff;
          min-height: 100vh;
        }

        .about-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .about-header h1 {
          font-size: 44px;
          letter-spacing: 4px;
          font-family: 'Cinzel', serif;
          color: #0f0f0f;
        }

        .about-header p {
          font-size: 14px;
          letter-spacing: 3px;
          color: #C7A86D;
          text-transform: uppercase;
          margin-top: 10px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
          align-items: center;
        }

        .about-text {
          font-size: 15px;
          line-height: 1.9;
          color: #444;
        }

        .about-text h2 {
          font-size: 22px;
          margin-bottom: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0f0f0f;
        }

        .about-text p {
          margin-bottom: 20px;
        }

        .about-card {
          background: #fafafa;
          border-radius: 16px;
          padding: 35px;
          border: 1px solid rgba(199,168,109,0.25);
          transition: 0.4s ease;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        .about-card h3 {
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .about-card p {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
        }

        .about-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 80px;
        }

        @media(max-width: 900px){
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-values {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 550px){
          .about-values {
            grid-template-columns: 1fr;
          }

          .about-header h1 {
            font-size: 32px;
          }
        }
        `}
      </style>

      <section className="about-section">
        <div className="about-header">
          <h1>About EKAA</h1>
          <p>Luxury Footwear Brand</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              EKAA is a premium footwear brand built on passion, creativity, and
              craftsmanship. We believe shoes are more than just fashion — they
              are an identity, a statement, and a lifestyle. Every design at
              EKAA blends luxury aesthetics with unmatched comfort.
            </p>

            <p>
              Our journey began with a simple vision — to create high-end
              footwear that combines modern style, premium quality, and
              affordability. Today, EKAA stands as a symbol of confidence,
              luxury, and originality.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To redefine footwear fashion by delivering premium-quality,
              innovative designs that empower individuals and elevate everyday
              style.
            </p>

            <h3 style={{ marginTop: "25px" }}>Our Vision</h3>
            <p>
              To become a globally recognized luxury footwear brand known for
              craftsmanship, creativity, and customer trust.
            </p>
          </div>
        </div>

        <div className="about-values">
          <div className="about-card">
            <h3>Premium Quality</h3>
            <p>
              We use top-grade materials and advanced production techniques to
              ensure durability and comfort.
            </p>
          </div>

          <div className="about-card">
            <h3>Design Excellence</h3>
            <p>
              Our designs reflect elegance, innovation, and modern trends,
              delivering a premium luxury feel.
            </p>
          </div>

          <div className="about-card">
            <h3>Customer First</h3>
            <p>
              Customer satisfaction is at the heart of everything we do — from
              design to delivery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
