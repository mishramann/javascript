// to define a object we have two way one is constructor and another one is loteral
//Singleton

//  Object.create  // -> it implement through constructor this come under Singleton
// object -> and another one way to create an Object is:

//Object Literal
// ek symbol lo use key me daalo or print karke dhikha dho


const mySum = Symbol("key1")

const jsUser = {
   name : "Piyush",
   "full name" : "Piyush",  //now we have no way to access this without sqare notation 
   age : 20,
   [mySum] : "mykey1", // if you want to store as symbol one way you have those are square bracket if we wants to access only you access from square bracket
   location:"Haridwar",
   email: "piyushmishra08oct@gmail.com",
   isLoggedIn : false,
   lastLoginDays : ["Monday", "Saturday"]



} 

// we can acces the object in two ways
// console.log(jsUser.email)
// console.log(jsUser["email"])


// console.log(["full name"])
// console.log( jsUser[mySum])

 jsUser.email = "mishrapiyush7788@gmail.com"
//  Object.freeze(jsUser)
 jsUser.email ="mishrapiyush3409@gmail.com"
 console.log(jsUser)


 jsUser.greeting = function(){
    console.log("Hello JS user");
 }
jsUser.greetingTwo = function(){
   console.log(`Hello JS user, ${this.name}`)
}
console.log(jsUser.greeting()) // Hello JS user
console.log(jsUser.greetingTwo()) // Hello JS user, Piyush
