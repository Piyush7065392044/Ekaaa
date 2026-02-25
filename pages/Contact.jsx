import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <style>
        {`
        .contact-section {
          padding: 110px 8%;
          background: #ffffff;
          min-height: 100vh;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .contact-header h1 {
          font-size: 44px;
          letter-spacing: 4px;
          font-family: 'Cinzel', serif;
          color: #0f0f0f;
        }

        .contact-header p {
          font-size: 14px;
          letter-spacing: 3px;
          color: #C7A86D;
          text-transform: uppercase;
          margin-top: 10px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .contact-info {
          font-size: 15px;
          line-height: 1.9;
          color: #444;
        }

        .contact-info h3 {
          font-size: 22px;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .contact-box {
          background: #fafafa;
          padding: 35px;
          border-radius: 16px;
          border: 1px solid rgba(199,168,109,0.25);
          transition: 0.4s ease;
        }

        .contact-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        .contact-box h3 {
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .contact-item {
          margin-bottom: 15px;
          font-size: 14px;
        }

        .contact-item span {
          color: #C7A86D;
          letter-spacing: 1px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 15px;
          margin-bottom: 15px;
          border-radius: 10px;
          border: 1px solid rgba(199,168,109,0.4);
          outline: none;
          font-size: 14px;
          font-family: inherit;
        }

        .contact-form textarea {
          height: 130px;
          resize: none;
        }

        .contact-form button {
          padding: 12px 30px;
          border-radius: 30px;
          background: #C7A86D;
          border: none;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.4s ease;
        }

        .contact-form button:hover {
          background: #0f0f0f;
          color: white;
        }

        @media(max-width: 900px){
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 550px){
          .contact-header h1 {
            font-size: 32px;
          }
        }
        `}
      </style>

      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact EKAA</h1>
          <p>Let’s Connect</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              For custom sneaker orders, collaborations, wholesale queries, or
              support — reach out to us anytime. Our team will respond quickly.
            </p>
          </div>

          <div className="contact-box">
            <h3>Contact Details</h3>

            <div className="contact-item">
              <span>Email:</span> ekaa300415@gmail.com
            </div>

            <div className="contact-item">
              <span>Phone:</span> +91 93548 16288
            </div>

            <div className="contact-item">
              <span>Instagram:</span> @ekaa_official_05
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
