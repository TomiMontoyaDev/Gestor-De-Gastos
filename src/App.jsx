import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/Components/Login/login.jsx"; // Cambiado a "Login"
import Dashboard from "../src/Components/Gestor/gestor.jsx";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
