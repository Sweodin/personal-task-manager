import React, { useState } from "react";

interface TaskFormProps {
  onAddTask: (
    title: string
  ) => void /*----- Define a prop to handle adding tasks -----*/;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); /*----- Prevent default form submission behavior -----*/
    if (newTaskTitle.trim() !== "") {
      onAddTask(
        newTaskTitle
      ); /*----- Call the onAddTask function passed from App.tsx -----*/
      setNewTaskTitle(
        ""
      ); /*----- Clear the input field after adding the task -----*/
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full max-w-lg">
      <div className="flex flex-col rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="rounded-none rounded-t-md flex-grow block w-full min-w-0 border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-none rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
