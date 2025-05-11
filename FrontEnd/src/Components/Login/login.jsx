import { useState } from "react";
import "./login.css";
import coin from "../../assets/coin.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registrarUsuario = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/Backend/usuarios/crear.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, contrasena: password }),
        }
      );

      if (!email || !password) {
        Swal.fire({
          icon: "warning",
          title: "Campos vacíos",
          text: "Todos los campos son obligatorios",
          confirmButtonText: "Entendido",
          background: "#fefefe",
          confirmButtonColor: "#3085d6",
        });
        return;
      }

      if (!email.includes("@")) {
        Swal.fire({
          icon: "error",
          title: "Correo inválido",
          text: 'El correo debe contener un "@"',
          confirmButtonText: "Corregir",
        });
        return;
      }
      const data = await response.json();
      if (data.status === "ok") {
        alert(data.message);
      } else {
        alert(`Error: ${data.message}`);
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const iniciarSesion = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/Backend/usuarios/crear.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, contrasena: password }),
        }
      );

      const data = await response.json();
      if (data.status === "ok") {
        alert(data.message);
        navigate("/app");
      } else {
        alert(`Error: ${data.message}`);
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <img className="coin" src={coin} alt="Coin" />
      <h1 className="login-title">Gestor De Gastos</h1>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Input Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Input Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button className="login-button" type="button" onClick={iniciarSesion}>
          Login
        </button>
        <br />
        <button
          className="register-button"
          type="button"
          onClick={registrarUsuario}
        >
          Register
        </button>
        <br />
      </form>
    </div>
  );
};

export default Login;
