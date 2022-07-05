let x, y, z;
var p;

const s = 20;

let xyz = 'xyz';
xyz = 'pqr';

x = 5;
y = 6;
z = x + y;

console.log('x:', x, 'y:', y, 'z:', z);

let w = 4;
let v = 2;

console.log('w+v=', w + v); //Addition
console.log('w-v=', w - v); //Subtraction
console.log('w*v=', w * v); //Multiplication
console.log('w**v=', w ** v); //Expo
console.log('w/v=', w / v); //Division
console.log('w%v=', w % v); //Modulus
console.log('w++=', w++);
console.log('v++=', v++);

// a==b (Compares just value)
// a===b (Compares values and type)

// Difference between == and ===
let a = 3;
let b = 3;

console.log("\na==b : ", a == b); // Compares just value
console.log("a===b : ", a === b); // Compares values and type



let arr = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
console.log(arr);

let str1 = 'Huzefa';
console.log('String Length: ', str1.length);

//slice(startIndex, endIndex)
console.log(str1.slice(3, 5));

//substring(startIndex, endIndex)

//substr(startIndex, count)

//Functions
//let answer = mult(2, 3);

//function


// Array Fundamentals

let arr1 = [0, 1, 2, 3, 4, 5];

console.log(arr1.sort());
console.log(arr1.length());
console.log(arr1.reverse());

const result = arr1.filter((item) => {
    return item >= 4;
});

console.warn("\nFiltered value from array: ", result);