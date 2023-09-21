// alert("Learning Js is fun!")
// console.warn("be careful fav Js can be tricky at times")
// variables are the names use to store data OR values in JS computer programming
// variables has 3 parts.
// Variable DECLARATOR
// Variable NAMES
// Variable VALUES
// Declarators in js:Var,Let,Const
// var favour = "favour is human being";
// console.log(favour);
// let age = 45;
// console.log(age);
// const name = "favdevs";
// console.log(name);
// console.log(favour, name, age);
// // rules for creating variable : it must not start with number and underscol("")
// // camelcase
// const firstName = "Waziri";
// console.log(firstName);
// let lastName = "Olumide";
// console.log(lastName);
// const toDoList = ["eat breakfast", "watch netflix", "write js"];
// console.log(toDoList);
// // differences btw var,let,const
// // var is the oldest global declarator
// // variable declare with var, can be re-declared and reassigned
// var birthday = "tuesday";
// console.log(birthday);
// var birthday = "wednesday";
// console.log(birthday);
// birthday = "Thursday";
// console.log(birthday);

// // let
// // let can only be reassigned
// // let cannot be redeclared
// let myAge = 30;
// console.log(myAge);
// // let myAge = 20 It does not allow Itredeclaring
// myAge = 20;
// // let allows only reassigning
// console.log(myAge);
// // let OTP = 1234
// // console.log(OTP);
// //    OTP = Math.random() * 600
// //    console.log(OTP);
// let OTP = 1234;
// console.log(OTP);
// OTP = Math.random() * 4000;
// console.log(OTP);
// // const OTP = 1234
// // console.log(OTP);
// //    OTP = Math.random() * 600
// //    console.log(OTP);

// // const
// // const cannot be redeclared or reassigned
// const surName = "Echiejile";
// console.log(surName);
// // let surName = 66

// // Data Types in Javascript
// //  strings
// //  numbers
// //  booleans
// //  null and undefined
// //  Arrays and objects
// //  sysbols and BigInt

// // Strings
// // Strings are data/text stored in either single or double quotes
// const myString = "Hello, this is a strings with single quotes";
// console.log(myString);
// const myStr2 = "Hello, this is a strings with double quotes";
// console.log(myStr2);
// console.log(myString, myStr2);

// // assignments
// // print mystr on the console in block letter
// // solution
// // let myStrCapital = myStr.toUpperCase()
// // console.log(myStrCapital);
// let myStr = "hello,this is a string with single quotes!";
// console.log(myStr.toUpperCase());

// // change the first letter of each word in myStr2 to capital letter
// // solution

// let myStr3 = "hello,this is a string with single quotes";
// // Alternatively, you can just log it directly to the console

// // Number
// const num1 = 65;
// const gravity = 9.8;
// const BMI = 22.5;
// console.log(num1, gravity, BMI);
// // console.log(${num1}\n${gravity}\n${BMI});

// // Assignment
// // What is NaN in Javascript?

// // null and undefined
// let undef;
// console.log(undef);
// let empty = null;
// console.log(empty);

// // booleans
// // Boolean retures true or false
// let isAuth = false;
// if (isAuth) {
//   console.log("you are authorized");
// } else {
//   console.log("you are not authorized");
// }
// //   Task
// const isAdult = true;
// if (isAdult) {
//   console.log("you go pay bills taya");
// } else {
//   console.log("just dey play boy");
// }
// // using loose comparison operator
// console.log(0 == false);
// console.log(1 == true);
// // using strict comparison operator
// console.log(0 === false);
// console.log(1 === true);

// // Arrays
// // Arrays is a collections of items in a square bracket
// const item = [];
// console.log(item);
// const student = ["victor,segun,saeda,larry,john, ['red,green"];
// console.log(student);

// // Object
// // Name: David
// // age:35
// // color:['red','green']
// // isMarried:true
// // object is a data structure that store data in key-value pairs
// const obj = {
//   name: "David",
//   age: 35,
//   color: ["red", "green"],
//   isMarried: true,
// };
// console.log(obj);

// // string methods and properties
// // index,length,toUpperCase,tolowerCase,split,trim,slice,substring
// let word1 = "I love techstudio";
// console.log(word1);
// let word2 = "Academy";
// console.log(word2);

// // concatination of strings
// // concatination is combining two or three words together
// // let word3 = word1 + '' + word2 + "and I'm learning javascript"
// let word3 = `${word1} ${word2} and I'm learning javascript ${obj.name}`;
// console.log(word3);

// // length
// // length is use to count the characters in the strings
// let lengthOfWord1 = word1.length;
// console.log(lengthOfWord1);

// // index 0,1,2,3,4....
// // index properties of string is the position of the arrangement of string character
// console.log(word2);
// let firstLetter = word2[0];
// console.log(firstLetter);
// let lastLetter = word2[6].toUpperCase();
// console.log(lastLetter);
// console.log(word2.length);
// let lastIndex = word2.length - 1;
// let lastLetter1 = word2[lastIndex];
// console.log(lastLetter1);

// // toUpperCase(),toLowerCase()
// console.log(word1.toUpperCase());
// console.log(word2.toLowerCase());

// // Split()Method
// console.log(word2.split(""));
// let fullName = "Ewami Koyen Favour";
// let eachName = fullName.split(" ");
// console.log(eachName);
// let fName, sName, middleName;
// fName = eachName[0];
// middleName = eachName[1];
// sName = eachName[2];
// console.log(fName);
// console.log(middleName);
// console.log(sName);

// // console.log('${fName}\n${middleName}\n${sName}');

// // substring
// console.log(word3);
// console.log(word3.substring(0, 20));
// console.log(word3.substring(0, word3.length));

// // trim()
// // trim is one of the method that is used for removing whitespace from a string
// let untrimWord = "                favdevs         ";
// console.log(untrimWord, untrimWord.length);

// let trimmedWord = untrimWord.trim();
// console.log(trimmedWord, trimmedWord.length);

// // operators
// // Arithmetic operators +, -, *, /, **, %, ++, --
// // Assignment Operators =, =+, -=, /=, etc
// // Logical Operators &&, ||, !, ??
// // comparison Operators ==, ===, !=, !==, <, >, >=, <=

// console.log(5 ** 3 + 8 - (6 * 10 ** 2) / 25);

// // Modulus %
// // Modulus is an operators that returns a reminder
// console.log(25 % 2);
// console.log(33 % 4);
// console.log(33 % 5);
// console.log(24 % 2);

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }
// // alternatively
// for (let n = 1; n <= 20; n++) {
//   if (n % 2 == 0) {
//     // console.log(n);

//     continue;
//   }
//   console.log(n);
// }
// let x, y;
// x = 10;
// y = 3;
// if (x % 2 == 0) {
//   console.log("x is an even number");
// } else {
//   console.log("x is an odd number");
// }

// // Assignment operators
// // Assignment operators are use to assign value to variable
// let sth = "something";
// console.log(sth);

// // +=, -=
// console.log(x, y);
// // x = 5

// // logical operator &&,||
// let T = true;
// let F = false;
// console.log(T);
// console.log(F);
// console.log(T && F);
// console.log(T || F);
// console.log(T && T);
// console.log(F || F);
// let isMarried = true;
// console.log(isAdult, isAuth);

// if (isAdult && isMarried) {
//   console.log("Hello,Mrs Adams");
// } else {
//   console.log("Hello Miss Adams");
// }

// // Classwork
// // write a logic to check password strength.
// // if the password length is greater 11,and has a special character,it should log "very strong password"
// // If the password length is greater 8 but less than 12, it should log "strong password"
// // Else,it should log "Weak password"

// //   solution
// let pass = "mypassword123##";
// if (pass.length > 11 && pass.includes("@")) {
//   console.log(`YOUR PASSWORD: "${pass}" is a VERY STRONG PASSWORD`);
// } else if (pass.length < 12 || pass.length > 8) {
//   console.log(`YOUR PASSWORD: "${pass}" is GOOD`);
// } else {
//   console.log("Weak password");
// }

// //  Comparison operators ==,===,!=,!==
// // == loose comparison,compares the values of variables and not the data types
// // === strict comparison,compares the values and data types
// let score1 = 40;
// let score2 = "40";
// // console.log(score1 + ' ' + score2);
// console.log(score1 == score2);
// console.log(score1 === score2);

// // Javascript Math methos:floor, ceil, random, min, max, PI, etc
// console.log(Math.PI);
// let dice = Math.ceil(Math.random() * 6);
// console.log(dice);
// //  floor doesnt random a whole number
// let rand = 1.23434;
// console.log(Math.floor(rand));
// console.log(Math.ceil(rand));

// // conditionals
// // Conditionls if,if-else,if-else-if,switch,ternary operator
// // if
// // if(condition){

// //    run this codes }

// if (!isAdult) {
//   console.log("you can drive");
// }
// // if-else
// if (!isAdult) {
//   console.log("you can drive");
// } else {
//   console.log("you are not old enough to drive");
// }

// // if-else-if
// // write a javascript logic to logto the console the following messages:
// // "The number '4' is an even number"
// // "The number '5' is an old number"
// // "The number is zero"
// //   solution
// let num = 4;
// if (num === 0) {
//   console.log("the number is zero!");
// } else if (num % 2 === 0) {
//   console.log(`The number ${num} is even number`);
// } else {
//   console.log(`The number is ${num} is old number`);
// }
// // switch statement
// const caseValue = null;
// switch (caseValue) {
//   case 1:
//     // run this code
//     break;
//   case 2:
//     // run this code
//     break;
//   case 3:
//     // run this code
//     break;
//   default:
//   // run this code
// }
// //  examples of switch statement
// // students grading system
// let grade = 69;
// switch (grade) {
//   case (40, 41, 42, 43, 44, 45, 46, 47, 48, 49):
//     console.log(`you scored ${grade} and your grade is D`);
//     break;
//   case (50, 51, 52, 53, 54, 55, 56, 57, 58, 59):
//     console.log(`you scored ${grade} and your grade is C`);
//     break;

//   case (60, 61, 62, 63, 64, 65, 66, 67, 68, 69):
//     console.log(`you scored ${grade} and your grade is B`);
//     break;
//   default:
//     console.log("you failed");
// }
// // Task
// // Using switch statement,create a banking that authenticate users,deposit,withdraw and checkBalance.
// //  let enterPin = prompt("Enter PIN or Username")
// //    let loginPin = enterPin.toLowerCase()
// //    console.log(enterPin,loginPin);
// //    let accName = "favour"
// //    let deposit = "deposit"
// //    let withdraw = "withdraw"
// //    let checkBalance = "checkBalance"
// //    let accBal = 1000
// //    if(loginPin == "koyen" || loginPin == 1234){
// // console.log(`${accName} welcome to TECHBank App`);
// //   let action = prompt(`welcome ${accName}, what would you like to do?`)
// // switch(action){
// //    case "deposit":
// // console.log("Deposit");
// // let depAmt = Number( prompt("Enter amount to deposit"))
// // console.log(depAmt);
// // accbal = accbal + deposit
// //       accBal += depAmt;
// //       console.log(`You made a Deposit of $${depAmt} and your balance is $${accBal}`);
// //       break;
// //       case "withdraw":
// //          let withAmt = Number(prompt("Enter amount to withdraw"))
// //          if(withAmt > accBal){
// //             console.log("insufficent balance");
// //          }else{
// //             accBal -= withAmt;
// //       console.log(`you made a withdrawal of ${withAmt} and your balance is ${accBal}`);
// //          }
// //       break
// //       case "balance":
// //        console.log(`your account balance is ${accBal}`);
// //        break;
// //        default:
// //          console.log("oooopss.. something went wrong");
// //    }
// //  }else{
// //    console.log("wrong PIN or username");}

// // Ternary Operators
// // condition ? expression1 : expression2
// isMarried ? console.log("call her madam") : console.log("call her sisi");

// let isloading = false;
// !isloading ? console.log("loading...") : console.log("Data is now available");

// // assignment
// // write a short note the difference between logical OR and nullish coalescing operator (??)

// // Array properties and methods
// const myArr = [
//   "BMW",
//   "Toyota",
//   "Aston martin",
//   "Lexus",
//   "RR",
//   "Volkswagen",
//   "Tesla",
// ];
// console.log(myArr);
// // index
// let firstItem = myArr[0];
// console.log(firstItem);
// const lastIndex1 = myArr.length - 1;
// let lastItem = myArr[lastIndex1];
// console.log(lastItem);
// myArr[2] = "mercedes";
// console.log(myArr);

// // Removing single item from an array
// // shift() or pop()
// let delFirstItem = myArr.shift();
// console.log(delFirstItem);
// console.log(myArr);

// let delLastItem = myArr.pop();
// console.log(delLastItem);
// console.log(myArr);

// //  Adding single items to an array
// // unshift() OR Push()
// myArr.unshift("Nissan");
// console.log(myArr);
// myArr.push("Honda");
// console.log(myArr);

// // splice()
// // Arr.splice(startIndex,delCount, addItems)
// myArr.splice(3, 0, "ferarri", "porche", "Tata");
// // console.log(myArr);

// // slice(start,end)
// let raw = "this is a slice example on string";
// console.log(raw);
// rawslice = raw.slice(0, 10);
// console.log(rawslice);

// // Task
// // using slice with "myArr" car , output the first 4 cars brands in the array in uppercase
// let slicedcar = myArr.slice(0, 4);
// console.log(slicedcar);
// let car;
// for (car in slicedcar) {
//   console.log(slicedcar[car].toUpperCase());
// }
// // Join()
// console.log(slicedcar.join());
// let joined = slicedcar.join("#");
// console.log(joined);
// // Join() and split() of array
// console.log(joined.split("#"));

// // Reverse()
// let numb = [20, 40, 5, 15, 100, 35];
// console.log(numb.reverse());

// // LOOPS
// // For, while, for-in, for-of, do-while, etc..
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");
// console.log("I love javascript");

// // For
// // for(condition){
// //  run this code
// // }

// for (let i = 1; i <= 10; i++) {
//   console.log(`I love javascript ${i}`);
// }
// for (var count = 10; count >= 0; count--) {
//   console.log(`This is count ${count}`);
// }

// for (let n = 1; n <= 12; n++) {
//   console.log(`12 x ${n} = ${n * 12}`);
// }

// const fruits = ["apple", "mango", "orange", "banana", "pear", "grape"];
// console.log(fruits);
// // solution
// // for-IN
// for (let i in fruits) {
//   // console.log(i);
//   // console.log(fruits[i]);
//   console.log(`fruit at ${i} is ${fruits[i]}`);
// }
// console.log("///////////////////");
// // Alternatively, using for-of
// for (let a of fruits) {
//   console.log(`this is ${a.toUpperCase()}`);
// }
// //Task
// // loop through fruits array and only log the fruits that ends with "e".
// // solution
// for(let fruit of fruits){
//    if(fruit.endsWith("e"))
//    console.log(`I love  ${fruit}`);
// }
// // while loop
// // you use while when not certain about the position of the loop providedte condition return true
// // while(condition{
//    // continue running this code
// // }
// let i = 0
// while(i < fruits.length){
//    console.log(`this is while loop for ${i}`);
//    i++;
// }
// // ASSIGNMENT
// // let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
// // loop through the marks and select only even numbers and store them in a new array "evenMarks"
// // SOLUTION
// let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
//   let newMarks = []
//   for(let mark of marks){
//     if (mark % 2 === 0) {
//       newMarks.push(mark)
//     }
//   }
//   // console.log(newMarks);
// // filter
// let filteredMarks = marks.filter((mark) => mark % 2 === 0)
// console.log(filteredMarks);

// // function : you cant build a javascript site without FUNCTIONS
// // functions is a block of code written to perform a specific task,
// // Naming of functions
// // handle, get, set, create, delete, fetch, run.
// // handleSumit
// // getPosts
// // setData
// // updatePosts
// // createUsers
// // deleteUser

// // creating functions
// // function declaration
// // function nameOfFunction(){
//   // run this code
// // }
// // hoisting
// // getSquare(4,4)
// // addNum(4,8)
// function wishHBD(){
//   console.log("happy birthday techstudio");
// }
// // calling the function
// wishHBD()

// // FUNCTIONS EXPRESSION
// const handleBDay = function(){console.log("happy birthday techstudio academy");}
// handleBDay();
// handleBDay();
// handleBDay();

// const greetMe = function(somebody = "stranger"){
//   console.log(`Good day ${somebody}`);
// }
// greetMe("favdevs");
// function addNum(a,b){
//   // console.log(a + b);
//   return a + b
// }
// // addNum(1,2)
// console.log(addNum(11,9));
// // Arrow functions
// const getSquare = (x, n)=>{
//   console.log(`${x**n}`);
// }
// getSquare(2, 5)

// // Task
// // write a function that counts the number of letter in the string parameter passed into it.
// // i,e countLetter("Blard")
// // "The word 'Blard' has 5 letters"
// // solution
// function  countLetter (word){
//   let trimWord = word.trim();
//   let wordLength = trimWord.length
//   console.log(`"${trimWord}" has ${wordLength} letters`);

// }
// countLetter("Techstudio")

// // multiples arguments
// function addAll(...num){
//   console.log(num);
// }
// addAll(3,5,7,8,9,10,11,12,13,14,15, "love")

// // Rest operators and spread operator, destructuring
// const countries = ["Zimbabwe", "Togo", "Ghana", "Sudan", "uk", "spain"]
// const africa = ["Nigeria", "Niger", "Kenya"]
// console.log(countries [1]);
// const [a,b,c, ...d] = countries
// console.log(b);
// console.log(d);
// // copying array
// // const allCountries = countries +',' + africa
// const allCountries = [...countries, ...africa];
// console.log(allCountries);

// // Javascript object
// // object is a collection of properties key-value pairs.
// // const darkMode = {
// //   backgroundcolor: "red",
// //   color: "white",
// //   padding: "10px",
// //   marginTop: "10px",
// //   border: "2px",
// //   age: 30,
// //   skils: ["html", "javascript"]
// // }
// // let mode = "dark"
// // switch (mode){
// //   case "light":
// //     console.log("light mode on");
// //     break;
// //     case "dark":
// //     console.log("dark mode activated");
// //     break;

// //     default:
// //       console.log("switch to default mode");
// // }
//   // accessing object
//   // console.log(darkMode);
//   // dot
//   // console.log(darkMode.backgroundcolor);
//   // console.log(darkMode.skils);
//   // key
//   // console.log(darkMode['backgroundcolor']);
//   // console.log(darkMode['age']);

// // Task
// // create an object called person with the following properties:
// // name, age, gender, religion, occupation, skils, and address.
// // Also destructure the object properties.

// // const person = {
// //   // {}...object 
// //   name1: "favdev",
// //   age1: "20",
// //    isMarried1: true,
// //   //  "" strings
// //    status: "single",
// //   gender: "female",
// //   religion: "christain",
// //   occupation: "student",
// //   country:  "nigeria",
// //   // []...Array
// //   skills: ["html", "javascript"],
// //   address:{
// //           street: "15,simisola street",
// //           city:  "lagos",
// //           country: "nigeria",
// // },
// //  getDetails: function(){
// //   console.log(`Hi, my name is ${name1}\nI live in ${country}, I am ${age1} years old\nI have very good knownledge of ${skills}, \nI am ${status}.I live in ${address.street} ${address.city}.`);
// // }
// // }
// // console.log(person);
// // console.log(person.name1);
// // destructuring person
// // const {name1, address, skills, isMarried1,gender, occupation, religion, age1,status, country, getDetails} = person;
// // console.log(name1);
// // console.log(address);
// // console.log(address.city);
// // console.log(age1);
// // console.log(isMarried1);
// // console.log(gender);
// // console.log(religion);
// // console.log(occupation);
// // console.log(skills);
// // console.log(status);
// // console.log(country);
// // getDetails();

// // to grab only the keys: you use Object.key(person)
// // let objkeys = Object.keys(person)
// // console.log(objkeys);


// // object.values(person)
// // let objValues = Object.values(person)
// // console.log(objValues);

// // object key and value
// //  let objKeyValue =Object.entries(person)
// //  console.log(objKeyValue);

// //  task
// // loop through the object person and log to the console the properties and their values
// // i.e "name1 is favdevs"
// // i.e "age1 is 20"
// // solution
// // for(const key in person){
//   // if(key == 'getDetails'){
//     // continue
//   // }
//   // console.log(`${key} is ${person[key]}`);
// // }
// higher order array functions
// forEach, map, filter, reduce, sort, etc..
// importing javascript modules
import {toDoList1} from "./data.js"
console.log(toDoList1);
// forEach
// arr.forEach(callbackfunction)
toDoList1.forEach(function(item){
  // console.log(item);
  console.log(`item ${item.id} is ${item.task}`);
})

// // Javascript Challenge 1
// // -Create a function ‘maxProductOfThree’
// // -The function takes in array of numbers as arguments, i.e arrNum
// // -It selects 3 numbers from the array that will give the maximum result when multiplied. i.e from arrNum, it’ll pick a, b, c and return their product axbxc, if that’s the three numbers from ‘arrNum’  that will give the higest results.
// // -Example of using the function:
// // maxProductOfThree(arrNum)    
// // // 12345 (maximum product)
// // NB
// // -Check for the number of items in the array, which must not be less than three numbers.
// // -Check if items in the array is not a number. You can only use a number for the computation.
// POV
// You can use any senior Brother of your choice, just make sure you can explain your code line by line.
// / Have a wonderful weekend ✌

// Solution

function maxProductOfThree(arrNum) {
  // Check if there are at least 3 numbers in the array
  if (arrNum.length < 3) {
    return "Array should have at least 3 numbers.";
  }

  // Filter out non-numeric values from the array
  const numericArr = arrNum.filter((num) => typeof num === "number");

  // Check if there are at least 3 numeric values in the array
  if (numericArr.length < 3) {
    return "Array should contain at least 3 numeric values.";
  }

  // Sort the array in ascending order
  numericArr.sort((a, b) => a - b);

  const n = numericArr.length;

  // Calculate the maximum product of three numbers:
  // It can be either the product of the three largest numbers
  // or the product of the two smallest (potentially negative) numbers.

  // [-9, -8, 2, 5, 6, 7]  -9 x -8 x 7 = 244
  // [-9, 2, 5, 6, 7]  -9 x 2 x 7 = -233

  const maxProduct1 = numericArr[n - 1] * numericArr[n - 2] * numericArr[n - 3];
  const maxProduct2 = numericArr[0] * numericArr[1] * numericArr[n - 1];

  // Return the maximum of the two possible products
  return Math.max(maxProduct1, maxProduct2);
}

// Example usage:
const arrNum = [1, 2, 3, 4, 5, -5, -8]; //[-8, -5, 1, 2, 3, 4, 5]
const result = maxProductOfThree(arrNum);
console.log(result);



// JavaScript challenge 2
// -Create a function that checks through an array and identifies repeated entries, and clean up the entries of the array to contain only unique items.
// -It should also count the number of the repeated entries in the original array.
// -Example:
// let myArr = [1,2,3,2,4,3,2]
// cleanUpArray(myArr);
// “2” appeared 3 times
// “3” appeared 2 times 

//Cleaned array = [1, 2, 3, 4]

// Challenge #2 Solution
function cleanUpArray(arr) {
  const counts = {}; // Object to store counts of each element

  // Use the reduce function to build the cleaned array and count occurrences
  // arr = [3, 4, 2, 2, 4]
  const cleanedArray = arr.reduce((result, item) => {
    // If the element is not in the result array, add it
    if (!result.includes(item)) {
      result.push(item);
    }

    // Update the count of the element in the counts object
    counts[item] = (counts[item] || 0) + 1;

    return result;
  }, []);

  // Iterate through the counts object and display counts for repeated entries
  for (const element in counts) {
    if (counts[element] > 1) {
      console.log(`"${element}" appeared ${counts[element]} times`);
    }
  }

  return cleanedArray;
}

// Example usage:
let Arr1 = [1, 2, 3, 2, 4, 3, 2];
const cleanedArray = cleanUpArray(Arr1);
console.log("Cleaned array =", cleanedArray);

// synchronous/asynchronous
// synchronous process means the execution of code from previoous to the next (i.e from top to bottom)
console.log("first log");
console.log("third log");
console.log("second log");

// asynchronous process means the
console.log("///////// Before setTimeOut ////////");
console.log("first log");
setTimeout(()=>{
  console.log("third log");
}, 5000)
console.log("second log");

// promises
// creating a promise will require you to use the promise ket worlds
const promise  = new Promise((resolve, reject)=>{
  let saeda = false;
  if (saeda) {
    resolve("promise resolved");
  }
  reject("promise rejected");
})
//  using/ claiming the promise
promise
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
// console.log(window);
// fetch API
// fetch is a promise base function that used to make asynchronous request to the saver.It retures a promise.

fetch("https://restcountries.com/v2/all")
// parse the response
  .then(res => res.json())
  .then(favdevs => {
    console.log(favdevs);
    // console.log(favdevs[10]);
    
  })
  //   assignment 1
  // https://jsonplaceholder.typicode.com/posts
  // fetch the data from the url above and use async/await to consume the response


// async/await






// const date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.getUTCFullYear());


