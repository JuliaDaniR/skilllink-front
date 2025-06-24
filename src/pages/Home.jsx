// src/pages/Home.jsx
import React from "react";

function Home() {
  const user = JSON.parse(localStorage.getItem("usuarioAutenticado"));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenida/o {user?.nombre || "a SkillLink"}</h1>
      <p>Explorá proyectos, conectá con mentores y participá en desafíos.</p>
    </div>
  );
}

export default Home;
