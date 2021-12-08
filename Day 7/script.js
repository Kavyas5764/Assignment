//using var keyword
var greet = "Hey hii welcome";// greet is globally scoped

function newfunction(){
    var Hello = "Hello";// Hello is function scoped
}

console.log(Hello);

//using let keyword:
let greeting = "say hii";
if(true){
    let greeting = "say hello instead";
    console.log(greeting);
}
console.log(greeting);


//using const keyword:
const fruit = "Apple";
console.log(fruit);

function newfunction1(){
    const fruit = "Apple";
    console.log(fruit);
}

//using arrow function:
let fruitName = (fruitName) => {
    console.log(fruitName);
}
fruitName("Mango","orange");

//using template literals:
let  emailAddress = "abc@gmail.com";
let password = "hello";
console.log(`The email address is: ${emailAddress} ${password}`);




