import { Link } from "react-router-dom";

export default function Contact() {
  const customHeroStyle = {
    padding: "var(--page-padding)",
    height: "100%",
  };

  return (
    <main className="main-body">
      <div className="page-hero" style={customHeroStyle}>
        <h1 className="page-title">Contact</h1>
      </div>
      <div>
        <h2>Nothing Here Yet!</h2>
        <Link to="/">Return Home</Link>
      </div>
      {/* <div className="page-contact">
        <div>
          <h3>Get in Touch</h3>
        </div>
        <div>
          <h3>Message Us</h3>
        </div>
      </div> */}
    </main>
  );
}
