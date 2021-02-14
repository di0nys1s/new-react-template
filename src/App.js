import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { TasksProvider } from "./TasksContext";
import { AddTaskToggleProvider } from "./AddTaskToggleContext";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <TasksProvider>
        <AddTaskToggleProvider>
          <div className="container">
            <Header />
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <AddTask />
                  <Tasks />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </AddTaskToggleProvider>
      </TasksProvider>
    </Router>
  );
}

export default App;
