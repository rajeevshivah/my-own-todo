import React, { useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import List from "./components/List";
/* const setListItems = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      const newState = state;
      console.log(newState);
      newState.push({
        task: action.task,
        priority: action.priority,
        hobbyOrProffession: action.hobbyOrProffession,
      });
      return newState;
    default:
      return state;
  }
}; */

function App() {
  const [newTodo, setNewTodo] = useState();
  const [listItems, setListItems] = useState([
    {
      task: "write a short story",
      priority: "low",
      hobbyOrProffession: "hobby",
      id: "a1",
    },
    {
      task: "buy laptop",
      priority: "high",
      hobbyOrProffession: "proffession",
      id: "a2",
    },
    {
      task: "complete todo app",
      priority: "medium",
      hobbyOrProffession: "proffession",
      id: "a3",
    },
  ]);

  const addItemsHandler = (newItem) => {
    setListItems((prevState) => {
      const newItems = [...prevState];
      newItems.unshift(newItem);
      return newItems;
    });
  };
  /* const [listItems, dispatch] = useReducer(setListItems, [
    {
      task: "write a short story",
      priority: "low",
      hobbyOrProffession: "hobby",
      id: "a1",
    },
    {
      task: "buy laptop",
      priority: "high",
      hobbyOrProffession: "proffession",
      id: "a2",
    },
    {
      task: "complete todo app",
      priority: "medium",
      hobbyOrProffession: "proffession",
      id: "a3",
    },
  ]); */

  const taskChangeHandler = (event) => {
    setNewTodo((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        task: event.target.value,
      };
    });
  };
  const priorityChangeHandler = (event) => {
    setNewTodo((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        priority: event.target.value,
      };
    });
  };
  const hobbyOrProffessionChangeHandler = (event) => {
    setNewTodo((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        hobbyOrProffession: event.target.value,
      };
    });
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={
              <Form
                taskChangeHandler={taskChangeHandler}
                priorityChangeHandler={priorityChangeHandler}
                hobbyOrProffessionChangeHandler={
                  hobbyOrProffessionChangeHandler
                }
                newTodo={newTodo}
                addItem={addItemsHandler}
              />
            }
          />
          <Route
            path="/remainingtodo"
            element={<List listItems={listItems} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
