// //Callback function

// function getData(getId, getNextData) {
//   setTimeout(() => {
//     console.log(getId);
//     getNextData();
//   }, 1500);
// }
// //Callback hell
// console.log("Loading Data1...");
// getData(450, () => {
//   console.log("Loading Data2...");
//   getData(350, () => {
//     console.log("Loading Data3...");
//     getData(250, () => {
//       console.log("Loading Data4...");
//       getData(150, () => {});
//     });
//   });
// });

// function getUserId(userId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(userId);
//       resolve("Success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }
// //PROMISE CHAINING
// console.log("Fetching data1...");
// getUserId(1235460002120046021)
//   .then((res) => {
//     console.log("Fetching data2...");
//     return getUserId(123546120046021);
//   })
//   .then((res) => {
//     console.log("Fetching data3...");
//     return getUserId(1235460002120021);
//   })
//   .then((res) => {
//     console.log("Fetching data4...");
//     return getUserId(1235402120046021);
//   })
//   .then((res) => {
//     console.log("Completed");
//   });

function getUserId(userId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(userId);
      resolve("Success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

(async function () {
  console.log("loading...");
  await getUserId(2323);
  console.log("loading...");
  await getUserId(223);
  console.log("loading...");
  await getUserId(233);
  console.log("loading...");
  await getUserId(323);
  console.log("Done!");
})();
