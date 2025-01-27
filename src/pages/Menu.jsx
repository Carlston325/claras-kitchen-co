import MenuItem from "../components/MenuItems";

export default function Menu(props) {
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

  const customStyle = {
    padding: "var(--page-padding)",
  };

  function handleClick(e) {
    console.log(e.target.id);
  }

  return (
    <main className="main-body">
      <div className="page-hero" style={customStyle}>
        <h1 className="page-title">Menu</h1>
      </div>
      <div className="page-menu">
        {menu.map((item) => {
          return (
            <MenuItem
              title={item.name}
              description={item.descrip}
              image={item.image}
              variations={item.variations}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </main>
  );
}
