import { useState } from "react";
import MenuItem from "../components/MenuItems";
import Ingredients from "../components/Ingredients";

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

  const [selectedMenuItemName, setSelectedMenuItemName] = useState("");
  const [showIngredient, setShowIngredient] = useState("");
  const [hideIngredients, setHideIngredients] = useState(true);
  function handleClick(e) {
    e.preventDefault();

    if (e.target.id) {
      const selectedMenuItem = menu.filter((item) => {
        return item.name === e.target.id;
      });
      setSelectedMenuItemName(selectedMenuItem[0].name);
      setShowIngredient(selectedMenuItem[0].contains());

      if (selectedMenuItemName === e.target.id) {
        setHideIngredients(true);
        setSelectedMenuItemName("");
      } else {
        setHideIngredients(false);
      }
    } else {
      setSelectedMenuItemName("");
      setHideIngredients(true);
    }
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
      {hideIngredients ? null : (
        <div className="show-ingredients">
          <Ingredients
            handleClick={handleClick}
            dishName={selectedMenuItemName}
            contains={showIngredient}
          />
        </div>
      )}
    </main>
  );
}
