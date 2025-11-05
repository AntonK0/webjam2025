from fastapi import FastAPI, UploadFile, File # make sure to install fastapi
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel, Field #TODO add to requirements.txt later if used
from typing import Optional
from gemini_api import test_gemini_connection

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

class UserInput(BaseModel):
    """Model for user input data"""
    pass

class ShampooInput(UserInput):
    """Model for hair input data extending UserInput"""
    hair_type: str = Field(..., example="blonde")
    hair_type_specifics: Optional[list[str]] = Field(None, description="Specifics about hair type. [Straight, Curly, Wavy, Coily]")
    hair_oiliness: Optional[list[str]] = Field(None, description="The oiliness level of the hair. [Dry, Normal, Oily]")
    hair_condition: Optional[list[str]] = Field(None, description="The hair condition. [Frizz, Itchy, Dandruff, Split-ends, Hair Loss]")
    allergies: Optional[str] = Field(None, description="Any known allergies that may be used in shampoo products.")
    additional_info: Optional[str] = Field(None, description="Any additional information the user wants to provide.")

class ConditionerInput(UserInput):
    """Model for skin condition input data extending UserInput"""
    skin_type: str = Field(..., example="oily")

class ToothpasteInput(UserInput):
    """Model for oral care input data extending UserInput"""
    dental_issues: str = Field(..., example="sensitive teeth")  

class SkinCareInput(UserInput):
    """Model for skin care input data extending UserInput"""
    skin_concerns: str = Field(..., example="dryness")

#response models can be added later as needed TODO change later
class ProductRecommendationResponse(BaseModel):
    """Model for product recommendation response"""
    product_name: str = Field(..., example="Hydrating Shampoo")
    product_description: str = Field(..., example="A shampoo that hydrates dry hair.")
    recommended_usage: str = Field(..., example="Use daily for best results.")


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

@app.post("/generate-shampoo-response")
async def generate_shampoo_response(
    shampoo_input: ShampooInput,
    image: UploadFile = File(...)
):
    return test_gemini_connection()
