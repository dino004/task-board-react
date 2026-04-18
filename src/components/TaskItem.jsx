import { useContext } from "react";
import { memo } from "react";
import Button from "./Button";
import { TasksContext } from "./context/TasksContext";

const TaskItem = (props) => {
  const { className = "", id, title, isDone } = props;
  const { toggleTaskComplete, deleteTask } = useContext(TasksContext);
  return (
    <li
      onClick={() => {
        toggleTaskComplete(id);
      }}
      className={`${className} ${isDone ? "is-completed" : ""}`}
      id={id}
      data-is-done={isDone}
    >
      <span>{title}</span>
      <Button
        className="remove-btn"
        onClick={(evt) => {
          evt.stopPropagation();
          deleteTask(id);
        }}
      >
        ❌
      </Button>
    </li>
  );
};

export default memo(TaskItem);
