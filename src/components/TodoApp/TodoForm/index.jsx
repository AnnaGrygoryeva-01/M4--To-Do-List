import { useState } from "react";
import styles from "./TodoForm.module.sass";
import { object, string } from "yup";
import cx from "classnames";

const taskSchema = object({
  taskText: string()
    .trim()
    .required("Field can't be empty")
    .min(2, "Min 2 symbols are required")
    .max(100, "Max 100 symbols"),
});

function TodoForm({ addTask }) {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await taskSchema.validate({ taskText: textInput });

      addTask(textInput);
      setTextInput("");
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
    if (error) setError(null);
  };

  const inputClassName = cx(styles.inputField, {
    [styles.inputError]: error,
  });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          className={inputClassName}
          type="text"
          value={textInput}
          onChange={handleChange}
          placeholder="Add your task..."
        />
        <button type="submit">+</button>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </form>
  );
}

export default TodoForm;
