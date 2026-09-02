//Practice Q1

let arr = ["Google", "Amazon", "Microsoft", "Habib Bank"];

let newArr = arr.splice(2, 1, "Faisal Bank");
console.log(newArr);

console.log(arr);

//Array.length();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;//return the length

//The length property can also be used to set the length of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits.length = 2;

//------------------------------------------------------

//Array.toString()

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();//return the converted the array to string || every object in js has toString method

//-------------------------------------------------------

//Array.at()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);//return the element on this index

//------------------------------------------------------

//Array.join

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits= fruits.join(" * ");//join the array

//-----------------------------------------------------------

//Array.pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();//return the popped out elemnet from the end of the array

//-----------------------------------------------------------

//Array.join

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");//add this in the end and return the new array length

//-----------------------------------------------------------


//Array.shift()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();//return the shifted out elemnet from the start of the array

//-----------------------------------------------------------

//Array.unshift()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi");//add this in the start and return the new array length

//-----------------------------------------------------------


//Array1.concat(Array2)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);//return the concated new array and not change the orignal array; || can take any number of arguments

//----------------------------------------------------------

//Array.splice()

const myGirls = ["Banana", "Orange", "Apple", "Mango"];

Array.splice(1,1,"musaib");//The splice() method returns an array with the deleted items and change the existing array

//----------------------------------------------------------

//Array.toSpliced()

const myGirls = ["Banana", "Orange", "Apple", "Mango"];

Array.toSpliced(1,1,"musaib");//The toSpliced() method returns an array with the deleted items and also return new array

//----------------------------------------------------------

//Array.slice()

const myGirls = ["Banana", "Orange", "Apple", "Mango"];

Array.slice(1,3);//The splice() method returns an array with the deleted items

//----------------------------------------------------------






