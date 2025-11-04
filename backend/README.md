# Backend API

FastAPI backend server for the WebJam 2025 application.

## Setup

### 1. Create a virtual environment

```bash
python -m venv venv
```

### 2. Activate the virtual environment

**On macOS/Linux:**
```bash
source venv/bin/activate
```

**On Windows:**
```bash
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

## Running the Server

Start the development server with auto-reload:

```bash
uvicorn main:app --reload
```

The API will be available at:
- **API**: http://localhost:8000

Cool docs to check out along with the API:
- **Interactive API docs (Swagger)**: http://localhost:8000/docs
- **Alternative API docs (ReDoc)**: http://localhost:8000/redoc

## Available Endpoints

- `GET /` - Welcome message and API info, root
- `GET /health` - Health check endpoint

