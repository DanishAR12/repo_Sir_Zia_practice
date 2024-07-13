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
console.log(chalk.blue.bgWhite.bold(`inshallah, in`, chalk.red.underline(`${60 - user_answer.age}`) + ` years you will be`, chalk.yellow(`60`) + `years old.`));
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
typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed();
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
//step05_a_object
let teacher = {
    name: "Hira Khan",
    age: 28,
};
console.log(teacher);
console.log(teacher.name);
console.log(teacher["age"]);
// Type Declaration
let student;
student = {
    name: "Ali Ahmed",
    age: 30,
};
console.log(student.name);
console.log(student["age"]);
// step05_b_aliasing
//anonymous type
let teacher1 = {
    name: "Danish",
    age: 33,
};
let student2 = {
    name: "Hira khan",
    rollNo: 12345,
};
console.log(student2);
console.log(student2.name); // acesses dot notation
console.log(student2["rollNo"]); // acesses square notation
let storeManager = {
    name: "Ahmed",
};
let ball = {
    diameter: 10,
};
let sphaer = {
    diameter: 20,
};
sphaer = ball;
ball = sphaer; //because properties same
let tube = {
    diameter: 15,
    color: "green",
};
ball = tube; // property diameter is 'ball'
//tube = ball; //  error property color missing 'ball'
let myType = { id: 1, name: "Ali" };
//case01
myType = { id: 2, name: "Asad" }; // can only asigin property value change
//case02
//myType = {id:2,person_name:"Asad"};   // error property renamed or missing
//case03
let x;
x = { id: 2, name: "sajjad", fullName: "sajjad mahmood", anotherName: "asif" };
//case04
//myType = { id: 2, name: "asad", age: 33 }; // error acesses property
//case when stale object literl are asigned to a variable.
let myType2 = { id: 2, name: "Asad" };
myType = myType2; // can only asigned same properties fresh & stale object
let myType3 = { id: 2, person_name: "Asad" };
// myType = myType3; //error renamed or missing property fresh & stale object
let myType4 = { id: 3, name: "Asad", age: 23 };
myType = myType4; // no error mytype property exist mytype4.
//myType4 = myType; // error mytype4 property does not exist mytype.
let x1;
let y1 = { id: 1, fullName: "Asad Ali" };
x1 = y1; // ok fullName matched index signture.
const myBook = {
    authur: {
        firstName: "Zia",
        lastName: "Khan",
    },
    book_Name: "my best book",
};
console.log(myBook.authur.lastName);
let student3 = {
    name: "Danish",
    rollNo: 345,
    course: {
        course1: "typescript",
        course2: "python",
        course3: "php",
    },
};
console.log(student3.course.course2);
let obj1 = {
    teacherName: "Hamza Alvi",
    teacher_id: 456,
    student_id: 789,
    studentName: "Danish",
};
console.log(obj1.studentName);
console.log(obj1.teacher_id);
//step05f_any_unknown_never
// any type
// any uses when data fatch kar raha ha api sa kisi ap ko nahi pata hota ya jo data
//ay ga is ki type kya ha.is error ko remove karna ka lya type any karta ha.
let a2; //ok
a2 = 23;
a2 = "Ali";
a2 = true;
a2 = [1, 2, 3];
a2 = {
    name: "danish",
    age: 33,
};
a2 = null;
a2 = undefined;
a2 = Math.random();
a2 = () => {
    console.log("Hello World!");
};
// unknown type
let b2;
b2 = 23;
b2 = "Ali";
b2 = true;
b2 = [1, 2, 3];
b2 = {
    name: "danish",
    age: 33,
};
b2 = null;
b2 = undefined;
b2 = Math.random();
b2 = () => {
    console.log("Hello World!");
};
//Asigning value of type unknown to variable other data types.
let c;
let c1 = c;
let c2 = c;
//let c3:boolean = c; // error
//let c4:string = c;  // error
// never type
function error(message) {
    throw new Error(message); // function return not
}
//infered type never
function fail() {
    return error("somethings failed");
}
//Function returning never must not have a reachable end point.
function infiniteloop() {
    while (true) { }
}
