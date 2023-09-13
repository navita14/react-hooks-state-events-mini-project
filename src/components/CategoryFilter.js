import React from "react";

export default function CategoryFilter({categories}) {
  
  const newButton = categories.map((category) => {
    return <button key={category}> {category} </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {newButton}
    </div>
  );
}


