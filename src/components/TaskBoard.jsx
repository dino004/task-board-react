import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const addTask = () => {
    if (!newTaskTitle.trim().length) return;
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  return (
    <section className="app js-task-board">
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <TaskList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskComplete={toggleTaskComplete}
      />
    </section>
  );
};

export default TaskBoard;
