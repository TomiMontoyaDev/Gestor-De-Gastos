import "./gestor.css";
import { useState } from "react";
import Grafico from "./Grafico/grafico.jsx";
import { useNavigate } from "react-router-dom";
const dinero = 1000;

function crud() {
  const navigate = useNavigate();
  document.querySelector(".btn-crear").addEventListener("click", function () {
    navigate("/crear");
  });
}
function Gestor() {
  return (
    <>
      <div className="main">
        <section className="gestor">
          <h1 className="h1">Gestor De Gastos</h1>
          <h2 className="h2">${dinero}</h2>
          <div>
            <button className="btn-crear">Crear</button>
            <button className="btn-modificar">Modificar</button>
            <button className="btn-eliminar">Eliminar</button>
          </div>
        </section>
        <aside className="grafico">
          <div className="grafico_container">
            <Grafico />
          </div>

          <article className="historial"></article>
        </aside>
      </div>
    </>
  );
}

export default Gestor;
