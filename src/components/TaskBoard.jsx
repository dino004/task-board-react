import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const tasks = [
    {
      id: "id-1",
      title: "first task",
      isDone: false,
    },
    {
      id: "id-2",
      title: "second task",
      isDone: true,
    },
  ];
  return (
    <section className="app js-task-board">
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </section>
  );
};

export default TaskBoard;
