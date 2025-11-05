from fastapi import FastAPI # make sure to install fastapi
from fastapi.middleware.cors import CORSMiddleware
from gemini_api import get_gemini_response

app = FastAPI(
    title="WebJam 2025 API",
    description="Backend API for WebJam 2025 application",
    version="1.0.0"
)

# configure CORS to allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # connect to react dev server :)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root(): # where the fastAPI runs from (root)
    """Root endpoint - welcome message test"""
    return {
        "message": "Welcome to WebJam 2025 API",
        "status": "running",
        "docs": "/docs"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint to check if the server is running and working properly -dz"""
    return {"status": "healthy"}

