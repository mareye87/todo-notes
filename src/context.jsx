import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        todoList,
        setTodoList,
        task,
        setTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
