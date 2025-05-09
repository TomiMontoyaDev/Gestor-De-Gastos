import { useState } from "react";
import { Link } from "react-router-dom";

export function Crud() {
  const [dinero, setDinero] = useState(0); // Estado para manejar el dinero

  const handleIngresos = () => {
    const inputValue = parseFloat(document.getElementById("prueba").value) || 0;
    setDinero(dinero + inputValue); // Actualiza el estado sumando el valor ingresado
  };

  const handleGastos = () => {
    const inputValue = parseFloat(document.getElementById("prueba").value) || 0;
    setDinero(dinero - inputValue); // Actualiza el estado restando el valor ingresado
  };

  const handleModificar = () => {
    const inputValue = parseFloat(document.getElementById("prueba").value) || 0;
    setDinero(inputValue); // Actualiza el estado con el nuevo valor ingresado
  };

  return (
    <>
      <div className="opciones">
        <h1 className="h1">Gestor De Gastos</h1>
        <h2 className="h2">${dinero}</h2>
        <div>
          <input type="number" id="prueba" placeholder="Ingresa un monto" />
        </div>
        <button className="btn-crear" onClick={handleIngresos}>
          Crear
        </button>
        <button className="btn-modificar" onClick={handleModificar}>
          Modificar
        </button>
        <button className="btn-eliminar" onClick={handleGastos}>
          Eliminar
        </button>
        <Link to={"/app"}>
          <button className="btn-volver">Volver</button>
        </Link>
      </div>
    </>
  );
}

export default Crud;