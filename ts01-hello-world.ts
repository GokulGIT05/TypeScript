
console.log("TypeScript Basics");

// 1. Hello World
var helloWorld = () => console.log("Printing Hello World form TS");
helloWorld();

// 2. Types Declaration. 

// This is called post-fix declaration
var numberType : number;
var booleanType: boolean;
var stringType : string;

numberType = 10;
// numberType = "10";

booleanType = true;

stringType = "Gokul";
// stringType = true;
console.log(numberType,booleanType,stringType);

var undefinedType: undefined;
var  nullType: null; // outpuyt also undefined
console.log(undefinedType, nullType);