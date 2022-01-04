import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.listItems.map((item) => (
          <ListItem
            key={item.id}
            task={item.task}
            priority={item.priority}
            hobbyOrProffession={item.hobbyOrProffession}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
