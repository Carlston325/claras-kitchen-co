import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";

export default function Home(props) {
  // console.log(`Viewport Width: ${window.innerWidth}`);
  // console.log(`Viewport Height: ${window.innerHeight}`);

  let [currentIndex, setCurrentIndex] = useState(0);
  const menuData = props.menu;
  const menu = menuData.map((item) => {
    const ingredients = item.ingredients.join(", ");

    return {
      ...item,
      contains() {
        return `This dish contain: ${ingredients}`;
      },
    };
  });

  let [firstImage, setFirstImage] = useState({
    name: menu[0].name,
    src: menu[0].image,
    descrip: menu[0].descrip,
    variations: menu[0].variations,
    ingredients: menu[0].contains(),
  });
  let [secondImage, setSecondImage] = useState({
    name: menu[1].name,
    src: menu[1].image,
    descrip: menu[1].descrip,
    variations: menu[1].variations,
    ingredients: menu[1].contains(),
  });
  let [thirdImage, setThirdImage] = useState({
    name: menu[2].name,
    src: menu[2].image,
    descrip: menu[2].descrip,
    variations: menu[2].variations,
    ingredients: menu[2].contains(),
  });
  let [fourthImage, setFourthImage] = useState({
    name: menu[3].name,
    src: menu[3].image,
    descrip: menu[3].descrip,
    variations: menu[3].variations,
    ingredients: menu[3].contains(),
  });
  let [fifthImage, setFifthImage] = useState({
    name: menu[4].name,
    src: menu[4].image,
    descrip: menu[4].descrip,
    variations: menu[4].variations,
    ingredients: menu[4].contains(),
  });

  //Rotate Carousel Images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((preValue) => {
        const newIndex = (preValue + 1) % menu.length;

        setFirstImage({
          name: menu[newIndex].name,
          src: menu[newIndex].image,
          descrip: menu[newIndex].descrip,
          variations: menu[newIndex].variations,
          ingredients: menu[newIndex].contains(),
        });
        setSecondImage({
          name: menu[(newIndex + 1) % menu.length].name,
          src: menu[(newIndex + 1) % menu.length].image,
          descrip: menu[(newIndex + 1) % menu.length].descrip,
          variations: menu[(newIndex + 1) % menu.length].variations,
          ingredients: menu[(newIndex + 1) % menu.length].contains(),
        });
        setThirdImage({
          name: menu[(newIndex + 2) % menu.length].name,
          src: menu[(newIndex + 2) % menu.length].image,
          descrip: menu[(newIndex + 2) % menu.length].descrip,
          variations: menu[(newIndex + 2) % menu.length].variations,
          ingredients: menu[(newIndex + 2) % menu.length].contains(),
        });
        setFourthImage({
          name: menu[(newIndex + 3) % menu.length].name,
          src: menu[(newIndex + 3) % menu.length].image,
          descrip: menu[(newIndex + 3) % menu.length].descrip,
          variations: menu[(newIndex + 3) % menu.length].variations,
          ingredients: menu[(newIndex + 3) % menu.length].contains(),
        });
        setFifthImage({
          name: menu[(newIndex + 4) % menu.length].name,
          src: menu[(newIndex + 4) % menu.length].image,
          descrip: menu[(newIndex + 4) % menu.length].descrip,
          variations: menu[(newIndex + 4) % menu.length].variations,
          ingredients: menu[(newIndex + 4) % menu.length].contains(),
        });

        return newIndex;
      });
    }, 8000);
    return () => clearInterval(intervalId);
  }, [menu, currentIndex]);
  let [toggle, setToggle] = useState(false);
  return (
    <main className="main-body">
      <div className="page-hero">
        <img
          className="hero-image"
          src={menu[2].image}
          alt={`The dish is called ${menu[2].name}`}
        />
        <h1 className="page-title">Claras' Kitchen & Co.</h1>
        <div className="hero-item-box">
          <h2 className="item-title">{menu[2].name}</h2>
          <p className="item-descrip">{menu[2].descrip}</p>
          <p>Variations :</p>
          <ul>
            {menu[2].variations.map((each) => {
              return <li className="item-variation">{each}</li>;
            })}
          </ul>
          <button
            className="item-check-ingrediant-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Collapse ingredients" : "Check ingredients"}
          </button>
          {toggle && (
            <p className="item-ingrediant">{firstImage.ingredients}</p>
          )}
        </div>
      </div>
      <div className="page-carousel">
        <CarouselItem content={secondImage} />
        <CarouselItem content={thirdImage} />
        <CarouselItem content={fourthImage} />
        <CarouselItem content={fifthImage} />
      </div>
      <div className="page-contact">
        <h2 className="contact-title">Any Questions? | Want to Order!</h2>
        <p className="about-us">
          - At Claras' Kitchen & Co, we bring the heart and soul of home-cooked
          meals right to your table. Explore our delicious menu filled with
          flavorful dishes, each crafted with love and authentic ingredients.
          Whether you’re craving a hearty biryani, a comforting stew, or a sweet
          dessert like wheat halwa, we’ve got something to delight every palate.{" "}
          <br /> - To place an <em>order</em> or ask about our menu, feel free
          to call us or send an email. Our dishes come with flexible variations
          like chicken, mutton, or vegetarian options, so you can enjoy your
          meal just the way you like it.
          <br /> - We’re here to answer your questions, help you choose the
          perfect dish, or assist with special requests. Let’s make your next
          meal unforgettable—reach out to us today!
        </p>
        <div className="contact-call-box">
          <h3 id="callNumber">CALL US</h3>
          <a href="tel:07383 286586">(+44) 07383 286586</a>
        </div>
        <div className="contact-email-box">
          <h3>EMAIL US</h3>
          <a href="mailto:claramarcelo31@yahoo.co.uk">
            claramarcelo31@yahoo.co.uk
          </a>
        </div>
      </div>
    </main>
  );
}
