import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const SingleTask = ({ todo }) => {
  const [done, setDone] = useState(todo.done ? true : false);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center my-3 p-4 rounded-lg shadow-lg bg-cyan-600 hover:shadow-2xl hover:scale-105 transition duration-200">
        <p
          className={`text-slate-100 uppercase tracking-wider ${
            done ? "line-through" : ""
          } `}
        >
          {todo.text}
        </p>
        <div className="flex items-center gap-x-2  ">
          <Link to={`/todo/edit/${todo._id}`}>
            <CiEdit className="text-yellow-400 text-2xl " />
          </Link>
          <Link to={`/todo/delete/${todo._id}`}>
            <CiTrash className="text-red-500 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
