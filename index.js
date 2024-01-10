/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

//  1.) Declare a variable
let myname='Alan';
console.log(myname);
// 2.) Change the value of this variable
myname = 'John';
console.log(myname)
// 3.) Change the data type of this variable
myname = 29; // Change to a number
console.log(myname);

// 4.) Create another variable and the one from above to concatenate
myname = 'Alan'; // Set myname back to 'Alan'
let greeting = 'Hello, ';
let fullName = greeting + myname;
console.log(fullName);

// 5.) Use any of the variables above or create new ones and print using string interpolation
let age = 29;
console.log(`My name is ${myname}, and I am ${age} years old.`);
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

let name = 'Sabrina';
let letter = name.charAt(4);
console.log(letter);

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
let word = 'Teddy';
let unicode = word.charCodeAt(2);
console.log(unicode);
// Using fromCharCode() - make it readable for us :). You'll see!
let unicodeValue = 100; 
let character = String.fromCharCode(unicodeValue);
console.log(character);
// Take your first and last name and concat()
let myfirstname='Alan';
let mylastname='Yazbeck';
let myname1= myfirstname.concat(' ', mylastname);
console.log('This is my Full name', myname1);

// Create a string and make it return true using startsWith()

let string='Apple i like';
let istrue = string.startsWith('Apple');
console.log(istrue); // This will return true

// Now use any variable with endsWith() and return false
let isfalse = string.endsWith('like1');
console.log(isfalse);


// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
const isMatch = ozgur.includes('Once upon a time Ozgur looked up at the Moon, ');
console.log(isMatch); // This will return true


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const indexOfCow = joshHadALittleLambOopsCow.indexOf('cow');
console.log(indexOfCow);

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

const lastIndexOfVanessa = vanessa.lastIndexOf('Vanessa');
console.log(lastIndexOfVanessa);

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
const lengthOfString = noWeCantTeo.length;
console.log(lengthOfString);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// Replace "Goku" with "Vegeta"
const updatedString = replaceGokuWithVegeta.replace('Goku', 'Vegeta');
console.log(updatedString);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
let joshwife= "WIFEY 1";//PICK A WIFE FOR JOSH
const indexOfWifey = joshIsLookingForWifey.search(joshwife);
console.log('Index of the right wifey:', indexOfWifey);

const pizzaSentence = "pizza, other half of pizza";

const half = pizzaSentence.slice(7);
console.log(half);
// Now using the pizza sentence, return only pizza (before the comma)
const firstWord = pizzaSentence.slice(0, pizzaSentence.indexOf(','));
console.log(firstWord);

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"

const array = splitTheBill.split(', ');

console.log(array);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const chararray = splitTheBill.split('');

console.log(chararray);
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
const lowercase = angry.toLowerCase();

console.log(lowercase);

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
const uppercase = jahlunSaidToPutSomeRespectToHisName.toUpperCase();

console.log(uppercase);
// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
const oo = basicGreeting.substring(1, 4);
console.log(oo);

// Returns "JavaScript"
const ohReally = "JavaScript Substring";
const qq = ohReally.substring(0, 10);
console.log(qq);



// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com";
const aa = aslDays.split('@');
const bb = aa[1];
console.log(bb);

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const extraLoving = "    I need some love and attention    ";
const trimmedString = extraLoving.trim();
console.log(trimmedString);

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a _ b)
console.log(a<b);//Print ture

// console.log(c _ b)
console.log(c>b);//Print True


// console.log(d _ d)
console.log(d === d); 

// console.log(d _ a)
console.log(d.length <a);
// console.log(a _ 15)
console.log(a !== 15);
// console.log(a _ b _ c)
console.log(a + b == c);

// console.log(c _ b _ a _ d)
console.log(c !== b !== a !== d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let i = 1; i <= 10; i++) {
    console.log('The room is spinning 10 times !')
  }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

for (let i = 1; i <= 20; i++) {
    console.log(`Teo's vision is spinnin 20 times!`);
  }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

let count = 1;

while (count <= 20) {
  console.log(`I'm sorry`);
  count++;
}



// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (const value of Object.values(whateverQueenBeySaid)) {
    console.log(value);
  }

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (const index in lana) {
    console.log(index);
  }


// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(person => {
    const prefix = "PS";
    console.log(person + " " + prefix);
  });

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

let fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
const joinstr = fruits.join(' ');

console.log(joinstr);

// Remove orange
const removeorange= fruits.pop();
console.log(removeorange);
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end

fruits.push('strawberry', 'kiwi', 'grapes');
console.log(fruits)

// Remove apple

fruits.shift();
console.log(fruits)

// Add mango at the beginning of the array

fruits.unshift('mango');
console.log(fruits)

// Add lemon, and grapefruit between mango and banana

fruits.splice(2, 0, 'lemon', 'grapefruit');
console.log(fruits)


// Remove banana and strawberry

fruits = fruits.filter(fruit => fruit !== 'banana' && fruit !== 'strawberry');
console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

const exoticFruits = ['dragon fruit', 'passion fruit', 'lychee'];

const allFruits = fruits.concat(exoticFruits);

console.log(allFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
const lastTwoExoticFruits = allFruits.slice(-2);
console.log(lastTwoExoticFruits);

console.log(allFruits);
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort();
console.log(monalissaIsMessy);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse();
console.log(mirrorMirrorOnTheWall);

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const badWord = 'badword';
const filteredSentence = RafaelNoBadWords.split(' ').filter(word => word !== badWord).join(' ');
console.log(filteredSentence);

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const total = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const originalarray = ['a', 'b', 'c', 'd', 'e'];
const copiedarray = [...originalarray];
console.log('Original Array:', originalarray);
console.log('Copied Array:', copiedarray);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const connectedarray = [...array1, ...array2];
console.log('Connected Array:', connectedarray);



// Using the variable with the newly connected arrays, use spread operator to add something at the end.

const newarraywithaddition = [...connectedarray, 'x', 'y', 'z'];
console.log('New Array with Addition:', newarraywithaddition);


// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

const newarraywithaddition1 = ['x', 'y', 'z', ...connectedarray];

console.log('New Array with Addition:', newarraywithaddition1);

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
const anthonyDonut = donutShop[1][0][1];
console.log('Anthony wants:', anthonyDonut);


// Tosi wants ihatethis. :) Print!
const tosiDonut = donutShop[2][0][0][1][0];
console.log('Tosi wants:', tosiDonut);


// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

const isTeoAPerson = true;
const teoGender = 'male';
const teoHungerStatus = 'hungry'; 
if (isTeoAPerson) {
  if (teoGender === 'male') {
    if (teoHungerStatus === 'hungry') {
      console.log("Let's buy Teo some tacos!");
    } else if (teoHungerStatus === 'not hungry') {
      console.log("He doesn't need to eat.");
    } else {
      console.log('If Teo is not hungry, am I hungry?');
    }
  } else {
    console.log('Wrong gender! Teo is not a male.');
  }
} else {
  console.log('Teo is not a person!');
}



// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

const isGustavoCoolest = true; 
const message = isGustavoCoolest ? "You got that right!" : "James wants to argue. He says he's the best!";
console.log(message);


// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting() {
    console.log('Hello, ma amsir!');
  }
  sayGreeting();
  
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function printString(myString) {
  console.log('This is my ' + myString);
}

printString('Dont play with me haha.');

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

const number1 = 5;
const number2 = 10;
const number3 = 15;

const result = add(number1, number2, number3);

console.log(result);


// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts


function fightClub(name) {
  switch (name) {
    case 'Teo':
      return '1st rule: You do not talk about Fight Club.';
    case 'Manara':
      return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
    case 'Liv':
      return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
    case 'Devin':
      return '4th rule: Only two guys to a fight.';
    default:
      return 'No shirts, no shoes, no service.';
  }
}
console.log(fightClub('Teo'));


// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.


function hello() {
  process.stdout.write('Hello '); 
  return function() {
    console.log('Goodbye');
  };
}

const goodbyeFunction = hello();
goodbyeFunction();

// Create a function expression with your first name as the variable and then print your first and last name
function myFirstName(myfirstname) {
  console.log(myfirstname + ' Yazbeck');
}
myFirstName('Alan');

// Create an arrow function that accepts a number and have it return that number doubled

function doubleNumber(number) {
  return number * 2;
}

console.log(doubleNumber(2)); 

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human = {
  name: 'Alan',
  age: 29,
  location: 'Boston'
};


// Access the name using dot notation
console.log(human.name);

// Access the age using square brackets
console.log(human['age']);
// Use object destructuring to access location
const { location } = human;
console.log (location);
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow

console.log(bulbasaur.abilities[0].ability);



// Print cut
console.log(bulbasaur.moves[2]);


// Print Bulbahhhh!!!!!

console.log(bulbasaur.sound());
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)

bulbasaur.height = 7;

console.log(bulbasaur);


// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)


bulbasaur['order'] = 1;

console.log(bulbasaur);


// Print an array that contains every single properties in bulbasaur

const array11 = Object.keys(bulbasaur);

console.log(array11);

// Print every single properties one by one in the console
for (let property in bulbasaur) {
  console.log(property);
}

// Print an array that contains every single values in bulbasaur

console.log(Object.values(bulbasaur));
