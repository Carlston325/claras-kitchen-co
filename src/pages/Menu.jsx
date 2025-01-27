import MenuItem from "../components/MenuItems";
import { Link } from "react-router-dom";

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

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <main className="main-body">
      <div className="page-hero">
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
