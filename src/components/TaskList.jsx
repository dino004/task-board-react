import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskComplete } = props;

  const hasTasks = tasks.length > 0;

  if (!hasTasks) {
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
        <TaskItem
          className="task"
          key={task.id}
          onClick={onDeleteTaskButtonClick}
          onTaskComplete={onTaskComplete}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
