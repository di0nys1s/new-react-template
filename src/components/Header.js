import { useLocation } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { TasksContext } from "../TasksContext";

const Header = ({ title }) => {

  const location = useLocation();
  const [tasks, setTasks] = useContext(TasksContext);

  return (
    <header className="header">
      <h1>
        {title} = {tasks.length}
      </h1>
      {location.pathname === '/' && <Button /> }
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
