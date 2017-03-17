const util = require('util');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

var db;

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