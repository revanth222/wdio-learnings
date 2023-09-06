console.log("Hello, World!")


/**
 * var is used until 2015
 * let for all time
 * const is used to declare a variable, intialize value which is readable
 * const cannot be re-assigned
 * const variable name must be CAPITALISED
 */

/**
 * var, let and const use cases
 */

// let

let a = 123
a=345
console.log("value of a is", a)

// OUTPUT
// Hello, World!
// 345

a="Hello"
console.log("value of a is", a)

// OUTPUT
// Hello, World!
// value of a is 345
// value of a is Hello


// const
// const variable must be CAPITALISED

const A = 123
// A="HI" This is commented to make the file error free
console.log(A)

// const value cannot be re-assigned 
// Hello, World!
// value of a is 345
// value of a is Hello
// file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_stmts.js:38
// A="HI"
//  ^

// TypeError: Assignment to constant variable.
//     at file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_stmts.js:38:2
//     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)


const TEST= "Constant variable declaration"
// console.log(test)  This is commented to make the file error free

// Ideal to follow CAPITAL LETTERS

// const SAMPLE; Commenting this line to make file error free
// console.log(SAMPLE)  Commenting this line to make file error free

// file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_stmts.js:61
// const SAMPLE;
//       ^^^^^^
// SyntaxError: Missing initializer in const declaration
//     at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:119:18)
//     at ESMLoader.moduleProvider (node:internal/modules/esm/loader:468:14)
//     at async link (node:internal/modules/esm/module_job:68:21)

// let  variable type must be declared inside loop

let letVariable = 123;
if(true){
    let letVariable = 678
    console.log("The value of variable using let inside if loop is:", letVariable);
}
console.log("The value of variable using let outside if loop is:", letVariable);

// const variable type must be declared inside loop

const constVariable = 123;
if(true){
    const constVariable = 678
    console.log("The value of variable using const inside if loop is:", constVariable);
}
console.log("The value of variable using const outside if loop is:", constVariable);

// var variable type must be declared inside loop

var varVariable = 123;
if(true){
   var varVariable = 678
    console.log("The value of variable using let inside if loop is:", varVariable);
}
console.log("The value of variable using let outside if loop is:", varVariable);
