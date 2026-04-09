import Button from "./Button";

const TaskItem = (props) => {
  const {
    className = "",
    id,
    title,
    isDone,
    onDeleteTaskButtonClick,
    onTaskComplete,
  } = props;
  return (
    <li
      onClick={() => {
        onTaskComplete(id, isDone);
      }}
      className={`${className} ${isDone ? "is-completed" : ""}`}
      id={id}
      data-is-done={isDone}
    >
      {title}
      <Button
        className="remove-btn"
        onDeleteTaskButtonClick={(evt) => {
          evt.stopPropagation();
          onDeleteTaskButtonClick(id);
        }}
      >
        ❌
      </Button>
    </li>
  );
};

export default TaskItem;
