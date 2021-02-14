import { useState, createContext } from "react";

export const AddTaskToggleContext = createContext();

export const AddTaskToggleProvider = ({ children }) => {
  const [displayAddTaskForm, setDisplayAddTaskDorm] = useState(false);

  return (
    <AddTaskToggleContext.Provider
      value={[displayAddTaskForm, setDisplayAddTaskDorm]}>
      {children}
    </AddTaskToggleContext.Provider>
  );
};

export default AddTaskToggleContext;
