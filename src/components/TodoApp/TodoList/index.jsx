import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-message">The list is empty. Add your first task!</p>
    );
  }
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
