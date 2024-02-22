import { useEffect, useState } from "react";
import BackButton from "../components/buttons/BackButton";
import EditIcon from "../components/icons/EditIcon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { BASE_URL } from "../utils";
const url = BASE_URL;

const EditPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setLoading(false);
        setText(res.data.text);
        setDone(res.data.done);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    setLoading(true);
    const task = {
      text: text,
      done: done,
    };
    axios
      .put(`${url}/${id}`, task)
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen grid place-items-center max-w-sm mx-auto  ">
      <div className="w-full rounded-lg overflow-hidden">
        <div className="flex justify-between items-center py-4 px-8 shadow-2xl bg-cyan-600">
          <h1 className="text-2xl text-center text-slate-100"> Edit Task</h1>
          <button onClick={handleEdit} disabled={loading}>
            <EditIcon />
          </button>
        </div>
        <div className="px-8 py-4 bg-cyan-900 w-full">
          {loading ? <Loading /> : ""}
          <div className="my-3 text-lg text-slate-100 flex items-center justify-end gap-x-3">
            <label>{!done ? "Set as finished" : "Set as unfinished"}</label>
            <input
              type="checkbox"
              onChange={() => {
                setDone(!done);
              }}
            />
          </div>

          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className={`text-slate-100 uppercase tracking-wider p-4 rounded-lg shadow-xl bg-cyan-600 w-full ${
              done ? "line-through" : ""
            }
            `}
          />
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
