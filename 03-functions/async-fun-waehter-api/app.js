// const para = document.querySelector("#show-weather");

// async function getWeather(event) {
//   event.preventDefault();
//   try {
//     const city = document.querySelector("#city-input").value;
//     if (!city) return;
//     para.innerHTML = "Loading...";
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
//     );
//     let data = await response.json();

//     if (data.error) {
//       console.log(data.error);
//       throw new Error(data.error.message);
//     }
//     para.innerHTML = data.current.temp_c;
//   } catch (err) {
//     para.innerHTML = err.message;
//     // console.log(err);
//   }
// }



