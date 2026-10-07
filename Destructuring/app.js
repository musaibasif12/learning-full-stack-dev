// const arr = ["musaib", "anas", "shahzaib", "qasim", "umais"];

// let [m, a, ...rest] = arr;

// // console.log(m, a, rest);

// let obj = { name: "knaka", age: 18, city: "Karachi" };

// let {age} = obj;
// console.log(name, age);

// let a = 9;
// let b = 3;

// [a, b] = [b, a];

// console.log(a , b);


const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5

