// Primitive

// 7 types : String , Number , BigInt , Boolean , Symbol , null , undefined  \\


/* Javascript is statical type or dynamical type ??   */


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
const bigInt = 345678876543445669231n

// Reference Type (Non Primitive Datatype) 

// Array, Object, Functions
const heros = ["shaktimaan" , "nagraaj" , "doga"]
let myObj = {
    name : "Piyush",
    age : 22,
}
const myFunction = function(){
console.log("hello World");
}