import "./gestor.css";
import { useState } from "react";
import Grafico from "./Grafico/grafico.jsx";
import { Link } from "react-router-dom";
import { Crud } from "./crud.jsx";

function Gestor() {
  return (
    <>
      <div className="Contenedor">
        <div className="main">
          <section className="gestor">
            <h1 className="h1">Gestor De Gastos</h1>
            <h2 className="h2">${Crud}</h2>
            <div>
              <Link to={"/crud"}>
                <button className="btn-crear">Crear</button>
              </Link>
              <button className="btn-modificar">Modificar</button>
              <button className="btn-eliminar">Eliminar</button>
              <Link to={"/"}>
                <button className="btn-volver">Cerrar Sesion</button>
              </Link>
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
