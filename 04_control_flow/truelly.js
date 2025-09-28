//  const userEmail = piyusm9306;
// if(useEmail){
//   console.log("GOt user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values
// false , 0 , -0, 0n, null, undefined, NaN

//truthy value

// "0", 'false',"" , [], {}, function(){}

// if(userEmail.length === 0){
//   console.log("Array is empty");
// } // checked the array

const emptyObj = {}
if(Object.keys(emptyObj).length  === 0){
  console.log("Object is empty");
} // Object is empty

// false == 0 ; true;
// false == '' ;  true;
// 0 == '' ; true;
 
// Nullish Coalescing Operator(??) : null undefined
  let val1 ;
  val1 = 5 ?? 10
  val1 = null ?? 10
  val1 = undefined ?? 15
  val1 = null ?? 10 ?? 20
 console.log(val1);

 //terniary Operator
 let n = 10;
// if  (n == 0) ? console.log("Hello") :console.log();
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");