// Imediate Invoked Function Expression (IIFE)


 (function chai(){
console.log(`DB CONNECTED`);
 })()    ;  
//  global  scope ke variable me dhikkat hoti h kahi baar us dhikkat ko htane ke liye  hmne  iska use kiya

( () => {
   console.log(`DB CONNECTED TWO`);
} )()     
// ((name ) => {
//  console.log(`DB CONNECTED TWO ${name}`);
// }) ('Piyush')
