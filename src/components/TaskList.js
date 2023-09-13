import React from "react";
import Task from "./Task";

function TaskList({taskss,setTasks}) {
  return (
    <div className="tasks">
      {taskss.map(task => {
        return <Task key={task.text} text={task.text} category={task.category} setTasks={setTasks}/>
      })}
    </div>
  );
}

export default TaskList;