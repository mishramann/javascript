const coding = ["js", "ruby" , "java", "python", "cpp"]
// coding.forEach( function (item) {
//   console.log(item);
// }) // high order loop
// coding.forEach((item) => {
//  console.log(item);
// }) // arrow function
function printme(item){
  console.log(item);
}
// coding.forEach(printme)
// js
// ruby
// java
// python
// cpp
coding.forEach((item, index, arr) => {
console.log(item, index, arr);
})