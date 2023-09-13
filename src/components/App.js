import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskss,setTasks] = useState(TASKS)
  const [categoriess,setCategories] = useState(CATEGORIES)
  const [filterCats,setFilterCats]= useState("All")

  const filterTasks = taskss.filter(task => {
    if (filterCats === "All") {  //or if (filterCats === "All") || (task.category === filterCats)
      return true;
    } else if (task.category === filterCats) {
      return true;
    } else {
      return false;
    }
  });
  
  return (
    <div className="App">
      <h2>'My Tasks'</h2>
      <CategoryFilter categoriess={categoriess} setCategories={setCategories} setFilterCats={setFilterCats}/>
      <NewTaskForm  categoriess={categoriess} setTasks={setTasks} />
      <TaskList taskss={filterTasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;