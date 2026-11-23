import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function App() {
  const [status, setStatus] = useState("loading");
  const [detail, setDetail] = useState(
    "Comprobando conexión con el backend...",
  );
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    let active = true;

    async function checkHealth() {
      setStatus("loading");
      setDetail("Comprobando conexión con el backend...");
      try {
        const res = await fetch(`${API_URL}/api/health`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        if (active) {
          setStatus("ok");
          setDetail(
            data.status
              ? `Backend operativo (${data.status})`
              : "Backend operativo",
          );
        }
      } catch (err) {
        if (active) {
          setStatus("error");
          setDetail(
            `No se pudo conectar con ${API_URL}/api/health (${err.message})`,
          );
        }
      }
    }

    checkHealth();
    return () => {
      active = false;
    };
  }, [reloadCount]);

  const badgeClass =
    status === "ok"
      ? "text-bg-success"
      : status === "error"
        ? "text-bg-danger"
        : "text-bg-secondary";

  const alertClass =
    status === "ok"
      ? "alert-success"
      : status === "error"
        ? "alert-danger"
        : "alert-secondary";

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="h4 card-title mb-0">
                  Plantilla Web Python + React
                </h1>
                <span className={`badge ${badgeClass}`}>
                  {status === "ok"
                    ? "API OK"
                    : status === "error"
                      ? "API OFF"
                      : "Comprobando"}
                </span>
              </div>

              <div className={`alert ${alertClass} py-2 mb-3`} role="alert">
                {detail}
              </div>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setReloadCount((prev) => prev + 1)}
              >
                Reintentar comprobación
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
