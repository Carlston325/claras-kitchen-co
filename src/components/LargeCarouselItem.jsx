import { useState } from "react";

function CarouselItem(props) {
  const fillItem = props.content;
  let [toggle, setToggle] = useState(false);

  return (
    <div className="carousel-item">
      <img
        className="carousel-image"
        src={fillItem.src}
        alt={`The dish is called ${fillItem.name}`}
      />
      <div className="carousel-item-info">
        <h2 className="carousel-item-title">{fillItem.name}</h2>
        <p className="carousel-item-descrip">{fillItem.descrip}</p>
        <ul>
          {fillItem.variations.map((each) => {
            return <li className="carousel-item-info">{each}</li>;
          })}
        </ul>
        <button
          className="carousel-item-button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Collapse Ingrediants" : "Check Ingrediants"}
        </button>
        {toggle && (
          <p className="carousel-item-ingrediants">{fillItem.ingrediants}</p>
        )}
      </div>
    </div>
  );
}
export default CarouselItem;
