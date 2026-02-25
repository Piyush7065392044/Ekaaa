import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500&display=swap');

          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 22px 80px;
            background: #F5F2EA;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            position: sticky;
            top: 0;
            z-index: 999;
          }

          .brand-box {
            display: flex;
            flex-direction: column;
            line-height: 1;
          }

          .brand-top {
            font-size: 12px;
            letter-spacing: 4px;
            font-family: 'Poppins', sans-serif;
            color: #6b6b6b;
            text-transform: uppercase;
            margin-bottom: 6px;
          }

          .brand {
            font-size: 42px;
            font-weight: 600;
            letter-spacing: 6px;
            font-family: 'Cinzel', serif;
            color: #0F0F0F;
          }

          .nav-links {
            display: flex;
            gap: 45px;
          }

          .nav-link {
            color: #0F0F0F;
            text-decoration: none;
            font-size: 14px;
            letter-spacing: 2px;
            font-weight: 500;
            text-transform: uppercase;
            position: relative;
            transition: 0.3s ease;
            font-family: 'Poppins', sans-serif;
          }

          .nav-link:hover {
            color: #C7A86D;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -6px;
            width: 0%;
            height: 1px;
            background: #C7A86D;
            transition: 0.3s ease;
            transform: translateX(-50%);
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .menu-btn {
            display: none;
            font-size: 30px;
            cursor: pointer;
          }

          @media (max-width: 900px) {
            .navbar {
              padding: 18px 25px;
            }

            .nav-links {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: #F5F2EA;
              flex-direction: column;
              align-items: center;
              gap: 25px;
              padding: 25px 0;
              display: none;
            }

            .nav-links.active {
              display: flex;
            }

            .menu-btn {
              display: block;
            }
          }
        `}
      </style>

      <div className="navbar">
        <div className="brand-box">
          {/* <span className="brand-top">Five Heart's</span> */}
          <span className="brand">EKAA</span>
        </div>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link onClick={() => setOpen(false)} className="nav-link" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="nav-link" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="nav-link" to="/service">Collection</Link>
          <Link onClick={() => setOpen(false)} className="nav-link" to="/contact">Contact</Link>
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>
      </div>
    </>
  );
};

export default Navbar;
