// src/pages/Welcome.jsx
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bienvenida/o a SkillLink 🌟</h1>
      <p>
        Conectamos personas con talento y ganas de aprender en proyectos con impacto social.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/login">
          <button style={{ marginRight: "1rem" }}>Ingresar</button>
        </Link>
        <Link to="/register">
          <button>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
