from flask import Flask,request
import pymongo
from flask_cors import CORS
from bson.json_util import dumps
app = Flask(__name__)
app.debug = True
CORS(app)
client = pymongo.MongoClient(
        "mongodb+srv://ProjectDB:Project2020@cluster0.mnrih.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
prod=client.Scraping_Project.Products
@ app.route('/product',methods = ['POST'])
def get_current_time():
    query=request.json
    output = prod.aggregate([
    {
        '$search': {
            'text': {
                'query': f"{query}", 
                'path': 'titre'
            }
        }
    }
])
    return dumps(output)
  
if __name__ == "__main__":
    app.run(debug=True)


    
