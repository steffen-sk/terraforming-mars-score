from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    scores = [item['score'] for item in data]
    average_score = sum(scores) / len(scores)
    return jsonify({'average_score': average_score})

if __name__ == '__main__':
    app.run(debug=True)
