let a=10; // gives the same value ignoring the scope bloks updated value
var b=20; // gives the upadated value which is changed in the scope block

// scope block
{
    let a=200;
    var b=300;
    console.log(a,b);
}
console.log(a,b);

// Variable Declarations

let ID=10; // Number
let EmailId="pqrs123@gmail.com";// string
let userExit=true; //boolean
let name=""; //undefined
let num=null; // null

console.log(ID);
console.log(EmailId);
console.log(userExit);
console.log(name);
console.log(num);

console.log(typeof(ID));
console.log(typeof(EmailId));
console.log(typeof(userExit));
console.log(typeof(name));
console.log(typeof(num));