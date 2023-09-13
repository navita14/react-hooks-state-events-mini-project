import React from "react";

function Task({text,category,setTasks}) {

  function handleDelete(){
    // console.log("hello")
    setTasks(taskVal => taskVal.filter(task => task.text !== text))
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} >X</button>
    </div>
  );
}

export default Task;