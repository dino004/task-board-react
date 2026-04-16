import Button from "./Button";

const TaskItem = (props) => {
  const {
    className = "",
    id,
    title,
    isDone,
    onClick,
    onTaskComplete,
  } = props;
  return (
    <li
      onClick={() => {
        onTaskComplete(id);
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
          onClick(id);
        }}
      >
        ❌
      </Button>
    </li>
  );
};

export default TaskItem;
