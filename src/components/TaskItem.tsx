import React from "react";
import { Task } from "../types/Task";
/* import { CalendarIcon } from "@heroicons/react/24/outline";  */ /*----- Import the calendar icon -----*/

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

  /* const isOverdue = task.dueDate && new Date(task.dueDate) < new Date(); */
  return (
    <div className="bg-[#34495E] p-4 rounded-lg shadow-md">
      <div className="text-lg font-semibold text-[#2ecc71]">{task.section}</div>
      <div className="text-sm text-gray-300">{task.dueDate}</div>
      <div className="mt-2 text-white">{task.title}</div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-4 py-2 rounded-md ${
            task.completed
              ? "bg-[#27ae60] hover:bg-[#2ecc71]"
              : "bg-[#e74c3c] hover:bg-[#c0392b]"
          } text-white`}
        >
          {task.completed ? "Completed" : "Mark Complete"}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="bg-[#e74c3c] hover:bg-[#c0392b] px-4 py-2 rounded-md text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
