// // this is keyword which tell it from where

// let data1 = {
//     Name:"Kamlesh",
//     Age: 22,
//     Gender:"Male",
    
// }
// let myDetails=function(city, state){
//     console.log(this.Name + " " + city + " " + state)

// }

// let data2 = {
//     Name:"P. L.",
//     Age: 28,
//     Gender:"Male",
    
// }
// // Call, Apply, Bind

//     /* Call Method */
// // Function Borrow
// myDetails.call(data1, 'Ayodhya', 'U.P.')
// myDetails.call(data2, 'Ayodhya', 'U.P.')

//     /* Apply Method */

// myDetails.apply(data1, ['Ayodhya', 'U.P.'])
// myDetails.apply(data2, ['Ayodhya', 'U.P.'])


//     /* Bind Method */

// let details1 = myDetails.bind(data1, ['Ayodhya', 'U.P.'])
// let details2 = myDetails.bind(data2, ['Ayodhya', 'U.P.'])
// // As function treat kr rhe hai

// //    console.log(details1)
//    console.log(details1())
// //    console.log(details2)
//    console.log(details2())



// JavaScript Closure Concept

const sum = (a, d)=>{
    console.log("The value of A is "+a + "and b is " +d)
    const c = 10; // Lexical Scope
    return function(b){ //Anonymous
        return a+b+c+d;


    }


}
// a = 5, b = 20, c = 30
// sum(5)  // Calling
var storage = sum(5, 15) // Store whole sum function inside storage
console.log(storage(20))

// function addNum(parameter){

// }

// const addNum2 = (parameter) =>{

// }
//  var addNum3 = function(parameter){

//  }


//  const sumTwo = (a, d)=>{
//     console.log("The value of A is "+a + "and b is " +d)
//     const c = 10; // Lexical Scope
//     return function innerFun(b){ 
//         return a+b+c+d;
//     }
// }
// var storage = sumTwo(5, 15) // Store whole sum function inside storage
// console.log(storage)
// console.log(storage(20))





