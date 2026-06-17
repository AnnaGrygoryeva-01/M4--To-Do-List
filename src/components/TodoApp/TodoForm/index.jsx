import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={textInput}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
