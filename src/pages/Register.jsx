import { useState, useEffect } from "react";
import { register } from "../api/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    password2: "",
    nameInstitution: "",
    typeInstitution: "",
  });

  const [tiposInstitucion, setTiposInstitucion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Trae los tipos de institución del backend (enum)
    fetch("http://localhost:8080/user/institution/type")
      .then((res) => res.json())
      .then((data) => setTiposInstitucion(data))
      .catch((err) => console.error("Error cargando tipos:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (form.password !== form.password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!form.typeInstitution) {
      alert("Selecciona un tipo de institución");
      return;
    }

    try {
      await register(form);
      alert("Registro exitoso");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error al registrar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <input
        name="full_name"
        placeholder="Nombre completo"
        value={form.full_name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />

      <input
        name="password2"
        type="password"
        placeholder="Repetir contraseña"
        value={form.password2}
        onChange={handleChange}
        required
      />

      <input
        name="nameInstitution"
        placeholder="Nombre de la institución"
        value={form.nameInstitution}
        onChange={handleChange}
      />

      <select
        name="typeInstitution"
        value={form.typeInstitution}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione tipo de institución</option>
        {tiposInstitucion.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo.charAt(0) + tipo.slice(1).toLowerCase()}
          </option>
        ))}
      </select>

      <button type="submit">Registrarme</button>
    </form>
  );
}
