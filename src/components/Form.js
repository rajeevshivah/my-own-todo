import React, { useState } from "react";
import Input from "./Input";
import style from "./Form.module.css";
import Button from "./Button";

const Form = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    Object.assign(props.newTodo, { id: (Math.random() * 10).toString() });
    props.addItem(props.newTodo);
    console.log("Hello");
  };
  return (
    <div className={style.form}>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter the task name"
          onChange={(event) => props.taskChangeHandler(event)}
        />
        <Input
          type="text"
          placeholder="priority: high/medium/low"
          onChange={(event) => props.priorityChangeHandler(event)}
        />
        <Input
          type="text"
          placeholder="personal or proffession?"
          onChange={(event) => props.hobbyOrProffessionChangeHandler(event)}
        />
        <Button type="submit" value="submit">
          ADD TODO
        </Button>
      </form>
    </div>
  );
};

export default Form;
