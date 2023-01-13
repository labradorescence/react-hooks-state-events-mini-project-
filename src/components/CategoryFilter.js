import React from "react";

function CategoryFilter({categories, selectedCategory, handleSelectedCategory}) {

  const categoryBtn = categories.map((category, idx) => {
    
    const className = category === selectedCategory ?  "selected": null
    
    return (<button 
                key={idx} 
                onClick={() => handleSelectedCategory(category)}
                class={className}>
                  {category}
            </button>)
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;