import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <section className="app js-task-board">
      <AddTaskForm />
      <TaskList />
    </section>
  );
};

export default TaskBoard;
