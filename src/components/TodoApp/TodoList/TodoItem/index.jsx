function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <input type="checkbox" onChange={() => toggleTask(task.id)} />{" "}
      <p>{task.text}</p>{" "}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
