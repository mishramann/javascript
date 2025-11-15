// const coding = ["js", "ruby" , "java", "python", "cpp"]

//  const value = coding.forEach ((item) => {
// console.log(item);
// return item
// })
// console.log(value);

 const myNums = [1,2,3,4,5,6,7,8,9,10]
//  const newNums = myNums.filter( (num) => num > 4)
//  console.log(newNums); // when we use curly braces in arrow function it must be returned by returned keyword

 const newNums = []
 myNums.forEach( (nums) => {
  if(nums >4){
    newNums.push(nums)
  }
 })
 console.log(newNums);