from google import genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key= os.getenv("GEMINI_API_KEY")
GEMINI_API_KEY = api_key


# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key=GEMINI_API_KEY)

response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Explain how AI works in a few words"
)
print(response.text)