import TodoItem from "./TodoItem";
import styles from "./TodoList.module.sass";

function TodoList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return <p className={styles.emptyMessage}>Add your first task!</p>;
  }
  return (
    <ul className={styles.list}>
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
