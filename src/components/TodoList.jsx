import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import axios from "axios";
import Loading from "./Loading";
import { BASE_URL } from "../utils";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = BASE_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setTodoList(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (todoList.length < 1) {
    return (
      <div className="px-8 py-4 bg-cyan-900">
        <h1 className="text-slate-300 tracking-wide">Your list is empty...</h1>
      </div>
    );
  }

  return (
    <div className="px-8 py-4 bg-cyan-900">
      {loading && <Loading />}
      {todoList.map((todo) => {
        return <SingleTask key={todo._id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
