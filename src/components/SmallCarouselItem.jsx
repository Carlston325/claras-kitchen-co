function SmallCarouselItem(props) {
  const fillItem = props.content;

  return (
    <div className="carousel-item">
      <img
        className="carousel-image"
        src={fillItem.src}
        alt={`The dish is called ${fillItem.name}`}
      />
      <div className="carousel-item-info">
        <h2 className="carousel-item-title">{fillItem.name}</h2>
      </div>
    </div>
  );
}
export default SmallCarouselItem;
