import { useContext } from "react";
import Field from "./Field";
import Button from "./Button";
import { TasksContext } from "./context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, inputRef } =
    useContext(TasksContext);

  const onSubmit = (evt) => {
    evt.preventDefault();
    addTask();
  };

  return (
    <form
      className="form js-task-form-wrapper"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Field
        className="input-task"
        type="text"
        id="new-task"
        name="task-text"
        placeholder="Enter task..."
        required={true}
        value={newTaskTitle}
        onInput={(evt) => setNewTaskTitle(evt.target.value)}
        inputRef={inputRef}
      />
      <Button className="add-btn" type="submit" id="add-btn-id">
        Add task
      </Button>
    </form>
  );
};

export default AddTaskForm;
