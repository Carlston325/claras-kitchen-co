// import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const customHeroStyle = {
    padding: "var(--page-padding)",
  };

  return (
    <main className="main-body" style={{ minHeight: "100vh" }}>
      <div className="page-hero" style={customHeroStyle}>
        <h1 className="page-title">Contact</h1>
      </div>
      <div className="page-contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Call us to place an order OR if you have any queires</p>
          <div>
            <PhoneIcon />
            <h3>Phone Number</h3>
            <a href="tel:07383 286586">(+44) 07383 286586</a>
          </div>
          <div>
            <EmailIcon />
            <h3>Email</h3>
            <a href="mailto:claramarcelo31@yahoo.co.uk">
              claramarcelo31@yahoo.co.uk
            </a>
          </div>
        </div>
        {/* <div className="contact-form">
          <h2>Message Us</h2>
          <div className="contact-form-container">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="msg">Message</label>
              <input type="text" name="msg" id="msg" />
            </div>
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </div> */}
      </div>
    </main>
  );
}
