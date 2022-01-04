import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import style from "./ListItem.module.css";

const ListItem = (props) => {
  const [isItemDone, setIsItemDone] = useState(false);
  const itemDone = () => {
    setIsItemDone(!isItemDone);
  };
  const editItem = () => {
    console.log("Edit item");
  };
  const deleteItem = () => {
    console.log("Delete Item");
  };
  return (
    <li className={style.list_item}>
      <span>{props.task}</span>
      <span>{props.priority}</span>
      <span>{props.hobbyOrProffession}</span>
      <span>
        <Button
          type="button"
          onClick={itemDone}
          className={isItemDone && style.button_function}
        >
          {!isItemDone ? "NOT DONE" : "DONE"}
        </Button>
      </span>
      <span>
        {" "}
        <Button type="button" onClick={editItem}>
          EDIT
        </Button>
      </span>
      <span>
        <Button type="button" onClick={deleteItem}>
          DELETE
        </Button>
      </span>
    </li>
  );
};

export default ListItem;
