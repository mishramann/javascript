// let myDate = new Date()
// console.log(myDate.toString()) //Mon sep 15 2025 14:43:15 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Mon Sep 15 2025
// console.log(myDate.toLocaleDateString()) //9/15/2025
// console.log(myDate.toLocaleString())  //9/15/2025, 2:43:15 PM
// // console.log(typeOf myDate); // Object

// let myCreatedDate = new Date (2023,0,23)
// console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023
// let myCreatedDate = new Date (2023,0,23,7,35)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date ("2023-01-14")
// // console.log(myCreatedDate.toLocaleString())
//  let myTimeStamp = Date.now();
//  console.log(myTimeStamp)
//  console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getDay())
newDate.toLocaleString('default' ,   {
weekDay:"long",
})


