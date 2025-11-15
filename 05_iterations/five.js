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
// // cpp
// coding.forEach((item, index, arr) => {
// console.log(item, index, arr);
// })
const myCoding = [
  {
    languageName : "Javascript",
    languageFileName : "js"
  },
  {
    languageName : "java",
    languageFileName : "java"
  },
  {
     languageName : "python",
    languageFileName : "py"
  },

]
myCoding.forEach((item) => {

console.log(item.languageName);
})

