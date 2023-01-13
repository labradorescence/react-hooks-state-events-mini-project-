import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCat }) {

  const cateBtn = categories.map((category, idx) => (
    <button
      key = {idx}
      className = {category === selectedCategory ? "selected": null}
      onClick = {() => handleSelectedCat(category)}
    >
      {category}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cateBtn}
    </div>
  );
}

export default CategoryFilter;