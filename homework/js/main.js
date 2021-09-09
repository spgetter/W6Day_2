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

// ANSWER TO QUESTION 1
console.log('--- PERSON 3 ---')
for (let i = 0; i < Object.keys(person3).length; i++){
    switch(Object.keys(person3)[i]){
        case 'pizza':
            console.log('Favorite Pizza Includes:')
            for (let j = 0; j < Object.values(person3)[i].length; j++){
                console.log(`   ${Object.values(person3)[i][j]}`)
            }
            break;
        case 'tacos':
            console.log('Favorite Tacos Include:')
            console.log(`   ${Object.values(person3)[i]}`)
            break;
        case 'burgers':
            console.log('Favorite Burgers Include:')
            console.log(`   ${Object.values(person3)[i]}`)
            break;
        case 'ice_cream':
            console.log('Favorite Ice_cream Includes:')
            for (let j = 0; j < Object.values(person3)[i].length; j++){
                console.log(`   ${Object.values(person3)[i][j]}`)
            }
            break;
        case 'shakes':
            console.log('Favorite Shakes Include:')
            for (let j = 0; j < Object.values(person3.shakes[0]).length; j++){
                console.log(`   ${Object.keys(person3.shakes[0])[j]} : ${Object.values(person3.shakes[0])[j]}`);
            }
            break;
        default:
            console.log('Food formerly unknown to man');
    }
}


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


function Person(name, age){
    this.name = name;
    this.age = age;

    // A Method inside of a JS Prototype
    this.printInfo = (favorite_color, quest = 'I seek the Holy Grail') => {
        console.log( `What is your name? \"${this.name}\", 
                    \nWhat is your quest? \"${quest}\", 
                    \nWhat is your favorite color? \"${favorite_color}\" 
                    \n\"and I'm ${this.age} years old.\"` );
        console.log( 'I never asked you that!')

        return "Returned Value"
    }
    this.gotOlder = (() => {
        return function () {return this.age++}
    })()
}

let lancelot = new Person('Sir Lancelot', 29)
lancelot.printInfo('Blue')
console.log(lancelot.gotOlder());
console.log(lancelot.gotOlder());
console.log(lancelot.gotOlder());
console.log(lancelot.gotOlder());

let gawain = new Person('Sir Gawain', 27)
gawain.printInfo('Blue... no, Yellow!')


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const isBigOrSmall = (str) => {
    return new Promise( (resolve, reject ) => {
        if (str.length >= 10){
            resolve("Big Word");
        } else {
            reject("Small Number");
        }
    })
}

console.log(isBigOrSmall('Whatever'));
console.log(isBigOrSmall('antidisestablishmentarianism'));