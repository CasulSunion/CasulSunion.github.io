var animal = {};

animal.species = "doggo";

animal["name"] = "bork";

animal.noises = [];

animal.noises[animal.noises.length] = "bark";

var noises = [];

noises[0] = "warf";

noises.push("bork");

noises.unshift("wrurf");

noises[noises.length] = "howl";

noises[noises.length] = animal.noise;

animal ["noises"] = noises;

animal.noises.push("bark");

//console.log(animal);
//console.log(noises[noises.length - 1]);
//console.log(noises);
//console.log(animal.noises);


var animals = [];

animals.push(animal);

var duck = {
    species: "duck",
    name: "Scrooge Mcduck",
    noises: ["quack", "Quack", "QUACK"]
};
animals.push(duck);
//console.log(animals);

var cat = {
  species: "cat",
  name :"Ringo",
  noises: ["meow", "chirp"]
};
animals.push(cat);
// order unimportant

var friends = [];
console.log(getFriends(animals));

function getFriends(animals){
    return animals[Math.floor(Math.random()*animals.length)];
}
friends.push(getFriends(animals).name);
console.log(friends);

cat["friends"] = friends;

console.log(cat);


function search(nameAnimal){
  for(var i = 0; i < animals.length; i++){
    if(animals[i].name === nameAnimal){
      return animals[i];
    }
  }
}
function edit(animalName, animalObject){
  for(var i = 0; i < animals.length; i++){
    if(animals[i].name === animalName){
      return animals[i] = animalObject;
    }
  }
}
function remove(animalName){
  for(var i = 0; i < animals.length; i++){
   if(animals[i].name === animalName){
     animals.splice(i,1);
   }
  }
}
function create(animalObject){
  for(var i = 0; i < animals.length; i++){
    if(animalObject.name.length > 0 && animalObject.species.length > 0 && animalObject.name !== animals[i].name){
    }
  } animals.push(animalObject);
}













