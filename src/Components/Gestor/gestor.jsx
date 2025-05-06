import "./gestor.css";
import { useState } from "react";
import Grafico from "./Grafico/grafico.jsx";
import { useNavigate } from "react-router-dom";
export let dinero = 1000;
import { Link } from "react-router-dom";

function Gestor() {
  return (
    <>
      <div className="Contenedor">
        <div className="main">
          <section className="gestor">
            <h1 className="h1">Gestor De Gastos</h1>
            <h2 className="h2">${dinero}</h2>
            <div>
              <Link to={"/crud"}>
                <button className="btn-crear">Crear</button>
              </Link>
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
      </div>
    </>
  );
}

export default Gestor;
