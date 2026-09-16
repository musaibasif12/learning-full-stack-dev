//"use strict"  //this is used in js to run code in strict mode
let sym1 = Symbol("key1");

const jsUser = {
  firstName: "Anas",
  lastName: "Khan",
  fullName: "Musaib Khan",
  age: 18,
  email: "musaibasif1122@gmail.com",
  isLoggedIn: true,
  subscribed: false,
  greetings: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
// console.log(jsUser.greetings());

Object.freeze(jsUser); // freezed the object

console.log((jsUser.firstName = 19)); // this will ignore and not change the orignal value becuase of freeze()
console.log(jsUser.firstName);

const students = {
  class: {
    student1: {
      fullname: "musaib khan",
    },
  },
};
const combinedObj = { ...jsUser, ...students }; // spread operator used to combine two or more objects and arrays

console.log(students.hasOwnProperty("class")); // check wether the key is there or not return boolean

const keyValuePairs = Object.entries(combinedObj); // entries give array in key:value
const obj = Object.fromEntries(keyValuePairs); // fromEntries gives the object from the array of entries

console.log(obj);

// shaloow vs deep copy

const user = { 
  name: "Anas", 
  social: { twitter: "@anas" } 
};

// Shallow copy
const copy = { ...user };
copy.social.twitter = "@new"; // Yeh asli 'user' ka twitter bhi badal dega!

// Deep Copy (Best modern tareeqa)
const deepCopy = structuredClone(user);
deepCopy.social.twitter = "@purelyNew"; // Ab asli user safe rahega

//---------------------------------

//safety net
const user1 = { name: "Anas" };

// console.log(user.address.city); // ❌ Crash: Cannot read properties of undefined
console.log(user.address?.city); //  Safe: 'undefined' return karega, crash nahi hoga
//---------------------------------------

//default values

const user2 = { name: "Anas" };
const { name, country = "Pakistan" } = user;

console.log(country); // Output: Pakistan (kyunki object mein country nahi tha)
