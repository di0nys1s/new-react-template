import { useContext } from "react";
import PropTypes from "prop-types";
import { AddTaskToggleContext } from "../AddTaskToggleContext";

function Button({ onClick }) {
  const [displayAddTaskForm, setDisplayAddTaskDorm] = useContext(
    AddTaskToggleContext
  );

  const toggleAddTaskForm = () => {
    setDisplayAddTaskDorm(!displayAddTaskForm);
  };

  return (
    <button
      onClick={toggleAddTaskForm}
      style={{ backgroundColor: !displayAddTaskForm ? "green" : "red" }}
      className="btn">
      {!displayAddTaskForm ? "Add" : "Close"}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
