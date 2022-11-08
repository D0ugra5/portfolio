from flask import Flask, jsonify, Response, request
import pymongo

from bson.objectid import ObjectId
from bson import json_util
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Replace the uri string with your MongoDB deployment's connection string.
conn_str = "mongodb+srv://d0ugra5:doug123456@cluster0.4gm4jzd.mongodb.net/?retryWrites=true&w=majority"
# set a 5-second connection timeout
client = pymongo.MongoClient(conn_str)
dbname = client['cluster0']
collection_name = dbname["testColletion"]
client.get


def procuraLivros():
    complaits = []
    resp = dbname.testColletion.find()

    for item in resp:
        complaits.append(item)

    return complaits


@app.route('/complaits', methods=['GET'])
@cross_origin()
def obter_livros():

    print(procuraLivros())
    return json.dumps(procuraLivros(), indent=4, default=json_util.default)


@app.route('/complaits/<int:id>', methods=['GET'])
@cross_origin()
def obter_livro(id):
    for complait in procuraLivros():
        if complait['id'] == id:
            return json.dumps(complait, indent=4, default=json_util.default)
    return jsonify({'erro': 'complait não encontrado'})


@app.route('/complaits', methods=['POST'])
@cross_origin()
def save_complaint():

    dbname.testColletion.insert_one({
        "title": request.json["title"],
        "desc": request.json["desc"]
    })

    return Response("", status=201, mimetype='application/json')


@app.route('/complaits/<string:id>', methods=['PUT'])
@cross_origin()
def update_complaint(id):
    dbname.testColletion.update_one(
        {"_id": ObjectId(id)}, {"$set": {
            "title": request.json['title'],
            "desc": request.json['desc']
        }})
    return jsonify({'sucess': 'complait atualizado'})


@app.route('/complaits/<string:id>', methods=['DELETE'])
@cross_origin()
def delete_complaint(id):
    print(id)
    for complait in procuraLivros():
        if complait['title'] == id:
            dbname.testColletion.delete_one(complait)
            return Response("", status=204, mimetype='application/json')
    return jsonify({'erro': 'complait não encontrado'})


app.run(port=5000, host='localhost', debug=True)
