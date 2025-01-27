function MenuItem(props) {
  const title = props.title;
  const description = props.description;
  const image = props.image;
  const variations = props.variations;

  return (
    <div className="menu-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Main Ingredient:</p>
      <ul>
        {variations.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
      <button id={title} className="btn" onClick={props.handleClick}>
        View Ingredients
      </button>
    </div>
  );
}

export default MenuItem;
