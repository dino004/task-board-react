import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { addTask } = props;

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
      />
      <Button className="add-btn" type="submit" id="add-btn-id">
        Add task
      </Button>
    </form>
  );
};

export default AddTaskForm;
