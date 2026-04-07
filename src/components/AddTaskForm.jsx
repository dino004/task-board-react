import Field from "./Field";
import Button from "./Button";

const AddTaskForm = () => {
  return (
    <form className="form js-task-form-wrapper" autoComplete="off">
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
