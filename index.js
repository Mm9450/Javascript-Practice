// let value = 3
// let negValue = -value
// console.log(negValue);


//OBJECTS
const mySym = Symbol("key1")
const JSUser = {
    [mySym]: "myKey1",
    name: "Manas",
    age: 18,
    location: "Lucknow",
    Email: "abcd@gmail.com",
    isLoggedin : false
}

// console.log(JSUser.location);
// console.log(JSUser["Email"]);
// console.log(JSUser[mySym]);

// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello Javascript");
}
// console.log(JSUser.greeting());

JSUser.greetingTwo = function(){
    console.log(`Hello Javascript, ${this.location}`);
}
//console.log(JSUser.greetingTwo());

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"

// console.log(tinderUser);

const regularUser = {
    email: "some2gmail.com",
    fullname:{
        userfullname:{
            firstname:"Manas",
            lastname:"Mishra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign({},obj1,obj2);
const obj3 ={...obj1, ...obj2}

//console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));