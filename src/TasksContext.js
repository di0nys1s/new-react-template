import { useState, useEffect, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks')
      const data = await response.json();

      setTasks(data)
    } 
    fetchTasks();
  }, [])


  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
