import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [estadoApi, setEstadoApi] = useState("Comprobando...");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setEstadoApi(data.status ?? "sin campo status");
      })
      .catch((err) => {
        setError(err.message);
        setEstadoApi("No disponible");
      });
  }, []);

  return (
    <main style={{ maxWidth: "640px", margin: "2rem auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>Conexión React + FastAPI</h1>
      <p>
        Estado del backend (<code>/api/health</code>): <strong>{estadoApi}</strong>
      </p>
      {error && <p style={{ color: "#dc2626" }}>Error de conexión: {error}</p>}
    </main>
  );
}

export default App;
