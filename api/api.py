from flask import Flask
import pymongo
from bson.json_util import dumps
app = Flask(__name__)
app.debug = True
client = pymongo.MongoClient(
        "mongodb+srv://ProjectDB:Project2020@cluster0.mnrih.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
prod=client.Scraping_Project.Products
@ app.route('/product')
def get_current_time():
    output = prod.aggregate([
    {
        '$search': {
            'text': {
                'query': 'ecran', 
                'path': 'titre'
            }
        }
    }
])
    return dumps(output)
  
if __name__ == "__main__":
    app.run(debug=True)


    
