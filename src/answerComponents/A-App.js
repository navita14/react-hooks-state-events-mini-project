import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

const name = 'My Tasks'

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  // const categories = CATEGORIES
  // setCategories('data') 
  // console.log(categories)
  // setCategories('food')
  // console.log(categories)
  // const thing = "lesson"
  // setCategories(prev => {return [...prev, {thing}]})
  // console.log(categories)

  const [selectedCat, setSelectedCat] = useState("All")

  const filteredTasks = tasks.filter(task => {
    if (selectedCat === 'All' || task.category === selectedCat) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="App">
      <h2>{name}</h2>
      <CategoryFilter 
        categories={categories}
        setSelectedCat={setSelectedCat} />
      <NewTaskForm 
        categories={categories}
        setTasks={setTasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;