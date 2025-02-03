import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
}) => {
  const [selectedSection, setSelectedSection] = React.useState("");
  const filteredTasks = selectedSection
    ? tasks.filter((task) => task.section === selectedSection)
    : tasks;

  return (
    <div className="w-full">
      {/*----- Filter Bar -----*/}
      <div className="flex justify-center mb-6">
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="border-2 border-[#2ecc71] px-3 py-2 text-white bg-[#2c3E50] focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 sm:text-sm"
        >
          <option value="">All Sections</option>
          {[...new Set(tasks.map((task) => task.section))].map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {/*----- Task List -----*/}

      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
