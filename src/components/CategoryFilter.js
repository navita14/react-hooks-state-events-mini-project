import React from "react";

function CategoryFilter({categoriess,setCategories,setFilterCats}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriess.map(category => {
        function filterCategories(){
          setFilterCats(category)
        }

        return <button onClick={filterCategories}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;