import { useState, useEffect, useRef, useCallback } from "react";
import { TasksContext } from "./TasksContext";

const KEY = "tasks";

export const TasksProvider = (props) => {
  const { children } = props;

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

  const addTask = useCallback(() => {
    if (!newTaskTitle.trim().length) return;
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskTitle("");
    inputRef.current?.focus();
  }, [newTaskTitle]);

  const deleteTask = useCallback((taskId) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }, []);

  const toggleTaskComplete = useCallback((taskId) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }, []);

  const deleteAllTasks = useCallback(() => {
    setTasks([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        inputRef,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
