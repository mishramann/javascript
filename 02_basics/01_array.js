//array
const myArr = [0,1,2,3,4,5,6]
// console.log(myArr); // [0,1,2,3,4,5,6]


const myHeroes = ["shaktimaan","nagraaj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
  


// Array Method
// myArr.push(7);     
// // // console.log(myArr) //[]
// myArr.push(5);    
// // console.log(myArr)//[]
// myArr.pop();      
// // console.log(myArr) //[]
// myArr.shift(8);
// // console.log(myArr) // []
// myArr.shift(2);
// // console.log(myArr) // [2,3,4,5,6,7]
// myArr.unshift();
// // console.log(myArr) // [2,3,4,5,6,7]


// console.log(myArr.includes(5)) //5
// console.log(myArr.indexOf(3)); 


// const newArr = myArr. join()  // to convert Array to String
// console.log(newArr)
// // console.log(typeof newArr)  //string


//slice , splice


console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)


console.log("b",myArr)   



const myn2 = myArr.splice(1,3)
console.log("c",myArr)   
console.log(myn2)       

// A [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// [ 1, 2 ]
// b [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// c [ 0, 4, 5, 6 ]
// [ 1, 2, 3 ]  // split from original arr






