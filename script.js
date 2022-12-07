// this is keyword which tell it from where

let data1 = {
    Name:"Kamlesh",
    Age: 22,
    Gender:"Male",
    
}
let myDetails=function(city, state){
    console.log(this.Name + " " + city + " " + state)

}

let data2 = {
    Name:"P. L.",
    Age: 28,
    Gender:"Male",
    
}
// Call, Apply, Bind

    /* Call Method */
// Function Borrow
myDetails.call(data1, 'Ayodhya', 'U.P.')
myDetails.call(data2, 'Ayodhya', 'U.P.')

    /* Apply Method */

myDetails.apply(data1, ['Ayodhya', 'U.P.'])
myDetails.apply(data2, ['Ayodhya', 'U.P.'])


    /* Bind Method */

let details1 = myDetails.bind(data1, ['Ayodhya', 'U.P.'])
let details2 = myDetails.bind(data2, ['Ayodhya', 'U.P.'])

   console.log(details1)
   console.log(details2)




