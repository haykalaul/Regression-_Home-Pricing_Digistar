from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import json

app = Flask(__name__)

# Load model
model = joblib.load("house_price_model.pkl")
columns = joblib.load("feature_columns.pkl")

# Neighborhood mapping
NEIGHBORHOOD_MAPPING = {
    "Blmngtn": 0, "Blueste": 1, "BrDale": 2, "BrkSide": 3, "ClearCr": 4,
    "CollgCr": 5, "Crawfor": 6, "Edwards": 7, "Gilbert": 8, "IDOTRR": 9,
    "MeadowV": 10, "Mitchel": 11, "NAmes": 12, "NPkVill": 13, "NWAmes": 14,
    "NoRidge": 15, "NridgHt": 16, "OldTown": 17, "SWISU": 18, "Sawyer": 19,
    "SawyerW": 20, "Somerst": 21, "StoneBr": 22, "Timber": 23, "Veenker": 24
}

@app.route('/')
def index():
    neighborhoods = sorted(list(NEIGHBORHOOD_MAPPING.keys()))
    return render_template('index.html', neighborhoods=neighborhoods)

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        inputs = {
            "GrLivArea": float(data.get('GrLivArea', 0)),
            "LotArea": float(data.get('LotArea', 0)),
            "TotalBsmtSF": float(data.get('TotalBsmtSF', 0)),
            "BedroomAbvGr": float(data.get('BedroomAbvGr', 0)),
            "FullBath": float(data.get('FullBath', 0)),
            "TotRmsAbvGrd": float(data.get('TotRmsAbvGrd', 0)),
            "OverallQual": float(data.get('OverallQual', 5)),
            "OverallCond": float(data.get('OverallCond', 5)),
            "KitchenQual": float(data.get('KitchenQual', 3)),
            "GarageCars": float(data.get('GarageCars', 0)),
            "GarageArea": float(data.get('GarageArea', 0)),
            "Neighborhood": NEIGHBORHOOD_MAPPING.get(data.get('Neighborhood', 'NAmes'), 12)
        }
        
        df = pd.DataFrame([inputs])
        prediction = model.predict(df)[0]
        
        return jsonify({
            'success': True,
            'prediction': round(float(prediction), 2),
            'formatted': f"${prediction:,.2f}"
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)