from flask import Blueprint, request, jsonify
from src.services.scoring_engine import calculate_cyber_score
from src.services.llm_service import generate_explanation

api_bp = Blueprint('api', __name__)

@api_bp.route('/analyze', methods=['POST'])
def analyze():
    try:
        answers = request.json
        
        # 1. Calcul du score
        score_result = calculate_cyber_score(answers)
        
        # 2. Explication LLM
        explanation = generate_explanation(score_result, answers)
        
        return jsonify({
            "score": score_result["totalRiskScore"],
            "details": score_result["breakdown"],
            "explanation": explanation
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
