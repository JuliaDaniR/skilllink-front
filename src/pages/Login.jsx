import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      // Guardar token y datos del usuario en sessionStorage
      sessionStorage.setItem("token", response.jwtToken);
      sessionStorage.setItem("user", JSON.stringify({
        fullName: response.fullName,
        role: response.role
      }));
      console.log("Usuario logueado:", response.fullName);
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Credenciales incorrectas o usuario inactivo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}
