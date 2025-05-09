import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./login.css";
import coin from "../../assets/coin.svg";
import { useNavigate } from "react-router-dom";

// Import useNavigate from react-router-dom





// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDv43fwfkDOqn0BWfHHPtQXBtpYH8s5_bo",
  authDomain: "gestor-de-gastos-6eaa3.firebaseapp.com",
  projectId: "gestor-de-gastos-6eaa3",
  storageBucket: "gestor-de-gastos-6eaa3.firebasestorage.app",
  messagingSenderId: "256004501104",
  appId: "1:256004501104:web:12689ce503e3c8ba3aceb5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("✅ Usuario registrado: " + userCredential.user.email);
    } catch (error) {
      alert("❌ Error al registrar: " + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate('/app');
    } catch (error) {
      alert("❌ Error al iniciar sesión: " + error.message);
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

        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>

        <br />
        <button
          className="register-button"
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
        <br />
      </form>
    </div>
  );
}

export default Login;
