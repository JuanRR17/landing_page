# Plantilla FastAPI + React (Vite)

Estructura base con backend en Python (FastAPI) y frontend en React (Vite), listos y conectados en local.

## 1. Backend (FastAPI)
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
