// Continuation of control flow from yesterday
// Switch-Case statement

let day = new Date().getDay();

let literal_day = new Date().toString();

console.log(day);
console.log(literal_day);

// Switch Case Statement syntax
switch(day){
    case 0:
        console.log('Watch Football')
        break;
    case 1:
        console.log('Wake to  whiteboards')
        break;
    case 2:
        console.log('Taco Tuesday is undefeated')
        break;
    case 3:
        console.log("It is Wednesday, my Dudes")
        break;
    case 4: 
        console.log("Thursday is for fixing Flask")
        break;
    case 5:
        console.log("'Thank God, it's Friday' - Tom hanks")
        break;
    case 6:
        console.log("Let's take a break, it's the weekend")
        break;
    default:
        console.log("eight days a week")

}

// literal day example of switch
switch(literal_day.split(" ")[0]){
    case 'Sun':
        console.log("Sleep 22 hours")
        break;
    case 'Mon':
        console.log("Get to coding, it's Monday")
        break;
    case 'Tues':
        console.log("Tortillas are life")
        break;
    case 'Wed':
        console.log("It is Wednesday my Dudes!")
        break;
    case 'Thurs':
        console.log("Write a new feature for your project Thursday")
        break;
    case 'Fri':
        console.log("Party or Project on Friday")
        break;
    case 'Sat':
        console.log("Rest on the weeked")
        break;
    default:
        console.log("Eight days a week")
}

// -- Creation of objects in JavaScript
// -- A simple JS object

let person = {
    name: 'John',
    quest: 'Seek the Holy Grail',
    age: 28,
    fav_color: 'red'
}

// Accessing Information in Object
console.log(person['name']) // Bracket Notation
console.log(person.age) // Dot notation

// Complex JS object

let person2 = {
    name: 'Susan',
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'blue',
    teams: [
            {
                baseball: 'Colorado Rockies',
                football: 'Denver Broncos',
                hockey: 'Colorado Avalanche',
                basketball: ['Denver Nuggets', 'DU Pioneers'],
                soccer: ['Colorado Rapids', 'Someotherteam']
            },
            {
                baseball: 'Montreal Expos',
                football: 'Green Bay Packers',
                basketball: 'Philadelphia 76ers',
                soccer: ['LA Galaxy', 'Chicago Fire']
            }
        ]
    }

console.log(person2['prog_languages'][1])
console.log(person2.teams[1].football)

// javaScript Object Prototype Methods -- -- Object Literal
console.log( Object.keys(person2) )
console.log( Object.values(person2))

console.log(person)
// -- Bad/sad path (┬┬﹏┬┬) of looping through objects in JS
for (let i = 0; i < person2.length; i++){
    console.log( Object.keys(person2)[i])
}

// Happy Path
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log( Object.keys(person2)[i] )
}

// List of values from Person2 Object that are arrays
for (let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray( Object.values(person2)[i]) ){
        console.log( Object.values(person2)[i] )
    }
}


// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A Method inside of a JS Prototype
    this.printInfo = function( wheels = 0, color ){
        console.log( `This is a ${this.year}, ${this.make}, ${this.model} 
        and it has ${wheels} wheels and the color is ${color}` );

        return "Returned Value"
    }
}

let myCar = new Car('Volkswagen', 'Jetta', 2013)

myCar.printInfo(4, 'Super Dark Black')


// -- JS Classes -- 

class Human{
    constructor( name, age, gender ){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`;
    }

}

let wilma = new Human('Wilma', 24, 'Female');

console.log( wilma.printInfo() );

// JS Inheritance using Classes

class baby extends Human{
    constructor(name, age, gender, walking){
        super(name,age,gender);
        this.walking = walking;
    }

    isBabyWalking(){
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return "Baby ain't walking... yet"
        }
    }
}

// create baby with instantiated values

let ayla = new baby('Ayla', 1, 'Female', true );
console.log( ayla.printInfo() );
console.log( ayla.isBabyWalking() );

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/

let countUp = (function() {
    let counter = 0; // this will be our private variable
    console.log('hit');
    return function () {return counter++}
})()

let addNames = (function () {
    let names = [];
    console.log('Adding names to guest list');
    return function (name) {
        console.log(names);
        console.log(`${name} is being added to the list...`)
        return names.push(name);
    }
})()


// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic example
function first(){
    console.log(1);
}

function second(){
    console.log(2);
}

// first();
// second();

// Buuuuttt what happens if we add a delay to the execution?
function first_delay(){
    // simulate delay
    setTimeout( function(){
        console.log(1);
    }, 5000)
}

function second_delay(){
    console.log(2);
}

// first_delay();
// second_delay();

// Callback Syntax
function doHomework( subject, callback ){
    alert(`Starting my ${subject} homework...`);
    callback();
}

// doHomework('JavaScript', function(){
//     console.log(`Done with homework!`);
// })

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 
        🤷🏾‍♂️        })
            })
        })
    })
*/

// We solve this above problem with Promises


/**
 * =============== CREATING A JS PROMISE =================
 */

const isEvenNumber = (num) => {
    return new Promise( (resolve, reject ) => {
        if (num % 2 == 0){
            resolve(true);
        } else {
            reject(false);
        }
    })
}

isEvenNumber(10)
// Happy path for resolver
.then( (result) => {
    console.log(`Even number: ${result}`);
} )
// Sad path for rejection
.catch( (error) => {
    console.log( `Odd Number: ${error}` );
} )

// Another Example with Promises with async and await

function increase_salary(base, increase){
    const new_salary = base + increase
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// Function to add salary slowly
function slow_addition(n1,n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000 )
    })
}

function increased_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increased_slow_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}