// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }


const month = 3
switch (month) {
  case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;

  default:
    console.log("default match");
    break;   // if we not give a break so it can terminate the another case also except default
}