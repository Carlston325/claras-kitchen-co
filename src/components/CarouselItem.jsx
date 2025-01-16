function CarouselItem(props) {
  const fillItem = props.content;

  return (
    <div className="carousel-item">
      <img
        className="carousel-image"
        src={fillItem.src}
        alt={`The dish is called ${fillItem.name}`}
      />
      <div className="carousel-item-box">
        <h2 className="carousel-item-title">{fillItem.name}</h2>
        <p className="carousel-item-descrip">{fillItem.descrip}</p>
      </div>
    </div>
  );
}
export default CarouselItem;
