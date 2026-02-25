import Navbar from "./Navbar";

import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img18 from "../assets/18.png"
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'

const Collection = () => {

  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20
  ];

  return (
    <>
      <Navbar />

      <style>
        {`
        .collection-section {
          padding: 110px 8%;
          background: #ffffff;
          min-height: 100vh;
        }

        .collection-title {
          text-align: center;
          margin-bottom: 60px;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
        }

        .collection-title h1 {
          font-size: 42px;
          letter-spacing: 4px;
          font-family: 'Cinzel', serif;
          color: #0f0f0f;
        }

        .collection-title p {
          font-size: 14px;
          letter-spacing: 3px;
          color: #C7A86D;
          text-transform: uppercase;
          margin-top: 10px;
        }

        .collection-desc {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          margin-top: 18px;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .collection-img-box {
          background: #fafafa;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(199,168,109,0.25);
          transition: 0.4s ease;
          cursor: pointer;
        }

        .collection-img-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 55px rgba(0,0,0,0.12);
        }

        .collection-img-box img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          transition: 0.5s ease;
        }

        .collection-img-box:hover img {
          transform: scale(1.06);
        }

        @media (max-width: 1100px) {
          .collection-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 750px) {
          .collection-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 450px) {
          .collection-grid {
            grid-template-columns: 1fr;
          }

          .collection-title h1 {
            font-size: 32px;
          }
        }
        `}
      </style>

      <section className="collection-section">

        <div className="collection-title">
          <h1>Our Handcrafted Collection</h1>
          <p>Luxury • Handmade • Premium</p>

          <div className="collection-desc">
            We create exclusive <b>handmade shoes</b> and <b>designer clothing</b> using premium fabrics and colors.  
            Every design is <b>100% handcrafted</b> with precision, passion, and perfection by <b>Rashika</b>.  
            Each piece reflects <b>luxury, uniqueness, and artistic craftsmanship</b>.
          </div>
        </div>

        <div className="collection-grid">
          {images.map((img, index) => (
            <div className="collection-img-box" key={index}>
              <img src={img} alt={`collection-${index + 1}`} />
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Collection;
