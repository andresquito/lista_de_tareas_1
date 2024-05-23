import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";

function App() {
  return (
    <>
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>
        <div className="counter-todos">
          <h3>N° de Tareas: 4</h3>
          <h3>Pendientes: 2</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>
      </div>
    </>
  );
}

export default App;
