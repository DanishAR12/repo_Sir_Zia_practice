//step09_a
//Named or normal function
function sum(x, y) {
    return x + y;
}
let total = sum(3, 4) * 4;
console.log(total);
//Anonymous function/ without names
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(4, 6));
// Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(10, 40));
//Arrow / Lamda function
let myAd3 = (a, b) => a + b;
console.log(myAd3(45, 5));
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//step09_b optional parameter   name function
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let result1 = buildName("Danish"); // ok
//let result2 = buildName("Danish","Ali","Sir");//error to many parameter
let result3 = buildName("Danish", "Ali"); // also ok
// optional parameter anonymous function
let buildName2 = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildName2("danish")); // ok
//console.log(buildName2("danish","Ali","sir"));//error
console.log(buildName2("danish", "Ali")); //also ok
// rest parameter named function
function buildName3(firstName, ...restOfName) {
    return firstName + " " + restOfName.join("-");
}
let empolyeName = buildName3("Danish", "Asad", "Asif", "Ali", "Amir");
console.log(empolyeName);
// rest parameter with anonymous
let buildNameFun = function (firstName, ...rest) {
    return firstName + " " + rest.join("-");
};
console.log(buildNameFun("Danish", "Asad", "Asif", "Ali", "Amir"));
export {};
