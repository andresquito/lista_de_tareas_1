import React from "react";

export const TodoAdd = () => {
  return (
    <form action="">
      <input
        type="text"
        className="input-add"
        name="description"
        value="Aprender React"
        placeholder="Nueva Tarea"
      />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
