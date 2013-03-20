/* Joshua Whitney
Scalable Data Infrastructures
1303
Project 3
March 19, 2013
*/




//JSON DATA
var zombie = {
	"zombies": [
		{
			"name":"Jon",
			"age":32,
			"weapon":"Rifle",
			"vehicle":"hummer",
			"temper":"calm"
		},
		{
			"name":"Mike",
			"age":35,
			"weapon":"Bazooka",
			"vehicle":"Go-Cart",
			"temper":"crazy"
		},
		{
			"name":"Steve",
			"age":55,
			"weapon":"Knife",
			"vehicle":"Motorcycle",
			"temper":"evil"
		},
		{
			"name":"Lisa",
			"age":25,
			"weapon":"Baseball Bat",
			"vehicle":"Tri-cycle",
			"temper":"demented"
		}
	]
};

var newFunk = function() {
	for(var i = 0; i < zombie.zombies.length; i++) {
		var friend = zombie.zombies[i];
		console.log('name: ' + friend.name + ', temper: ' + friend.temper + "."); 
	};
};
newFunk();