import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import DeleteTask from "./DeleteTask";

function Task({ task }) {
  const [tasks, setTasks] = useContext(TasksContext);

  const toggleReminder = async (id) => {
    const taskToToggle = tasks.filter((task) => task.id === id);
    const updatedTask = { ...taskToToggle[0], reminder: !taskToToggle[0].reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div
      onDoubleClick={() => toggleReminder(task.id)}
      className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text} <DeleteTask taskId={task.id} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
