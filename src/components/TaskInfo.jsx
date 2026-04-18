import { memo, useMemo, useContext } from "react";
import Button from "./Button";
import { TasksContext } from "./context/TasksContext";

const TaskInfo = () => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const doneTasks = useMemo(
    () => tasks.filter(({ isDone }) => isDone).length,
    [tasks],
  );
  const noTasks = !tasks.length;

  return (
    <section className="info-section">
      <h2 className="hidden">Task info section</h2>
      <h3>
        Is done {doneTasks} from {totalTasks}
      </h3>
      <Button
        disabled={noTasks}
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
