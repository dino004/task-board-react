import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { addTask, newTaskTitle, setNewTaskTitle } = props;

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
        name="todo-text"
        placeholder="Enter task..."
        required={true}
        value={newTaskTitle}
        onInput={(evt) => setNewTaskTitle(evt.target.value)}
      />
      <Button className="add-btn" type="submit" id="add-btn-id">
        Add task
      </Button>
    </form>
  );
};

export default AddTaskForm;
