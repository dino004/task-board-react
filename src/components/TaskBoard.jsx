import { useState, useEffect, useRef } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const KEY = "tasks";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saveTasks = localStorage.getItem(KEY);
      return saveTasks ? JSON.parse(saveTasks) : [];
    } catch (error) {
      console.log("Error parsing JSON:", error);
      return [];
    }
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const inputRef = useRef(null);

  const addTask = () => {
    if (!newTaskTitle.trim().length) return;
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    inputRef.current?.focus();
  };

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

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="app js-task-board">
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        inputRef={inputRef}
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
