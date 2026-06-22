import { useState } from "react";
import styles from "./TodoForm.module.sass";

function TodoForm({ addTask }) {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() === "") {
      return;
    }
    addTask(textInput);
    setTextInput("");
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        type="text"
        value={textInput}
        onChange={handleChange}
        placeholder="Add your task..."
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TodoForm;
