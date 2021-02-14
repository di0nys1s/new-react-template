import Task from "./Task";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";

function Tasks() {
  const [tasks, setTasks] = useContext(TasksContext);

  return (
    <>
      {tasks.length > 0
        ? tasks.map((task) => <Task key={task.id} task={task} />)
        : "There is no tasks to show!"}
    </>
  );
}

export default Tasks;
