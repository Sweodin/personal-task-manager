import React from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (title: string, dueDate: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      dueDate /*----- Add dueDate To the new task -----*/,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#2c3E50]">
      <Navbar />
      <div className=" container mx-auto mt-10 px-4">
        <h1 className="text-3xl text-[#2ecc71] font-bold mb-4 text-center pt-4">
          My Tasks
        </h1>
        <div className="flex justify-center ">
          <TaskForm onAddTask={addTask} />
        </div>
        <TaskList
          tasks={tasks}
          onToggleComplete={
            toggleComplete
          } /*----- Pass toggleComplete function -----*/
          onDeleteTask={deleteTask} /*----- Pass deleteTask function -----*/
        />
      </div>
    </div>
  );
};

export default App;
