//JavaScript operators
//_______________________________
//_________________________________


//Assignment operator
let a = 15;
let  b = 5;
let c = 16
let d = 4

//Arithmetic Operators

//Addition
console.log("the answer is first example ",a+b);
console.log ("the answer is ",c+d);
//Subtraction
console.log("the answer is ", a-b);
console.log ("the answer is ", c-d);
//Division
console.log( "the answer is ", a/b);
console.log ( "the answer is ",c/d);
//Multiplication
console.log("the answer is ",a*b);
console.log ("the answer is ",c*d);

//Comparison operators
console.log(a>b);
console.log(a<d)
console.log(a!=b)

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

//Bitwise Operation
// bitwise AND operator example

let x = 12; 
let  y = 25; 

result = x & y; 
console.log(result);  

// bitwise OR operator example
let x1 = 12; 
let  y1 = 25; 

result2 = x1 | y1; 
console.log(result2); 

// let Science = "Physics, Chemistry, Biology, Technical Drawing"; 
// let Social  ="Accounting, Commerce, Marketing, Geography";
// let Arts ="Government, Economics, Literature, History";
// let General ="English, Mathematics";

// let Class = prompt("enter your class");
// if (Class == Science){
//     alert("Physics, Chemistry, Biology, Technical Drawing");

// }else if(Class == Social){
//     alert("Accounting, Commerce, Marketing, Geography");
// }
// else if(Class == Arts){
//     alert("Government, Economics, Literature, History");
// }
// else{
//     alert("English, Mathematics")
// }

for (let i=1;i<20; i+=7){
    console.log(i)
}