from pymongo import MongoClient
import json

client = MongoClient('mongodb://470533da-ec88-448b-b617-f7cdf56bb846:a4506660-7286-48c2-bc1b-2cd4492b45b8@23.246.199.73:10178/db')
db=client['db']

with open("listings.json","r") as r:
	data = json.load(r)


insert_id=db['attactions'].insert_one(data).inserted_id
#~ print insert_id



triphello.mybluemix.net/addAttraction
