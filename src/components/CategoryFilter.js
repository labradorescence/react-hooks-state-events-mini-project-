import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {

  const cateBtn = categories.map((category, idx) => (
    <button 
        key={idx}
        className={category === selectedCategory? "selected":null}
        onClick = {()=> handleSelectedCategory(category)}
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