/**
 *
 * let a = 10 -> Number
 * let b = 20.20
 * let c = "codeseed"
 * let d = 'a'
 * let e = [1,2,3]
 * let f = true
 *
 *
 */

/**
 * Data Types in JavaScript
 * Number -> ex - 123 , 1.2 , -1.8
 * String -> "str" , "amit" , "a", 'a
 * Boolean -> true , false
 * Undefined
 * Null
 * Object
 * Array
 * function
 *
 */

// console.log(x);
// var x = 10;

let m;
m = 10;
console.log(m);

let n = null;
console.log(typeof n);

// identifier = [val1 , val2 ,val3]
// let a = 20;

let arr = [1, 2, 3];

console.log(arr);

/**
 * Object
 *
 * identifier ={
 * key : "value"
 * key : 1
 * }
 *
 *
 */

const person = {
  name: "amit",
  lastName: "kasabe",
  salary: Infinity,
};

console.log(person.name);

const People = [
  {
    Name: "Shruti",
    College: "ICMS",
  },
  {
    Name: "Payal",
    College: "ICMS",
  },
];
console.log(People[0].Name);

// let ,var , const

var myName = "amit";
var myName = "Vinay";

// let
const lmn = "xyz";
// lmn = "asdsad";

// console.log(myName);

/**
 *
 * int a = 10;
 * int a = 20;
 *
 *
 */

let amit = 10;
amit = 20;

var a = 20;
var a = 32;
console.log(a);

// var has a global scope
// what is hoisting in javascript
{
  let x = 20;
}

console.log(x);
const x = 20;

// function

/*

function function_name(params){
    // function body 
}

*/

function myname() {
  //   var ar = ["amit", "shashikant", "kasabe"];
  //   var x = 10;
  //   return ar;
}

console.log(myname());

// map

// console.log(x);

// let ax = [1, 2, 3, 4, 5];

// for (let i = 0; i < ax.length; i++) {
// //   console.log(ax[i] * ax[i]);
//     if(ax[i] %2==0)
//     {
//         console.log(`even number ${ax[i]}`);
//     }
// }

let ax = [1, 2, 3, 4, 5];
ax.map(function (e) {
  if (e % 2 == 0) {
    console.log(`${e} is even `);
  }
});

// template literals

let studentName = "shubham";
let studentSalary = 150000;
let studentId = 123;

console.log(
  "my name is " +
    studentName +
    " and my salary is " +
    studentSalary +
    "my student id is " +
    studentId
);


console.log(` my name is ${studentName} and my salary is ${studentSalary} and my student id is ${studentId}`);
// camelcase

// amit_kasabe



