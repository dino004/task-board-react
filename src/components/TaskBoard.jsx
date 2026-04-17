import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskInfo from "./TaskInfo";

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

  const totalTasks = tasks.length;
  const doneTasks = useMemo(
    () => tasks.filter(({ isDone }) => isDone).length,
    [tasks],
  );
  const noTasks = !tasks.length;

  return (
    <section className="app js-task-board">
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        inputRef={inputRef}
      />
      <TaskInfo
        totalTasks={totalTasks}
        doneTasks={doneTasks}
        deleteAllTasks={deleteAllTasks}
        isDisabled={noTasks}
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
