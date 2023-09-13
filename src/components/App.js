import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import {useState} from "react"


function App() {
  const [tasks , setTasks] = useState(TASKS)

  const onDeleteTask = (deleteTask) => {
    const updatedTaskAfterDeletion = tasks.filter((task) => task.text !== deleteTask);
    setTasks(updatedTaskAfterDeletion)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
