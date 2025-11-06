from google import genai
import os
from dotenv import load_dotenv
import json

# TESTING AGAIN
load_dotenv()
api_key= os.getenv("GEMINI_API_KEY")
GEMINI_API_KEY = api_key

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key=GEMINI_API_KEY)

# assembles the json prompt to SEND to Gemini for context
def _create_json_prompt(user_profile: dict):
    with open("./gemini_prompt.json", "r") as f:
        template = json.load(f)
    
    prompt_structure = template["prompt_structure"]
    ai_instruction = prompt_structure["system_instruction"]
    system_text = f"{ai_instruction['role']} {' '.join(ai_instruction['instructions'])}"

    user_prompt = prompt_structure["user_prompt_template"]
    task_instructions = user_prompt["task_instructions"]

    profile_string = json.dumps(user_profile, indent=2)

    text_prompt = (
        f"{system_text}\n\n"
        f"{user_prompt['introduction']}\n\n" # ai context
        f"--- My Profile ---\n{profile_string}\n\n" # from FastAPI??
        f"--- Instructions ---\n"
        f"{task_instructions['call_to_action']}\n" 
        f"{task_instructions['output_format_instructions']}" # prompt structure -> JSON
    )
    output_schema = task_instructions["output_schema"]
    generation_config = {
        "response_mime_type": "text/plain",
        "response_schema": output_schema,
        "tools": [{"google_search": {}}]
    }
    return text_prompt, generation_config

def get_gemini_response(user_profile: dict) -> str:
    try:
        text_prompt, generation_config = _create_json_prompt(user_profile)
        response = client.models.generate_content(
            model="gemini-2.5-flash", contents=[text_prompt, image], config=generation_config)
        return response.text
    except Exception as e:
        print(f"Gemini API failed: {e}")
        raise

def main():
    # prompt will go here from main?
    userProfile = {
        "hair": {
            "type": "Curly",
            "oiliness": "Dry",
            "density": "Coarse",
            "conditions": "Frizz",
            "allergens": "Red-40",
            "other_notes": "" # "Recently colored, prone to breakage"
        }
    }
    print(get_gemini_response(userProfile))

def test_gemini_connection():
    response = client.models.generate_content(
            model="gemini-2.5-flash", contents="Explain the theory of relativity in simple terms."
        )
    return response.text

if __name__ == "__main__":
    main()
