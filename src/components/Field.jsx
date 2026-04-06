const Field = () => {
  return (
    <input
      className="input-task"
      type="text"
      data-text-input
      name="todo-text"
      placeholder="Enter task..."
      required
    />
  );
};

export default Field;
