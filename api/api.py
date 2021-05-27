from flask import Flask,request
import pymongo
from flask_cors import CORS
from bson.json_util import dumps
import os
app = Flask(__name__, static_folder='../build', static_url_path='/')
app.debug = True
CORS(app)
client = pymongo.MongoClient(
        "mongodb+srv://ProjectDB:Project2020@cluster0.mnrih.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
prod=client.Scraping_Project.Products
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
@app.route('/')
def index():
    return app.send_static_file('index.html')
@ app.route('/api/product',methods = ['POST'])
def get_current_time():
    query=request.json
    output = prod.aggregate([
    {
        '$search': {
            'text': {
                'query': f"{query}", 
                'path': 'titre',
            }
        }
    },
    
{ '$sort': { 'score': { '$meta': "textScore" } } }
])
    return dumps(output)
  
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


    
