/* Joshua Whitney
Scalable Data Infrastructures
1303
Project 3
March 19, 2013
*/



//HEROES OBJECT
var myhero = {
	
	"name"		:"NONE",
	"age"		:00,
	"weapon"	:"NONE",
	"vehicle"	:"NONE",
	"health"	:00,
	"hitPoints" :function(number) { //Accessor Method
		var number = myhero.health
		return number;
				
	},//end Accessor Method
	"newHero"	:function(name, age, weapon, vehicle) { //Processor Method
		myhero.name = name;
		myhero.age = age;
		myhero.weapon = weapon;
		myhero.vehicle = vehicle;
	}//end Mutator Method

	
};
myhero.newHero("Josh", 28, "Rifle", "Hummer");
console.log(myhero.hitPoints());
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

var zombieIntro = function() {
	for(var i = 0; i < zombie.zombies.length; i++) {
		var friend = zombie.zombies[i];
			console.log('My name is ' + friend.name + ' , I am ' + friend.age + ' years old.' + ' I use a ' + 
						friend.weapon + ' for a weapon.');
	};
};
zombieIntro();