import React from "react";

interface TaskFormProps {
  onAddTask: (
    title: string
  ) => void /*----- Define a prop to handle adding tasks -----*/;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); /*----- Prevent default form submission behavior -----*/
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
          className="rounded-none rounded-t-md flex-grow block w-full min-w-0 border-2 border-[#2ecc71] px-3 py-2 text-white bg-[#2c3E50] focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 sm:text-sm shadow-sm"
        />
        <button
          type="submit"
          className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold px-4 py-2 rounded-none rounded-b-md focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:ring-opacity-50 sm:text-sm"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
