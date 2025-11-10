// for of

// ["" , "" , ""]
//[{} , {} , {}]
const arr = [1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
} // 1,2,3,4,5
const greetings = "Hello world!"
for(const greet of greetings){
  // console.log(`Each char is ${greet}`);
}
 
// Maps

const map = new Map()
map.set('USA' , "United States of America")
map.set('IN' , "India")
map.set('Fr' , "France")
map.set('IN' , "India")
console.log(map);
// Map(3) {
//   'USA' => 'United States of America',
//   'IN' => 'India',
//   'Fr' => 'France'
// }
for (const key of map) {
  console.log(key);
}
// [ 'USA', 'United States of America' ]
// [ 'IN', 'India' ]
// [ 'Fr', 'France' ]
for (const [key, value] of map) {
  // console.log(key, ':-', value);
}
const myObject = {
  'game1' : 'NFS',
  'game2' : 'spiderman'
}
// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// } this is not working