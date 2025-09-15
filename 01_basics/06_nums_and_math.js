const score = 400;
// console.log(score);



const balance = new Number(100)
// console.log(balance);  //100
// console.log(balance.toString());  //100
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(5)) //100.00000


const otherNumber = 23.8697;
// console.log(otherNumber.toPrecision(4)); // 23.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'))  //10,00,000



//++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++++++++
// it is by default library in javascript


console.log(Math)
console.log(Math.abs(-4));    //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2));  // it gives the highest value //5
console.log(Math.floor(4.9)); //4
console.log(Math.max(3,5,9,7));
console.log(Math.random());
console.log(Math.random()*10 + 1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.floor(Math.random()* (max - min + 1)) + min)

