import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
//assets
import logo from "./assets/logo.jpeg";
import sorpotel_image from "./assets/menu_images/sorpotel.jpg";
import stew_image from "./assets/menu_images/stew.jpg";
import biriyani_image from "./assets/menu_images/biriyani_image.jpg";
import fried_rice_image from "./assets/menu_images/fried_rice.jpg";
import xacuti_image from "./assets/menu_images/xacuti.webp";
import mince_chops_image from "./assets/menu_images/mince_chops.jpg";
import veg_kurma_image from "./assets/menu_images/veg_kurma.jpg";
import chole_image from "./assets/menu_images/chole.jpg";
import wheat_halwa_image from "./assets/menu_images/wheat_halwa.jpg";

//Header logo
const setHeaderLogoAlt = "Claras' Kitchen & Co Logo";
//Food Items (Name, Variations, Image, Description, ingredients)
const menu = [
  {
    id: 1,
    name: "Sorpotel",
    image: sorpotel_image,
    descrip: "A traditional Goan pork dish made with spices and vinegar.",
    variations: ["Pork"],
    ingredients: ["Pork", "Vinegar", "Garlic", "Chilies", "Spices"],
  },
  {
    id: 2,
    name: "Stew",
    image: stew_image,
    descrip: "A comforting stew made with vegetables and meat.",
    variations: ["Beef"],
    ingredients: ["Carrots", "Potatoes", "Onions", "Meat", "Spices"],
  },
  {
    id: 3,
    name: "Biriyani",
    image: biriyani_image,
    descrip: "A fragrant and flavorful rice dish with meat or vegetables.",
    variations: ["Mutton", "Lamb", "Chicken"],
    ingredients: ["Basmati Rice", "Meat", "Yogurt", "Spices", "Fried Onions"],
  },
  {
    id: 4,
    name: "Fried Rice",
    image: fried_rice_image,
    descrip: "A quick and easy stir-fried rice dish.",
    variations: ["Vegetable"],
    ingredients: ["Rice", "Vegetables", "Soy Sauce", "Egg", "Meat"],
  },
  {
    id: 5,
    name: "Xacuti",
    image: xacuti_image,
    descrip: "A Goan curry with roasted spices and coconut.",
    variations: ["Chicken", "Mutton"],
    ingredients: ["Meat", "Coconut", "Poppy Seeds", "Spices"],
  },
  {
    id: 6,
    name: "Mince Chops",
    image: mince_chops_image,
    descrip: "Savory minced meat patties, fried to perfection.",
    variations: ["Beef"],
    ingredients: ["Minced Meat", "Breadcrumbs", "Eggs", "Spices"],
  },
  {
    id: 7,
    name: "Veg Kurma",
    image: veg_kurma_image,
    descrip: "A creamy vegetable curry with coconut and spices.",
    variations: ["Mixed Vegetables"],
    ingredients: ["Vegetables", "Coconut Milk", "Cashews", "Spices"],
  },
  {
    id: 8,
    name: "Chole",
    image: chole_image,
    descrip: "A popular North Indian dish made with chickpeas and spices.",
    variations: ["Plain"],
    ingredients: ["Chickpeas", "Tomatoes", "Onions", "Spices"],
  },
  {
    id: 9,
    name: "Wheat Halwa",
    image: wheat_halwa_image,
    descrip: "A sweet dish made with wheat flour, ghee, and sugar.",
    variations: ["Plain", "Nuts"],
    ingredients: ["Wheat Flour", "Ghee", "Sugar", "Cardamom", "Dry Fruits"],
  },
];

export default function App() {
  return (
    <>
      <Header navbarLogo={logo} navbarLogoAlt={setHeaderLogoAlt} />
      <Routes>
        <Route exact path="/" element={<Home menu={menu} />} />
        <Route path="/menu" element={<Menu menu={menu} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
