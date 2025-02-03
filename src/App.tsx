import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
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
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-green-700 font-bold mb-4 text-center pt-4">
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
  );
}

export default App;
