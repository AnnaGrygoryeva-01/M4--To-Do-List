import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.sass";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    if (!text || text.trim() === "") return;
    const newTask = {
      id: uuidv4(),
      text: text.trim(),
      isDone: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (idToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
  };

  const toggleTask = (idToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <article className={styles.mainContainer}>
      <h1>My To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </article>
  );
}
export default TodoApp;
