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
// const obj3 = Object.assign({},obj1,obj2)   // for concatenation
const obj3 = {...obj1,...obj2}
  // console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 

  const users = [
    
     { 
      id:1,
      email:"p@gmail.com",
    },
    { 
      id:1,
      email:"p@gmail.com",
    },
    { 
      id:1,
      email:"p@gmail.com",
    },


  ]
  users[1].email
  // console.log(tinderUser); //{ name: 'Sammy', id: '123abc', isLoggedIn: false }
  // console.log(Object.keys(tinderUser)); //[ 'name', 'id', 'isLoggedIn' ]
  // console.log(Object.values(tinderUser)); //[ 'Sammy', '123abc', false ]
  // console.log(Object.entries(tinderUser)); // [ [ 'name', 'Sammy' ], [ 'id', '123abc' ], [ 'isLoggedIn'
  // // false ] ]
  // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename : "js in Sanskrit",
  price:"999",
  courseInstructor: "Piyush"
}
  // course.courseInstructorconst 
   const {courseInstructor : Instructor} = course
   console.log(Instructor);


  //  const navbaar = ({company}) => {

  //  }
  //  navbaar(company = "piyush")  //to represent props in js  //destructure the Object

  // jab bhi apna kaam kisi ke sar pe daal dhete h use API kehte h

  // {
  //   "naame":"piyush",
  //   "coursename" : "js in hindi",
  //   "price":"free"
  // }     // api kuch ni hota backened se kuch value aati h pehle ke time pe xml ke format me aati thhi jo bahut kathin hota thha samajhne me ab json ke format me aati h 
  // json ko bnane ke liye key or value dhono string ke format me aati h
//   {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }


