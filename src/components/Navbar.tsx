import React from "react";
import downloadTasks from "../assets/TLT-Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#2c3E50] p-4 shadow-md  ">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={downloadTasks}
            alt="Personal Task Manager"
            width={40}
            height={40}
            className="rounded-full"
          />
        </a>
        <span className="text-[#2ecc71] text-2xl font-bold ml-3">
          Personal Task Manager
        </span>

        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-[#34498DB] hover:opacity-80 transistion duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/task"
              className="text-[#2ecc71] hover:opacity-80 transistion duration-300"
            >
              Tasks
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="text-[#E74C3C]] hover:opacity-80 transistion duration-300"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
