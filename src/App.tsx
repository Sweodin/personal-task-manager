import React from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [sections, setSections] = React.useState<string[]>([
    "Work",
    "Personal",
    "Shopping",
  ]);

  const addTask = (title: string, dueDate: string, section: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      dueDate,
      section,
    };
    setTasks([...tasks, newTask]);
  };

  const addSection = (newSection: string) => {
    if (!sections.includes(newSection)) {
      setSections([...sections, newSection]);
    }
  };

  const onToggleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-[#2c3E50]">
      <Navbar />
      <div className=" container mx-auto mt-10 px-4">
        <h1 className="text-3xl text-[#2ecc71] font-bold mb-8 text-center pt-4">
          My Tasks
        </h1>
        <div className="flex flex-col items-center space-y-8 ">
          <TaskForm
            onAddTask={addTask}
            sections={sections}
            onAddSection={addSection}
          />
          <div className="w-full max-w-4xl ">
            <TaskList
              tasks={tasks}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
