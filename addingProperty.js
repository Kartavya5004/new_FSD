const student = {
    name: "kartavya",
    rollNo: 23,
    year: 3
}

const addAddress = {
   ...student,
   address:{
    state: "UP",
    city: "Ghaziabad",
    pin: 105003
   }

}
console.log(addAddress)