import React from "react";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import AddIcon from "../components/icons/AddIcon";

const Home = () => {
  return (
    <div className="h-screen grid place-items-center max-w-sm mx-auto px-4 ">
      <div className="w-full rounded-lg overflow-hidden">
        <Title text={"To Do List"} icon={<AddIcon />} />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
