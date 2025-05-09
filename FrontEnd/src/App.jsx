import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/Components/Login/login.jsx"; // Cambiado a "Login"
import Dashboard from "../src/Components/Gestor/gestor.jsx";
import Crud from "./Components/Gestor/crud.jsx"; // Cambiado a "Opciones"
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
}
