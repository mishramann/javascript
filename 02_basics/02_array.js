const marvel_heroes = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman","flash", "batman"]
// marvel_heroes.push(dc_heros)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])  //flash
// const all_Heroes  = marvel_heroes.concat(dc_heros)
// console.log( all_Heroes)  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// note:- its not the good way to merge the two array in behalf of this we use spread method

// spread operator
// const all_new_heroes = [...marvel_heroes,...dc_heros]
// console.log(all_new_heroes)  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
// const another_real_array = another_array.flat(Infinity)
// console.log(another_real_array)   //if we have array inside the array and we want to write in one arrray that what to do is to use flat method of array


//  console.log(Array.isArray("piyush")) //false
        //    console.log(Array.from("piyush")) // create a duplicate of what you want to print from the Array
// console.log(Array.from({name: "Piyush"})) //[]   //interesting

// let  score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3))  // to convert any integer in array


