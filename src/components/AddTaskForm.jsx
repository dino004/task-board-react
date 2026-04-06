import Field from "./Field";
import Button from "./Button";

const AddTaskForm = () => {
  return (
    <form className="form js-task-form-wrapper" autoComplete="off">
      <Field />
      <Button />
    </form>
  );
};

export default AddTaskForm;
