import React, { useState } from "react";
import BackButton from "./buttons/BackButton";
import { useGlobalContext } from "../context";

const TaskInput = () => {
  // const [task, setTask] = useState("");
  const { task, setTask } = useGlobalContext();

  return (
    <div className="px-8 py-4 bg-cyan-900 w-full">
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className="text-slate-100 uppercase tracking-wider p-4 rounded-lg shadow-xl bg-cyan-600 w-full"
      />
      <BackButton />
    </div>
  );
};

export default TaskInput;
