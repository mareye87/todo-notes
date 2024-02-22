import { useEffect, useState } from "react";
import BackButton from "../components/buttons/BackButton";
import DeleteIcon from "../components/icons/DeleteIcon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeletePage = () => {
  const { id } = useParams();
  const url = "http://localhost:5555/todo";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setLoading(false);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="h-screen grid place-items-center max-w-sm mx-auto  ">
      <div className="w-full rounded-lg overflow-hidden">
        <div className="flex justify-between items-center py-4 px-8 shadow-2xl bg-cyan-600">
          <h1 className="text-2xl text-center text-slate-100">Delete Task?</h1>
          <button onClick={handleDelete} disabled={loading}>
            <DeleteIcon />
          </button>
        </div>
        <div className="px-8 py-4 bg-cyan-900">
          <p className="text-slate-100 uppercase tracking-wider p-4 rounded-lg shadow-xl bg-cyan-600 w-full">
            {text}
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default DeletePage;
