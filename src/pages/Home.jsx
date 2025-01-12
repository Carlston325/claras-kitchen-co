export default function Home(props) {
  const heroImageDescrip = props.heroImgDescrip;

  console.log(heroImageDescrip);

  return (
    <main className="main-body">
      <div className="page-hero">
        <img
          className="hero-image"
          src="https://picsum.photos/200/300"
          alt="this is a Food of some sort"
        />
        <h1 className="page-title">Claras' Kitchen & Co.</h1>
        <div className="hero-image-description">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="page-carousel">
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
      </div>
      <div className="page-contact"></div>
    </main>
  );
}
