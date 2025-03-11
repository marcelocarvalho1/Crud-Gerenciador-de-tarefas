import React from "react";
import Item from "../Item";
import "./List.css";

const List = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="list-container">
      {tasks.map((task) => (
        <Item key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;
