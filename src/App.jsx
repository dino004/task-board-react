import { TasksProvider } from "./components/context/TaskProvider";
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <TasksProvider>
      <TaskBoard />
    </TasksProvider>
  );
};

export default App;
