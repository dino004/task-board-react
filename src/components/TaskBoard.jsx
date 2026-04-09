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

  const deleteTask = (taskId) => {
    console.log(`deleted task with id: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? "done" : "not done"}`);
  };

  const addTask = () => {
    console.log("adding task");
  };

  return (
    <section className="app js-task-board">
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskComplete={toggleTaskComplete}
      />
    </section>
  );
};

export default TaskBoard;
