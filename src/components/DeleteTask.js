import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import { FaTimes } from "react-icons/fa";

function DeleteTask({taskId}) {
  const [tasks, setTasks] = useContext(TasksContext);

  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <FaTimes
      onClick={() => deleteTask(taskId)}
      style={{ color: "red", cursor: "pointer" }}
    />
  );
}

export default DeleteTask;
