//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
      
        


for (let v of Object.values(person3)){
    if (Array.isArray(v)){
        for (let item of v){
            if (typeof(item) != 'string'){
                for (let [key, value] in Object.entries(item)){
                console.log(`My favorite shake at ${Object.keys(item)[key]} is ${Object.values(item)[key]}`)}}
        }} else {
                for (let [k,v] in Object.entries(person3)){        
                        console.log(`My favorite ${Object.keys(person3)[k]} is/are ${Object.values(person3)[k]}`)
                 } } }      
    



    

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
    return `${this.name} is ${this.age} years old`

    }
    this.addAge = () => {
    age = this.age
    console.log('another year older')
    age ++
    console.log(`${this.name} is now ${age} years old`)
    }

    this.addAge2 = (incrementation) => {
    ageNow = age + incrementation
    console.log(`${this.name} aged ${incrementation} years and is now ${ageNow} years old`)
}
}   


let john = new Person('John', 35)
console.log(john.printInfo())
john.addAge()

let jane = new Person('Jane', 24)
console.log(jane.printInfo())
jane.addAge2(3)



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Word"
*/


const isBigWord = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve ('Big Word')
        } else {
            reject ('Small Word')
        }
    })
}

isBigWord('platypus')
.then((result) => {
    console.log(`${result}`)
})
.catch((error) => {
    console.log(`${error}`)
})





//Codewars Problem 1:







//Codewars Problem 2: 


