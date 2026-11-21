# Plantilla FastAPI + React (Vite)

Estructura base con backend en Python (FastAPI) y frontend en React (Vite), conectados en local mediante `/api/health`.

## 1. Clonar el nuevo proyecto

```bash
git clone git@github.com:JuanRR17/NOMBRE_DEL_NUEVO_PROYECTO.git
cd NOMBRE_DEL_NUEVO_PROYECTO
```

## 2. Inicializar y arrancar el Backend (FastAPI)

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

- API disponible en: `[http://127.0.0.1:8000](http://127.0.0.1:8000)`
- Endpoint de prueba: `[http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)`
- Documentación interactiva: `[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)`

## 3. Inicializar y arrancar el Frontend (React + Vite)

En otra terminal desde la carpeta `frontend`:

```bash
cd frontend
npm install
npm run dev
```

- Aplicación disponible en: `[http://127.0.0.1:5173](http://127.0.0.1:5173)`

## 4. Comprobación rápida

1. Mantén ambos servidores levantados (`8000` y `5173`).
2. Abre `[http://127.0.0.1:5173](http://127.0.0.1:5173)` en el navegador y verifica que consulta `/api/health` correctamente.
