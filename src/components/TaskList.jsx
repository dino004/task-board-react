import { memo, useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "./context/TasksContext";

const TaskList = () => {
  const { tasks = [] } = useContext(TasksContext);

  if (!tasks.length) {
    return (
      <div className="task-empty-message">
        <p>No tasks yet. Add one above!</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    );
  }
  return (
    <ul className="task-list-styles" id="task-container">
      {tasks.map((task) => (
        <TaskItem className="task" key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default memo(TaskList);
