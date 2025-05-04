import "./login.css";
import coin from "../../assets/coin.svg";

function Login() {
  return (
    <div className="login-container">
      <img className="coin" src={coin} alt="Coin" />

      <h1 className="login-title">Gestor De Gastos</h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Input Your Username"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Input Your Password"
          required
        />
        <br />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
