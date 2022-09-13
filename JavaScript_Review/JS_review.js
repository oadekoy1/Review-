/*I. Variables & Datatypes*/

// A. =========Variables==========
// 1. How do we assign a value to a variable?
//let legs = 2

// 2. How do we change the value of a variable?
// make sure that you are using let instead of const

// 3. How do we assign an existing variable to a new variable?
// let legs = 2
// legs = 4

// 4. Remind me, what are declare, assign, and define?
// declaring a variable is using either let or const to say we have a variable to use
// assigning a variable is using our '=' to put it with a string or a value or a boolean
// defining our variable is the result of what the we declared and assigned to create a variable

// 5. What is pseudocoding and why should you do it?
// A short way of gathering thoughts together while coding. It isn't meant to be ran

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// I have to assume majority of the time is spent on thinking on how to code your problem then actually coding it. Maybe, 75/25

// B. ========Strings==========
// Create a variable called firstVariable
let firstVariable

// Assign it the value of the string "Hello World"
firstVariable = 'Hello World'

// Change the value of this variable to some number
firstVariable = 5

// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable

// Change the value of secondVariable to any string.
secondVariable = 'Hi World'

// What is the value of firstVariable?
console.log(firstVariable)
// 5

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjeanv  
let yourNameand = 'Seun'
let yourNameso = `Hello, my name is $${yourNameand}`

// C. =========Boolean==========
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a != a - d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. ===========The Farm============
// Declare a variable animal. Set it to be either "cow" or something else
let animal = 'cow'
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === 'cow') {
    console.log('mooooo')

// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
} else {
    console.log("Hey! You're not a cow.")
} 
// Commit

// E. =========Driver's Ed===========
// Make a variable that holds a person's age; be semantic
let age = 17

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if(age >= 16) {
    console.log("Here are the keys!")
} else if (age < 16) {
    console.log("Sorry, you're too young.")
}

/* II. Loops */

// A. ========The basics==========
// Write a loop that will print out all the numbers from 0 to 10, inclusive
let i = 10
for(let i = 0; i <= 10; i++) {
    console.log(i)
}
// Write a loop that will print out all the numbers from 10 up to and including 400
let j = 400
for(let j = 10; j <= 400; j++) {
    console.log(j)
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
let k = 4000
for(let k = 12; k <= 4000; k+=3) {
    console.log(k)
}

// B. =========Get even===========
// Print out the numbers that are within the range of 1 - 100
let l = 100
for(let l = 1; l <= 100; l++) {
    if (l % 2 === 0) {
      
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
console.log(`${l} <-- is an even number`)
}
}

// C. ==========Give me Five===========
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!


// For numbers divisible by both three and five, be sure your code prints both messages

let m = 100
for(let m = 0; m <= 100; m++) {
    if (m % 5 === 0 && m % 3 === 0) {
        console.log(`I found a ${m}. High five!`)
        console.log(`I found a ${m}. Three is a crowd`)
    } else if (m % 3 === 0) {
        console.log(`I found a ${m}. Three is a crowd`)
        continue
    } else if (m % 5 === 0) {
        console.log(`I found a ${m}. High five!`)
        continue
    } else {
        console.log(m)
    }
}

// D. =========Savings account===========
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let sum = 0
for(let n = 1; n <= 10; n++) {
    sum += n
}
console.log(`$${sum}`)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let sum1 = 0
for(let o = 1; o <= 100; o++) {
    sum1 +=o
}
console.log(`$${sum1 * 2}`)

/*III. Arrays & Control flow*/

// A. ==========Talk about it:============
// What are the things in an array called?
//indexes

// Do Arrays guarantee those things will be in order?
//as long as you list them in order, they will display in order in the way you list them.

// What real-life thing could you model with an array?
//arrays can be used for
//store test scores in a gradebook online 

// B. ======Easy Does It=========
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ['hey', 'hi', 'hello']

// C. =========Accessing elements===========
/*Given the following array*/ const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
console.log(randomThings[0])
// Change the value of "Hello" to "World"
randomThings[2] = 'World'
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. ========Change values=========
/*Given the following array*/ const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass[4] = 'Octocat'
// Add a new element, "Cloud City" to the array
ourClass.push('Cloud City')
console.log(ourClass)

// E. ========Mix It Up========
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

/* Given the following array:*/ const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Hello")
console.log(myArray)
// Remove the 5 from the beginning of the array.
myArray.splice(0,1)
console.log(myArray)
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.pop("hello")
console.log(myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
Array.prototype.reverse(myArray)

// F. =======Biggie Smalls=========
// Create a variable that contains an integer.
let gamePoints = 100

// Write an if ... elsestatement that:
if (gamePoints < 100) {
// console.log()s "little number" if the number is entered is less than 100
    console.log('little number')
}
// console.log()s big numberif the number is greater than or equal to 100.
else if(gamePoints >= 100) {
    console.log('big number')
}

// G. ========Monkey in the Middle===========
// Write an if ... else if ... elsestatement:
let num = 6
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if(num < 5) {
    console.log('little number')
} else if (num > 10) {
    console.log('big number')
} else {
    console.log('monkey')
}

// H. =========What's in Your Closet?=============
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6 , 6, 'raybans', "marshmallow peeps" )
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = 'stained knit hat'

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0]
// In the same way, access one item from Thom's pants array.
thomsCloset[1][2]
// Access one item from Thom's accessories array.
thomsCloset[2][2]
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas'

/*IV. =======Functions=========*/

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
function printGreeting(name) {

// Like so?

console.log(`Hello there ${name}`);
// => Hello there, Slimer!
}
printGreeting("Slimer") 
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. =======printCool=========
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
console.log(`${name} is cool`);
}
printCool('Captain Reynolds')
// => "Captain Reynolds is cool";

// C. =======calculateCube==========
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num4) {
return (num4) ** 3
// => 125
}
const results = calculateCube(5)
console.log(results)

// D. =======isVowel=========
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char) {
    if (char.toLowerCase() === 'a'|| char.toLowerCase() ==='e'|| char.toLowerCase() === 'i'|| char.toLowerCase() === 'o' || char.toLowerCase() ==='u') {
        return true
    } else {
        return false
    }
}
console.log(isVowel("U"));
// => true

// E. =======getTwoLengths========
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths() {
//     arr = ['Hank', 'Hippopopalous']
//     for(i < 0; i < arr.length; i++) {
//         console.log(arr)
//     }
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

//  =======F. getMultipleLengths=========
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// function getMultipleLengths() {
//     arr = ["hello", "what", "is", "up", "dude"]
//     for(i < 0; i < arr.length;  i++) {
//         console.log(arr)
//     }
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord() {
    arr ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
    for(i = 0; i < arr.length ; i++) {
        if(arr.length[i])
    }
}
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

