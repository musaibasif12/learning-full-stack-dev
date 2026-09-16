function addNumbers(val1, val2, ...val) {
  let num = val1 + val2;
  val.forEach((item) => {
    num += item;
  });
  return num;
}

console.log(addNumbers(12, 434));

function userName(anyObj) {
  return `Welcome ${anyObj.userName}`;
}

const user = {
  userName: "Musaib",
  price: 699,
};
console.log(userName(user));

const newArray = [200, 400, 600, 800];

function array(list) {
  return list[2];
}

console.log(array(newArray));
