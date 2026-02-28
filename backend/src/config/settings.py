import os
from dotenv import load_dotenv

load_dotenv()

# Configuration OpenAI
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "sk-placeholder")
PORT = int(os.getenv("PORT", 3000))
DEBUG = os.getenv("FLASK_ENV") == "development"
