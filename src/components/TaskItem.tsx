import React from "react";
import { Task } from "../types/Task";

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
  return (
    <li className="mb-2 p-4 border rounded shadow-md bg-white">
      <div className="flex items-center justify-between">
        <span
          className={`flex-grow ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
          style={{ marginRight: "1rem" }}
        >
          {task.title}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggleComplete(task.id)}
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline text-sm"
          >
            {task.completed ? "Mark Incomplete" : "Mark Done"}
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-[#E74C3C] hover:bg-[#c0392b] text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
