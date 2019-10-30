from flask import Flask,request,jsonify
from main import main
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/createquestions', methods=['POST'])

def create_questions():
    print(request)
    print(main(request.json["phrase"]))
    return "%".join(main(request.json["phrase"]))

if __name__ == '__main__':
    app.run()