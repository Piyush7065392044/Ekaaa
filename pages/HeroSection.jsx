import React from "react";

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          .hero {
            height: 100vh;
            width: 100%;
            background: linear-gradient(rgba(15,15,15,0.55), rgba(15,15,15,0.55)),
            url("https://media.istockphoto.com/id/1460765189/photo/top-view-of-female-designer-creating-hand-made-shoes-drawing-on-them-at-home-woman-working-in.jpg?s=612x612&w=0&k=20&c=p4vTktSFAERYlUq2VxB0XSZZl1r8_trBPXculU8hZNE=")
            center/cover no-repeat;
            display: flex;
            align-items: center;
            padding: 0 8%;
          }

          .hero-content {
            max-width: 700px;
            color: #F5F2EA;
            animation: fadeUp 1s ease forwards;
          }

          .brand-logo {
            width: 90px;
            margin-bottom: 20px;
            filter: brightness(1.1);
          }

          .brand-top {
            font-size: 13px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #C7A86D;
            margin-bottom: 6px;
          }

          .brand-main {
            font-size: 70px;
            font-weight: 700;
            letter-spacing: 7px;
            font-family: 'Cinzel', serif;
            margin-bottom: 6px;
          }

          .brand-owner {
            font-size: 15px;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 20px;
            color: #ddd;
          }

          .hero-text {
            font-size: 17px;
            line-height: 1.9;
            color: #eaeaea;
            margin-bottom: 35px;
          }

          .hero-stats {
            display: flex;
            gap: 45px;
            margin-bottom: 45px;
          }

          .stat-box h2 {
            font-size: 36px;
            color: #C7A86D;
            font-weight: 600;
          }

          .stat-box p {
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ccc;
          }

          .hero-btns {
            display: flex;
            gap: 18px;
          }

          .hero-btn {
            padding: 14px 36px;
            border-radius: 50px;
            font-size: 13px;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;
            transition: 0.3s ease;
            text-transform: uppercase;
          }

          .btn-gold {
            background: #C7A86D;
            color: #0F0F0F;
          }

          .btn-gold:hover {
            background: #b9985c;
          }

          .btn-outline {
            background: transparent;
            border: 1px solid #C7A86D;
            color: #C7A86D;
          }

          .btn-outline:hover {
            background: #C7A86D;
            color: #0F0F0F;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 900px) {
            .hero {
              padding: 0 6%;
            }

            .brand-main {
              font-size: 48px;
            }

            .hero-stats {
              gap: 25px;
            }
          }

          @media (max-width: 600px) {
            .brand-main {
              font-size: 38px;
            }

            .hero-text {
              font-size: 15px;
            }

            .hero-stats {
              flex-direction: column;
              gap: 18px;
            }
          }
        `}
      </style>

      <div className="hero">
        <div className="hero-content">

 
         

          <div className="brand-top">Five Heart's</div>
          <div className="brand-main">EKAA</div>
          <div className="brand-owner">Handcrafted By Rashika</div>

          <p className="hero-text">
            EKAA is a luxury custom footwear brand specializing in hand-painted,
            color-crafted, and uniquely designed shoes. Every pair is created
            with artistic precision, premium colors, and passionate craftsmanship
            to deliver unmatched elegance and exclusivity.
          </p>

          <div className="hero-stats">
            <div className="stat-box">
              <h2>700+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h2>1500+</h2>
              <p>Custom Designs</p>
            </div>
            <div className="stat-box">
              <h2>100%</h2>
              <p>Hand Painted</p>
            </div>
          </div>
{/* 
          <div className="hero-btns">
            <button className="hero-btn btn-gold">Explore Collection</button>
            <button className="hero-btn btn-outline">Order Custom</button>
          </div> */}

        </div>
      </div>
    </>
  );
};

export default HeroSection;
