import React from "react";

function CategoryFilter({CATEGORIES, filterTask}) {

  const clickCategory = (currentCategory) => {
    .class? null:"selected"
    filterTask(currentCategory)
  }

  const category = CATEGORIES.map((eachC, idx) => 
    <button 
    key={idx} 
    onClick={clickCategory}
    class={something}>
      {eachC}
      </button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category}
    </div>
  );
}

export default CategoryFilter;