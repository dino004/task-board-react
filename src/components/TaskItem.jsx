import Button from "./Button";

const TaskItem = (props) => {
  const { className = "", id, title, isDone } = props;
  return (
    <li className={className} id={id} data-is-done={isDone}>
      {title}
      <Button className="remove-btn">❌</Button>
    </li>
  );
};

export default TaskItem;
