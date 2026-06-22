import cx from "classnames";
import styles from "./TodoItem.module.sass";

function TodoItem({ task, deleteTask, toggleTask }) {
  const itemClass = cx(styles.itemContainer, {
    [styles.completed]: task.isDone,
  });

  return (
    <li className={itemClass}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task.id)}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
