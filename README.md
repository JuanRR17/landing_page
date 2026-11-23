# Plantilla FastAPI + React (Vite) + SQL + JWT

Estructura base con backend en Python (**FastAPI**, **SQLAlchemy** con SQLite/PostgreSQL y autenticación **JWT**) y frontend en **React + Vite**, conectados en local.

## Estructura del proyecto

### Backend (`backend/`)

```text
backend/
├── .env                    # Variables de entorno locales (no se sube a Git)
├── .env.example            # Plantilla de variables de entorno de referencia
├── app.db                  # Base de datos SQLite local (se genera al arrancar)
├── requirements.txt        # Dependencias de Python del entorno virtual
└── app/
    ├── __init__.py         # Marca el directorio como paquete de Python
    ├── config.py           # Lectura de variables de entorno (DATABASE_URL, JWT, etc.)
    ├── database.py         # Motor SQLAlchemy, sesión por petición y Base declarativa
    ├── models.py           # Modelos/tablas SQL (por ejemplo, User)
    ├── schemas.py          # Esquemas Pydantic para validar entradas y salidas JSON
    ├── security.py         # Hashing de contraseñas y creación/validación de tokens JWT
    └── main.py             # Instancia FastAPI, CORS, dependencias y endpoints
```

### Frontend (`frontend/`)
```text
├── .env.example            # Ejemplo de variables de entorno del frontend (ej. VITE_API_URL)
├── index.html              # Documento HTML raíz donde se monta la aplicación React
├── package.json            # Dependencias npm (incluye React, Vite y Bootstrap) y scripts
├── vite.config.js          # Configuración de Vite (puerto, plugins, proxy si aplica)
└── src/
    ├── main.jsx            # Punto de entrada de React; importa Bootstrap CSS/JS y monta <App />
    ├── App.jsx             # Componente principal y flujo base de conexión/autenticación
    ├── index.css           # Estilos globales complementarios a Bootstrap
    ├── services/           # Llamadas HTTP a la API (health, login, registro, /me, recursos)
    └── components/         # Componentes reutilizables de interfaz con clases de Bootstrap
```
## 1. Clonar el nuevo proyecto

```bash
git clone git@github.com:JuanRR17/NOMBRE_DEL_NUEVO_PROYECTO.git  # Clona el nuevo repositorio por SSH desde GitHub
cd NOMBRE_DEL_NUEVO_PROYECTO                                   # Entra en la carpeta raíz del proyecto
```

## 2. Inicializar y arrancar el Backend (FastAPI)

```bash
cd backend                                                      # Entra en la carpeta del backend
python3 -m venv .venv                                           # Crea un entorno virtual Python aislado en .venv
source .venv/bin/activate                                       # Activa el entorno virtual en la terminal actual
pip install -r requirements.txt                                 # Instala todas las dependencias de Python indicadas
cp .env.example .env                                            # Crea el archivo .env local a partir de la plantilla
uvicorn app.main:app --reload                                   # Arranca el servidor FastAPI con recarga automática al editar
```

- API disponible en: `[http://127.0.0.1:8000](http://127.0.0.1:8000)`
- Comprobación de salud: `[http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)`
- Documentación interactiva (Swagger UI): `[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)`
- Endpoints de autenticación: `/api/auth/register`, `/api/auth/login` y `/api/auth/me`

## 3. Inicializar y arrancar el Frontend (React + Vite)

En otra terminal desde la carpeta `frontend`:

```bash
cd frontend                                                     # Entra en la carpeta del frontend
npm install                                                     # Instala las dependencias de Node/React/Bootstrap definidas en package.json
npm run dev                                                     # Arranca el servidor de desarrollo de Vite en local
```

- Aplicación disponible en: `[http://127.0.0.1:5173](http://127.0.0.1:5173)`

## 4. Comprobación rápida

1. Mantén levantados tanto el backend (`8000`) como el frontend (`5173`).
2. Abre `[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)` para probar registro, login y `/api/auth/me`, y abre `[http://127.0.0.1:5173](http://127.0.0.1:5173)` para verificar la interfaz en el navegador.
