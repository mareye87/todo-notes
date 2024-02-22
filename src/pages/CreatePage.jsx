import ConfirmIcon from "../components/icons/ConfirmIcon";
import React, { useState } from "react";
import BackButton from "../components/buttons/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const CreatePage = () => {
  const [task, setTask] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const url = BASE_URL;

  const handleAddToDo = () => {
    const data = {
      text: task,
    };
    setPending(true);
    axios
      .post(url, data)
      .then((response) => {
        setPending(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setPending(false);
        alert("An error happened, Please check console");
      });
  };

  return (
    <div className="h-screen grid place-items-center max-w-sm mx-auto  ">
      <div className="w-full rounded-lg overflow-hidden">
        <div className="flex justify-between items-center py-4 px-8 shadow-2xl bg-cyan-600">
          <h1 className="text-2xl text-center text-slate-100"> Create task</h1>
          <button onClick={handleAddToDo} disabled={pending}>
            <ConfirmIcon />
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default CreatePage;
