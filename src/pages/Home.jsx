import React from "react";

const cardStyle = {
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  padding: "1.5rem",
  backgroundColor: "#fff",
  width: "300px",
  margin: "1rem",
  flex: "1 1 300px",
};

const containerStyle = {
  maxWidth: "1000px",
  margin: "2rem auto",
  padding: "0 1rem",
};

const cardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginTop: "2rem",
};

const buttonLogout = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#0077ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

function Home() {
  // Tomo usuario guardado en sessionStorage o localStorage (depende donde guardes)
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login"; // Redirige a login al cerrar sesión
  };

  return (
    <div style={containerStyle}>
      <h1>Bienvenida/o {user?.fullName || "a SkillLink"}</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Explorá proyectos, conectá con mentores y participá en desafíos.
      </p>

      <div style={cardsContainer}>
        <div style={cardStyle}>
          <h3>Proyectos disponibles</h3>
          <p>
            Descubrí proyectos interesantes para trabajar y crecer en tu
            aprendizaje.
          </p>
        </div>
        <div style={cardStyle}>
          <h3>Mentores expertos</h3>
          <p>
            Contactá a mentores que te guiarán en tu camino profesional.
          </p>
        </div>
        <div style={cardStyle}>
          <h3>Desafíos y eventos</h3>
          <p>
            Participá en competencias y eventos para poner a prueba tus habilidades.
          </p>
        </div>
      </div>

      <button style={buttonLogout} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Home;
