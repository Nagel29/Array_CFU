var dogs = ["Lou", "Kya", "Jordi", "Misha"]
var ages = [10, 2, 3, 4]
var myDog = [true, true, false, false]

//This will add the 2 elements at the end of the dogs array
dogs.push("Toby", "Penny")

//This will remove the "4" element at the end of the ages array
ages.pop()

//This will remove the first element ("true") in the myDog array
myDog.shift()

//Slice references the index positions within an array. The below code will return Lou, Kya, and Jordi because Lou is in the 0 index position, and Misha is in the 3 index position, but the end position is not returned with slice.
console.log(dogs.slice(0,3))
