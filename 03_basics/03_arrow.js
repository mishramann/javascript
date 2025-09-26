const user = {
  username : "Piyush",
  price:999,

  welcomeMessage: function() {
       console.log(`${this.username} ,  welcome to website`);
      //  console.log(this)
  }
    //  Arrow function me this keyword nahi hota h what the reason behind it
}
// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()
//  console.log(this)   // in node envirement this refer to empty string

//  function chai(){ 
//   let username = "piyush"
//   console.log(this.username);
//  }
//  chai()
const chai =  () => {
  let usename = "piyush"
  console.log(this.username);
}
const add1Two = (num1,num2) => {
  return num1 +num2            // explicitor in that we use return keyword
}     // => this is the Arrow function
const addTwo = (num1 , num2 ) => (num1 +num2 )    //   this is implicitor         // we can write also in this format 
// in this what is going there is while wite in curly bracket it neccesary to write return keyword if we write within the paranthesis there no need to use return keyword


console.log(addTwo(3,4));      // javascript ke andher global object kiya h -> Window object

const myArray = [2,5,4,7]
// myArray.forEach(() =>{})