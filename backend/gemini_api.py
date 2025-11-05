from google import genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key= os.getenv("GEMINI_API_KEY")
GEMINI_API_KEY = api_key

# testing for blah blah 
# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key=GEMINI_API_KEY)

def create_prompt():
    pass

def get_gemini_response(prompt: str) -> str:
    response = client.models.generate_content(
        model="gemini-2.5-flash", contents=prompt
    )
    return response.text

def main():
    print(get_gemini_response("Explain the theory of relativity in simple terms."))

if __name__ == "__main__":
    main()