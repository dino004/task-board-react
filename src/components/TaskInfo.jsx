import { memo } from "react";
import Button from "./Button";

const TaskInfo = (props) => {
  const { totalTasks, doneTasks, deleteAllTasks, isDisabled } = props;

  return (
    <section className="info-section">
      <h2 className="hidden">Task info section</h2>
      <h3>
        Is done {doneTasks} from {totalTasks}
      </h3>
      <Button
        disabled={isDisabled}
        className="remove-all-tasks-btn"
        type="button"
        onClick={deleteAllTasks}
      >
        Delete all tasks
      </Button>
    </section>
  );
};

export default memo(TaskInfo);
