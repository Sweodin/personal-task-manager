import React from "react";
import { Task } from "../types/Task";
import { CalendarIcon } from "@heroicons/react/24/outline"; /*----- Import the calendar icon -----*/

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDeleteTask,
}) => {
  /*----- Check if the task is overdue -----*/

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();
  return (
    <li className="mb-2 p-4 border-2 border-[#2ecc71] rounded shadow-md bg-[#34495E]">
      <div className="flex items-center justify-between">
        <div className="flex-grow">
          <span
            className={`${
              task.completed ? "line-through text-gray-400" : "text-white"
            }`}
          >
            {task.title}
          </span>
          {task.dueDate && (
            <p
              className={`text-sm ${
                isOverdue ? "text-red-400" : "text-gray-300"
              } flex items-center mt-1`}
            >
              <CalendarIcon className="w-4 h-4 mr-1" />
              Due: {task.dueDate}
            </p>
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggleComplete(task.id)}
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:ring-opacity-50 text-sm"
          >
            {task.completed ? "Mark Incomplete" : "Mark Done"}
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-[#E74C3C] hover:bg-[#c0392b] text-white font-bold py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-[#E74C3C] focus:ring-opacity-50 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
