const name = "hitesh";
repoCount = 50

console.log(name + repoCount +"value");
console.log(`Hello my name is ${name}  and my repo count is ${repoCount} `);


const  gameName = new String('piyush-pm-mishra')
console.log(gameName[0]); //p
console.log(gameName.__proto__); //{}
console.log(gameName.length) //6
console.log(gameName.toUpperCase()) //PIYUSH
console.log(gameName.charAt(2)); //y
console.log(gameName.indexOf('h')); //5
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newStringOne = "    Piyush     "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https//piyush.com/piyush%20mishra"
console.log(url.replace('%20' , '-'))

console.log(url.includes('piyush'))
console.log(gameName.split ('-'))