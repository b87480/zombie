/* Joshua Whitney
Scalable Data Infrastructures
1303
Project 3
March 19, 2013
*/



//HEROES OJECT
var heroes = {
	"hero": [
		{
			"name"		:"Jon",
			"age"		:22,
			"weapon"	:"Shoutgun",
			"vehicle"	:true,
			"hitpoints"	:50
		},
		{
			"name"		:"Mike",
			"age"		:32,
			"weapon"	:"Machette",
			"vehicle"	:true,
			"hitpoints"	:30
		},
		{
			"name"		:"Bob",
			"age"		:27,
			"weapon"	:"Sniper Rifle",
			"vehicle"	:false,
			"hitpoints"	:15
		},
		{
			"name"		:"Lisa",
			"age"		:18,
			"weapon"	:"Pistols",
			"vehicle"	:false,
			"hitpoints"	:25
		}
	]
};
//JSON DATA
var zombie = {
	"zombies": [
		{
			"name"		:"Booger",
			"age"		:32,
			"weapon"	:"Club",
			"vehicle"	:false,
			"temper"	:"calm",
			"energy"	:20
		},
		{
			"name"		:"Crunk",
			"age"		:35,
			"weapon"	:"Laser Cannon",
			"vehicle"	:false,
			"temper"	:"crazy",
			"energy"	:30
		},
		{
			"name"		:"Razor",
			"age"		:55,
			"weapon"	:"Knives",
			"vehicle"	:true,
			"temper"	:"evil",
			"energy"	:45
		},
		{
			"name"		:"Slice",
			"age"		:25,
			"weapon"	:"Pizza Wheel",
			"vehicle"	:true,
			"temper"	:"demented",
			"energy"	:25
		}
	]
};
var heroIntro = function() {
	for(var i = 0; i < heroes.hero.length; i++) {
		var character = heroes.hero[i];
			console.log('My name is ' + character.name + ' , I am ' + character.age + ' years old.' + ' I use a ' + 
						character.weapon + ' for a weapon.');
	};
};
var zombieIntro = function() {
	for(var i = 0; i < zombie.zombies.length; i++) {
		var friend = zombie.zombies[i];
			console.log('My name is ' + friend.name + ' , I am ' + friend.age + ' years old.' + ' I use a ' + 
						friend.weapon + ' for a weapon.');
	};
};
heroIntro();
zombieIntro();