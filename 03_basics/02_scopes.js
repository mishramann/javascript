// let a = 10
// const b = 20
// var c = 300     -> this is global scope which is in outside the class
// { }            -> Scope
if(true){
  let a = 10
  const b = 20
  var c = 30    
}            // curly braces ia always scope   -> inside the function whatever we declare it's called local scope  and declare outside the function is called global scope
// console.log(a)
// console.log(b)
// console.log(c)   //its not print the global value of global variable
 
  // block next global scope ?

function one (){
  const username = "Piyush"

  function two(){
    const website = "youtube"
    console.log(username);  //-> inside ka function bahar ke variable ko access kar pata h -> isiko hm closure bhi kehte h
  }
  //  console.log(website);  // code yaha pr line by line execute hota h to yahi error dhe dhiya aage chala hi ni
  // why we can't access this outside the function

  two()
}
// one()

if(true){
  const username = "Piyush Mishra"
  if(username === "Piyush Mishra"){
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);   // why conditional statement not execute outside the function ? is function only access within the scope
}
// console.log(username);


//                         +++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++


function addOne(num){
  return num +1
}
//  console.log(addOne(5))

const addTwo = function(num){
  return num +2
}     
addTwo(6) // hoisting -> function kese store hota h kaha use rakha jaata h kese use execute kara jaata h kese variable ko javascript treat karti h