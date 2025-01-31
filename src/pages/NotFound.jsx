import { Link } from "react-router-dom";
export default function NotFound() {
  const custome404Style = {
    width: "100%",
    minWidth: "80%",
    minHeight: "100vh",
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    fontSize: "2rem",
  };

  const customH1Style = {
    fontSize: "5rem",
    color: "var(--secondary-text-color)",
  };

  const customLinkStye = {
    color: "var(--primary-text-color)",
  };

  return (
    <main style={custome404Style}>
      <h1 style={customH1Style}>404! Nothing Here</h1>
      <Link to="/" style={customLinkStye}>
        Return Home
      </Link>
    </main>
  );
}
