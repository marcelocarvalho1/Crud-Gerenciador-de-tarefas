import React from "react";
import "./Item.css";

const Item = ({ task, onEdit, onDelete }) => {
  return (
    <li className="item-container">
      <h3 className="title">{task.title}</h3>
      <p className="description">{task.description}</p>
      <div className="button-container">
        <button className="button edit-btn" onClick={() => onEdit(task)}>
          Editar
        </button>
        <button className="button delete-btn" onClick={() => onDelete(task.id)}>
          Deletar
        </button>
      </div>
    </li>
  );
};

export default Item;
