   function sayMyName (){
console.log("H");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
console.log("I");
   }
   // sayMyName()


   // function addTwoNumber (number1,number2){    //parameter
   //       console.log(number1+number2);
   // }

   //    addTwoNumber( 3,6)    /// Argument     /// function me jo hm paas karte h use kehte h parameter and jo hm function ko call karte h use kehte h argument

      // const result = addTwoNumber(3,5)
      // console.log("Result": " , result);   // Result: undefined  /// we not store result in this format

   function addTwoNumber (number1,number2){    //parameter
      //   let result = number1 +number2
      //   return result
      return number1 + number2
   }

    const result = addTwoNumber( 3,6)
   //  console.log("Result:" , result);    // result : 9

   function loginUserMessage(username){
      if(!username){
         // console.log("please enter the user name");
         return
      }
      return `${username} just logged in `
   }


   // console.log(loginUserMessage("Piyush")) //Piyush just logged in 
   // console.log(loginUserMessage())   // undefined

// #  function calculateCartPrice (num1){    //Rest operator or spread operator  //Array build
 
//    return num1
//  }
// console.log(calculateCartPrice(200,400,500)); //200  


// # function calculateCartPrice (...num1){   //Rest operator  
 
//    return num1
//  }
// console.log(calculateCartPrice(200,400,500)); //[200,400,500]


//# function calculateCartPrice ( val1 ,val2 , ...num1){   
 
//    return num1
//  }
// console.log(calculateCartPrice(200,400,500,2000)); //[500,2000]


// how to pass an Object inside the function
const user = {
   username: "Piyush",
   price:999
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);  
}
//   handleObject(user)
handleObject({
   username: "Piyush",
   price: 999
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); //400
// console.log(returnSecondValue([200,400,100,600]));



