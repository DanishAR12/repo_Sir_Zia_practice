// step00_helloworld
let message = "Hello World!";
console.log(message);
console.log("Congratulation! I am a programmer.");
/*step00-a
//JSON stands for Javascript Object Notation.
//JSON is a text-based data format that is used to store and transfer data.
// JSON syntax
let user =
{
 "name": "Vipin",

 "age": 21,

 "gender": "male",
}
JavaScript objects can contain functions but JSON not.
JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
 Access json data dot & square notation.
 console.log(user.name)     // Vipin
 console.log(user["age"])   //21
*/
/*step00-b     syntax error
lett message2:string ="Hello World";    //error
console.log(message2);

step00_c     Type error
let message3:string = "Hello World";
console.logger();       //error

step00-d     Assignablity error
let message4:string = "Hello World!";
message4 = 10;       //error
*/
//step01_strong typing
let e = "Pakistan";
e = "USA";
let f = 10;
f = 20;
let g = true;
//  Type Inference
let h = "Pakistan";
h = "USA";
let j = 30;
let k = true;
k = false;
/*step02_var_let_const
const: when we decleare a variable to const.it's value not change(not re-assign)because it's a constant.for exapmle (pi value 3.14), (id card no),(account no)not change.
let: it is block-scope variable.when we declare a variable to let.inside the curly brackets (means in block).its  not acessable out of block.
var: it's function block scope variable.when we declare variable var inside function.it is not acessable out of function.but var variable acessable out of block.
 */
// step03_a & b
import a from "./first.js";
import { b, c as d } from "./second.js";
console.log(a + b + d);
// step03_c & d
import inquirer from "inquirer";
import chalk from "chalk";
const user_answer = await inquirer.prompt([
    {
        message: chalk.green("Enter Your Age:"),
        type: "number",
        name: "age",
    },
]);
console.log(chalk.blue.bgWhite.bold(`inshallah, in`, chalk.red.underline(`${60 - user_answer.age}`) +
    ` years you will be`, chalk.yellow(`60`) + `years old.`));
// step04_union_literal
let myName;
myName = null;
console.log(myName);
myName = "zia";
console.log(myName);
//myName = undefined;    // error type is not define 'undefine'
//myName = 32;        // error type is not define 'number'
let myAge;
myAge = 16;
console.log(myAge);
console.log(myAge.toString());
//console.log(myAge.toLowerCase());  // error 
myAge = "Dont know";
console.log(myAge);
console.log(myAge.toString());
console.log(myAge.toLowerCase());
console.log(myAge.toUpperCase());
let newAge = Math.random() > 0.6 ? "khan" : 60;
//console.log(newAge.toUpperCase());  // error
if (newAge === "khan") {
    // type of newAge is string
    newAge.toUpperCase(); //can be called
}
if (typeof newAge === "string") {
    newAge.toLowerCase();
}
typeof newAge === "string"
    ? newAge.toUpperCase()
    : newAge.toFixed();
let age;
age = 19;
age = "died";
age = "unknown";
//age = "living"   // error type does not exit
let zia;
zia = "zia";
//zia = "khan"   // error
let yourName = Math.random() > 0.6 ? "Hira khan" : undefined;
if (yourName) {
    yourName.toUpperCase();
}
//yourName.toUpperCase()  //error
yourName?.toUpperCase();
let data;
