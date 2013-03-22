/* Joshua Whitney
Scalable Data Infrastructures
1303
Project 3
March 19, 2013
*/


//Global Variabels
var hitDamage = 5;
var yourStrike = Math.floor(Math.random() * 2);
var totalDamage = 0;
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var combat = true;
//End Global Variables

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

//Start Hero OBJECT
var myhero = {
	
			"name"		:"NONE",
			"age"		:00,
			"weapon"	:"NONE",
			"vehicle"	:"NONE",
			"health"	:5,

	"hitPoints" :function(number) { //Accessor Method
		var number = myhero.health;
		return number;
				
	},//end Accessor Method

	"newHero"	:function(name, age, weapon, vehicle) { //Process Method
		myhero.name = name;
		myhero.age = age;
		myhero.weapon = weapon;
		myhero.vehicle = vehicle;
		
	},//end Process Method
	
	"checkAge"	:function() { // Function Method
		if (myhero.age >= 18) {
			console.log("You are old enough to fight the zombies!");
		} else {
			console.log("You are to young to fight zombies!");
		}
	},//end function Method
	
	"newHealth"	:function() { // Mutator Method	
		myhero.health = myhero.hitPoints() * 10;
		
	},//end Mutator Process

} //end Hero Object

//Start Script
myhero.newHero("Josh",32,"axe","tank");
console.log("You are a hero named " + myhero.name + ". You are " + myhero.age + ". You use a " 
			+ myhero.weapon + " to fight off zombies while riding around in your " + myhero.vehicle + "!");

console.log("There are four zombies that you must defeat before the destroy your town!");			
			
			var zombieIntro = function() {
				for(var i = 0; i < zombie.zombies.length; i++) {
					var creature = zombie.zombies[i];
					console.log(creature.name + ', and he is ' + creature.temper + "."); 
				};
			};
zombieIntro();

console.log("First we need to check if you are old enough to fight off zombies.");
myhero.checkAge();

console.log("Next we have to make sure that your health is up too par.");
console.log("You currently have " + myhero.hitPoints() + " hit points!");

			






