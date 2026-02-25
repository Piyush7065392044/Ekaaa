import React from "react";

const WhyChooseEKAA = () => {
  return (
    <>
      <style>
        {`
          .process-section {
            padding: 110px 8%;
            background: #ffffff;
          }

          .process-title {
            text-align: center;
            margin-bottom: 70px;
          }

          .process-title h2 {
            font-size: 44px;
            letter-spacing: 3px;
            font-family: 'Cinzel', serif;
            color: #0f0f0f;
            margin-bottom: 10px;
          }

          .process-title p {
            font-size: 14px;
            letter-spacing: 3px;
            color: #C7A86D;
            text-transform: uppercase;
          }

          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 35px;
          }

          .process-card {
            background: #fafafa;
            padding: 45px 25px;
            text-align: center;
            border-radius: 16px;
            transition: 0.4s ease;
            border: 1px solid rgba(199,168,109,0.25);
            position: relative;
            overflow: hidden;
          }

          .process-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, transparent, rgba(199,168,109,0.15), transparent);
            opacity: 0;
            transition: 0.4s;
          }

          .process-card:hover::before {
            opacity: 1;
          }

          .process-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 55px rgba(0,0,0,0.12);
          }

          .step-num {
            font-size: 60px;
            font-weight: 700;
            color: rgba(199,168,109,0.25);
            margin-bottom: 20px;
          }

          .process-card h3 {
            font-size: 18px;
            letter-spacing: 2px;
            margin-bottom: 12px;
            text-transform: uppercase;
          }

          .process-card p {
            font-size: 14px;
            line-height: 1.7;
            color: #555;
          }

          .brand-story {
            margin-top: 90px;
            background: #fafafa;
            padding: 60px 40px;
            border-radius: 18px;
            border: 1px solid rgba(199,168,109,0.25);
            text-align: center;
          }

          .brand-story h2 {
            font-size: 36px;
            letter-spacing: 3px;
            font-family: 'Cinzel', serif;
            margin-bottom: 18px;
          }

          .brand-story p {
            font-size: 15px;
            line-height: 1.9;
            color: #444;
            max-width: 950px;
            margin: auto;
          }

          @media (max-width: 1000px) {
            .process-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 550px) {
            .process-grid {
              grid-template-columns: 1fr;
            }

            .process-title h2 {
              font-size: 32px;
            }
          }
        `}
      </style>

      <section className="process-section">
        <div className="process-title">
          <h2>Why Choose EKAA</h2>
          <p>Brand Story & Our Promise</p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="step-num">01</div>
            <h3>Premium Quality</h3>
            <p>
              Crafted using top-grade materials and cutting-edge manufacturing
              for durability, comfort, and luxury feel.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">02</div>
            <h3>Modern Design</h3>
            <p>
              Trend-focused yet timeless designs that elevate your style and
              confidence every step you take.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">03</div>
            <h3>All-Day Comfort</h3>
            <p>
              Ergonomic fit, soft cushioning, and breathable materials designed
              for long-lasting comfort.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">04</div>
            <h3>Affordable Luxury</h3>
            <p>
              Premium footwear experience delivered at accessible pricing for
              everyone.
            </p>
          </div>
        </div>

        <div className="brand-story">
          <h2>Our Brand Story</h2>
          <p>
            EKAA was founded with a bold vision to redefine footwear through
            exceptional craftsmanship, premium materials, and modern design.
            Every product is created with passion, precision, and purpose —
            empowering individuals to express confidence, style, and comfort in
            their everyday journey.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyChooseEKAA;
