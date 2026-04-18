import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskInfo from "./TaskInfo";

const TaskBoard = () => {
  return (
    <section className="app js-task-board">
      <AddTaskForm />
      <TaskInfo />
      <TaskList />
    </section>
  );
};

export default TaskBoard;
