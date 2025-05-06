import { dinero } from "../Gestor/gestor.jsx";
let d = { dinero };
function Crud() {
  return (
    <>
      <div className="opciones">
        {" "}
        <h1 className="h1">Gestor De Gastos</h1>
        <h2 className="h2">${dinero}</h2>
        <button className="btn-crear" onClick={Crear}>
          Crear
        </button>
        <button className="btn-modificar">Modificar</button>
        <button className="btn-eliminar">Eliminar</button>
      </div>
    </>
  );
}

export default Crud;

export function Crear() {
  let gasto = prompt("Ingrese el del gasto monto: ");
  d -= gasto;
  alert("Gasto agregado correctamente.");
}

export function modificar() {
  return;
}
export function eliminar() {
  return;
}
