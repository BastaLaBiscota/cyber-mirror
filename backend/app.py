from flask import Flask
from flask_cors import CORS
from src.routes.api import api_bp
from src.config.settings import PORT, DEBUG

app = Flask(__name__)
CORS(app)

# Enregistrement des routes
app.register_blueprint(api_bp, url_prefix='/api')

@app.route('/')
def index():
    return "Cyber Mirror Backend (Flask) is running"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT, debug=DEBUG)
