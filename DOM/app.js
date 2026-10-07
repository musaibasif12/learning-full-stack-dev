const body = document.querySelector("body");
// const h1 = document.querySelector("h1");
// h1.classList.add("musaib")
// h1.classList.remove("musaib")
// h1.classList.toggle("musaib")
// console.log(h1.classList);




const h1 = document.createElement("h1");
const text1 = document.createTextNode("hello world");
const text2 = document.createTextNode("kndjnjksdnfkadsnjbznsjbnasmnjkzjnsdkjjnsfnkszmjkihsjnsdmfdkj");
const p = document.createElement("p");

// div.append(h1);
p.appendChild(text2)
h1.appendChild(text1);
body.appendChild(h1);
body.appendChild(p);

