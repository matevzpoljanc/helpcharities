const mongo = require("../data/mongo.js")
const random = require("random-js")(); // uses the nativeMath engine

var ratio = 0.3;

exports.get20Matches = function (category,location) {
	return mongo.getCharitiesFromPC(location).then(charities => {
		var top20Matches = [];
		//add top 20-ratio*20 charities

		charities = charities['charities']
		console.log(charities);
		 
		for(var i=0;i<20;i++){
			top20Matches.push(charities[i]);
		} 
/*
		//randomly add some charities
		var selected_values = [];
		for(var i=0; i<parseInt(ratio*20);i++){
			var value = random.integer(20-parseInt(ratio*20),charities.length);
			while(selected_values.indexOf(value)==-1){
				value = random.integer(20-parseInt(ratio*20),charities.length);
			}
			value.push(value);
			selected_charity = charities[value];
			top20Matches.splice(random.integer(5,top20Matches.length),0,selected_charity);	
		}
		*/
		console.log("top20",top20Matches);
		return top20Matches; 	
	});
}