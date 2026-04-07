import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { tasks = [] } = props;

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
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
