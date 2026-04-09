import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskComplete } = props;

  const hasTasks = tasks.length > 0;

  if (!hasTasks) {
    return (
      <div className="task-empty-message">No tasks yet. Add one above!</div>
    );
  }
  return (
    <ul className="todo-list-styles" id="task-container">
      {tasks.map((task) => (
        <TaskItem
          className="task"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskComplete={onTaskComplete}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
