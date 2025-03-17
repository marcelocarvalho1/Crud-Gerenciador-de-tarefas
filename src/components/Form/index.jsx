import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ onAdd, onEdit, editTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Preenche o formulário se estiver editando
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editTask) {
      onEdit({ id: editTask.id, title, description });
    } else {
      // Certifique-se de que os dados estão sendo passados corretamente
      console.log({ title, description }); // Adiciona um log para verificar os dados antes de enviar
      onAdd({ title, description });
    }
  
    setTitle("");
    setDescription("");
  };
  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="textarea"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className="button" type="submit">
        {editTask ? "Atualizar" : "Adicionar Tarefa"}
      </button>
    </form>
  );
};

export default Form;
