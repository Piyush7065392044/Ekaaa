import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background: #ffffff;
            border-top: 1px solid rgba(199,168,109,0.4);
            padding: 18px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Segoe UI', sans-serif;
          }

          .footer-left {
            font-size: 14px;
            letter-spacing: 1px;
            color: #444;
          }

          .footer-left span {
            color: #C7A86D;
            font-weight: 600;
          }

          .footer-center {
            display: flex;
            gap: 18px;
            align-items: center;
          }

          .footer-center a {
            text-decoration: none;
            font-size: 14px;
            color: #444;
            transition: 0.3s ease;
          }

          .footer-center a:hover {
            color: #C7A86D;
          }

          .social-icon {
            font-size: 18px;
            color: #444;
            transition: 0.3s ease;
          }

          .social-icon:hover {
            color: #C7A86D;
            transform: scale(1.15);
          }

          @media (max-width: 768px) {
            .footer {
              flex-direction: column;
              gap: 8px;
              text-align: center;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-left">
          © 2026 <span>EKAA</span>. All Rights Reserved.
        </div>

        <div className="footer-center">
          <a href="mailto:ekaa300415@gmail.com">ekaa300415@gmail.com</a>
          <a href="tel:9354816288">+91 93548 16288</a>
          <a
            href="https://www.instagram.com/ekaa_official_05?igsh=MWFtaDNnZzVmeXF1bQ=="
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
