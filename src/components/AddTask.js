import { useState, useContext } from "react";
import { TasksContext } from "../TasksContext";
import { AddTaskToggleContext } from "../AddTaskToggleContext";

function AddTask() {
  const [tasks, setTasks] = useContext(TasksContext);
  const [displayAddTaskForm, setDisplayAddTaskDorm] = useContext(
    AddTaskToggleContext
  );

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = { text, day, reminder };
    setText("");
    setDay("");
    setReminder(false);

    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newTask)
    }) 

    const data = await response.json()
    setTasks([...tasks, data]);

  };

  return (
      
    <form
      style={{ display: !displayAddTaskForm && "none" }}
      onSubmit={addTask}
      className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Add Day & Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
