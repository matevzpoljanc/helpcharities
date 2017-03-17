const util = require('util');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = mongodb.ObjectID;

var db;

var factor_for_income = 1;
var factor_for_rating = 1;

exports.connectDB = function(){
	return new Promise((resolve,reject) => {
		if(db) return resolve(db);

		var url = process.env.MONGO_URL;

		MongoClient.connect(url, (err, _db) => {
			if (err) return reject(err);
			db = _db;
			resolve(_db);
		});
	});
};

exports.getCharitiesFromPC = function(postal_code){
	return exports.connectDB().then(db => {
		return db.collection("charitiesByPC").find_one({"postal_code":postal_code});
	});
}

exports.getCharityByID = function(id){
	return exports.connectDB().then(db => {
		return db.collection("charities").find_one({"_id":new ObjectId(id)});
	});
}

exports.updateUserRating = function(id,value){
	return exports.getCharityByID(id).then(charity => {
		var rating = charity.rating + value;
		var score = rating * factor_for_rating + charity.income * factor_for_income;
		return collection("charities").update({'_id':new ObjectId(id)},{"$set": {"rating": rating}},{"$set": {"score": score}})
		.then(r => {return true;}})
	});
}