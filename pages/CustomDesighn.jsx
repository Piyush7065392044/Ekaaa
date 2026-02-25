import React from "react";

const CustomProcess = () => {
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
          <p>How We Create</p>
          <h2>Custom Design Process</h2>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <div className="step-num">01</div>
            <h3>Choose Design</h3>
            <p>
              Select your preferred style, theme and design inspiration to
              create your perfect pair of custom shoes.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">02</div>
            <h3>Hand Painting</h3>
            <p>
              Our skilled artists carefully hand paint each pair using premium
              colors with artistic perfection.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">03</div>
            <h3>Color Crafting</h3>
            <p>
              Precise color blending and detailing bring your design to life
              with luxury finish and durability.
            </p>
          </div>

          <div className="process-card">
            <div className="step-num">04</div>
            <h3>Final Delivery</h3>
            <p>
              After quality checks, your handcrafted luxury shoes are safely
              packed and delivered to your doorstep.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default CustomProcess;
