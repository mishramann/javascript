// const tinderUser = new Object() //{}   // only remember is it is singleTon object and another is Non singleton Object
const tinderUser = {}   // not a singleton object
tinderUser.name = "Sammy"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
// console.log(tinderUser) //{ name: 'Sammy', id: '123abc', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
    userfullname:{
        firstname : "Piyush",
        latname : "Mishra"
    }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); //Piyush
  const obj1 = {1:"a", 2: "b"}
  const obj2 = {3: "a" , 4: "b"}
//   const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
  console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }