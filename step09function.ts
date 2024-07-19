//step09_a
//Named or normal function
function sum(x:number,y:number):number {
     
    return x + y
}
 let total = sum(3,4) * 4 ;
 console.log(total);
  
//Anonymous function/ without names
let myAdd = function (x:number,y:number):number{
    return x + y
} 
console.log(myAdd(4,6));
// Anonymous function with explict type
let myAdd2: (x:number,y:number) =>number = function (x:number,y:number):number{
    return x+y
}
console.log(myAdd2(10,40));

//Arrow / Lamda function
let myAd3 = (a:number,b:number) => a +b
console.log(myAd3(45,5));
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

 //step09_b optional parameter   name function
 function buildName(firstName:string,lastName?:string):string {
    if(lastName){
    return firstName + " " + lastName;
}else {
    return firstName;
}
 }
 let result1 = buildName("Danish");   // ok
 //let result2 = buildName("Danish","Ali","Sir");//error to many parameter
 let result3 = buildName("Danish","Ali"); // also ok

 // optional parameter anonymous function
 let buildName2: (firstName:string,lastName?:string) => string = 
 function(firstName:string,lastName?:string):string{
    if(lastName){
    return firstName + " " + lastName
    }else{
        return firstName
    }
 }
 console.log(buildName2("danish"));// ok
 //console.log(buildName2("danish","Ali","sir"));//error
 console.log(buildName2("danish","Ali"));//also ok

 // rest parameter named function
 function buildName3(firstName:string, ...restOfName:string[]) {
    return firstName + " " + restOfName.join("-")
 }
 let empolyeName:string = buildName3("Danish","Asad","Asif","Ali","Amir") 
 console.log(empolyeName);

 // rest parameter with anonymous
 let buildNameFun:(firstName:string,... rest:string[])=> string =
 function (firstName:string,... rest:string[]):string {
    return firstName + " " + rest.join("-")
 }
 console.log(buildNameFun("Danish","Asad","Asif","Ali","Amir"));
 
 
 