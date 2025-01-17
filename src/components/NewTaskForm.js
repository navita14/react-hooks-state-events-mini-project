import React from "react";

function NewTaskForm({categoriess,setTasks}) {
  
  function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      "text": event.target.text.value,
      "category": event.target.category.value
    }
    setTasks(oldtasks => [...oldtasks,newTask])
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoriess.map(cat => {
            return <option value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
