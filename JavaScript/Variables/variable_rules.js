console.log("Hello, World!")

/**
 * Variable name must start with (a-z), (_), ($)
 * Variable names are case sensitive
 * variable names must not contain key words(if, else, continue, break, throw, try, catch)
 * can create multiple variables in one declaration (multiple variables)
 * Cannot have same name for two diiferent variables (function name, object name)
 * Variable data type is undefined when created.
 */

//  Variable name must start with (a-z), (_), ($) 
//  can create multiple variables in one declaration (multiple variables)

let a = 12, b= "revanth"

// let if = 123; (This is the keyword, hence cannot be used)


// * Variable names are case sensitive

// file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_rules.js:19
// console.log(A)
//             ^

// ReferenceError: A is not defined
//     at file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_rules.js:19:13
//     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

console.log(A)

// * Cannot have same name for two diiferent variables (function name, object name) 

// file:///Users/revanthrouthu/Documents/Learnings/WebdriverIO-E2E-Framework/JavaScript/Variables/variable_rules.js:35
// function greeting(){
// ^

// SyntaxError: Identifier 'greeting' has already been declared
//     at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:119:18)
//     at ESMLoader.moduleProvider (node:internal/modules/esm/loader:468:14)
//     at async link (node:internal/modules/esm/module_job:68:21)

let greeting="Hello"
function greeting(){
    
}