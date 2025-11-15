
// Reduce function
const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (acc,  currVal){
//   console.log(`acc : ${acc} and curVal: ${currVal}`);
// return acc + currVal
//  },0)
 // 6
const myTotal = myNums.reduce((acc, currVal) => acc+ currVal,0)
  // console.log(`acc : ${acc} and curVal: ${currVal}`);
  console.log(myTotal);



  const shoppingCart = [
    {
      itemName : "js course",
      price : 299
    },
    {
      itemName : "python",
      price : 999,
    },
    {
      itemName : "App Development course",
      price : 4500
    },
    {
      itemName : "DataScience course",
      price : 4999
    },
    {

      itemName : "Web Development course",
      price : 2999
    } // work is to add price of all items what he have to purchase

  ]
   
   const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
   console.log(priceToPay);