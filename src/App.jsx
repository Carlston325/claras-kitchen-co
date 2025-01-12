import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import "./styles/header.css";
import logo from "./assets/logo.jpeg";

//Header logo
const setLogoAlt = "Claras' Kitchen & Co Logo";
//Food Items (Name, Image, Description)
const heroImgDescrip = {
  sorpotal: {
    name: "",
    descrip: "",
  },
  xacuti: {
    name: "",
    descrip: "",
  },
};

export default function App() {
  return (
    <>
      <Header navbarLogo={logo} navbarLogoAlt={setLogoAlt} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home heroImgDescrip={heroImgDescrip} />}
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
