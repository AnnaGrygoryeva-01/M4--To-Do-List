import { useState } from "react";
import TodoForm from "././TodoForm";
import TodoList from "././TodoList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    if (!text || text.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      isDone: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (idToDelete) => {
    const updatedList = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedList);
  };

  const toggleTask = (idToToggle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToToggle) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <article>
      <h1>My To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </article>
  );
}
export default TodoApp;
