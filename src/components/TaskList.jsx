import TaskItem from "./TaskItem";

const TaskList = () => {
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="task-empty-message">No tasks yet. Add one above!</div>;
  }
  return (
    <ul className="todo-list-styles" data-todo-container>
      <TaskItem />
    </ul>
  );
};

export default TaskList;
