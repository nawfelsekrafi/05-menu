import React from "react";

const Categories = ({categories, filterMenu}) => {
  return (
    <nav className="btn-container">
      {
        categories.map((category, index)=> {
          return <button className="filter-btn"  key={index} onClick={() => filterMenu(category)}>{category}</button>
        })
      }
    </nav>
  );
};

export default Categories;
