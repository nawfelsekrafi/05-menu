import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    console.log(category);
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  }

  return (
    <main>
      <header className="menu">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu}/>
      </header>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
