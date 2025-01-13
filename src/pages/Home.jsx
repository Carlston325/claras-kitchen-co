import { useEffect, useState } from "react";

export default function Home(props) {
  let [toggle, setToggle] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(0);

  const menuData = props.menu;
  const menu = menuData.map((item) => {
    return {
      ...item,
      contains() {
        return `This dish contain the following ingrediants: ${this.ingrediants}`;
      },
    };
  });

  let [firstImage, setFirstImage] = useState({
    name: menu[0].name,
    descrip: menu[0].descrip,
    src: menu[0].image,
    alt: `The dish is called ${menu[0].name}`,
    variations: menu[0].variations,
    ingrediants: menu[0].contains(),
  });
  let [secondImage, setSecondImage] = useState({
    name: menu[1].name,
    src: menu[1].image,
    alt: `The dish is called ${menu[1].name}`,
  });
  let [thirdImage, setThirdImage] = useState({
    name: menu[2].name,
    src: menu[2].image,
    alt: `The dish is called ${menu[2].name}`,
  });
  let [fourthImage, setFourthImage] = useState({
    name: menu[3].name,
    src: menu[3].image,
    alt: `The dish is called ${menu[3].name}`,
  });
  let [fifthImage, setFifthImage] = useState({
    name: menu[4].name,
    src: menu[4].image,
    alt: `The dish is called ${menu[4].name}`,
  });

  //Rotate Carousel Images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((preValue) => {
        const newIndex = (preValue + 1) % menu.length;

        setFirstImage({
          name: menu[newIndex].name,
          descrip: menu[newIndex].descrip,
          src: menu[newIndex].image,
          alt: `The dish is called ${menu[newIndex].name}`,
          variations: menu[newIndex].variations,
          ingrediants: menu[newIndex].contains(),
        });
        setSecondImage({
          name: menu[(newIndex + 1) % menu.length].name,
          src: menu[(newIndex + 1) % menu.length].image,
          alt: `The dish is called ${menu[(newIndex + 1) % menu.length].name}`,
        });
        setThirdImage({
          name: menu[(newIndex + 2) % menu.length].name,
          src: menu[(newIndex + 2) % menu.length].image,
          alt: `The dish is called ${menu[(newIndex + 2) % menu.length].name}`,
        });
        setFourthImage({
          name: menu[(newIndex + 3) % menu.length].name,
          src: menu[(newIndex + 3) % menu.length].image,
          alt: `The dish is called ${menu[(newIndex + 3) % menu.length].name}`,
        });
        setFifthImage({
          name: menu[(newIndex + 4) % menu.length].name,
          src: menu[(newIndex + 4) % menu.length].image,
          alt: `The dish is called ${menu[(newIndex + 4) % menu.length].name}`,
        });

        return newIndex;
      });
    }, 8000);
    return () => clearInterval(intervalId);
  }, [menu, currentIndex]);

  return (
    <main className="main-body">
      <div className="page-hero">
        <img className="hero-image" src={firstImage.src} alt={firstImage.alt} />
        <h1 className="page-title">Claras' Kitchen & Co.</h1>
        <div className="hero-item-info">
          <h2 className="item-title">{firstImage.name}</h2>
          <p className="item-descrip">{firstImage.descrip}</p>
          <ul>
            {firstImage.variations.map((each) => {
              return <li className="item-info">{each}</li>;
            })}
          </ul>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Collapse Ingrediants" : "Check Ingrediants"}
          </button>
          {toggle && <p className="ingrediants">{firstImage.ingrediants}</p>}
        </div>
      </div>
      <div className="page-carousel">
        <div className="carousel-item">
          <img src={secondImage.src} alt={secondImage.alt} />
        </div>
        <div className="carousel-item">
          <img src={thirdImage.src} alt={thirdImage.alt} />
        </div>
        <div className="carousel-item">
          <img src={fourthImage.src} alt={fourthImage.alt} />
        </div>
        <div className="carousel-item">
          <img src={fifthImage.src} alt={fifthImage.alt} />
        </div>
      </div>
      <div className="page-contact"></div>
    </main>
  );
}
