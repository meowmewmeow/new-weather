let now = new Date();

let container = document.querySelector(".container");

let hours = now.getHours();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

container.innerHTML = `${day} ${hours}:${minutes}`;

function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = ` ${temperature}°C`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let currentCity = document.querySelector(".cityName");
  currentCity.innerHTML = `${searchInput.value}`;
  currentCity.style.color = "rgba(39, 17, 119, 0.76)";
  currentCity.style.fontWeight = "bold";
  let apiKey = "84e6c4931d6059fa123cd32aecf7e033";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showCurrentWeather);
}
let form = document.querySelector(".search-location");
form.addEventListener("submit", search);

function handlePosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "84e6c4931d6059fa123cd32aecf7e033";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}
navigator.geolocation.getCurrentPosition(handlePosition);

let now = new Date();

let container = document.querySelector(".container");

let hours = now.getHours();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

container.innerHTML = `${day} ${hours}:${minutes}`;

function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = ` ${temperature}°C`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let currentCity = document.querySelector(".cityName");
  currentCity.innerHTML = `${searchInput.value}`;
  currentCity.style.color = "rgba(39, 17, 119, 0.76)";
  currentCity.style.fontWeight = "bold";
  let apiKey = "84e6c4931d6059fa123cd32aecf7e033";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showCurrentWeather);
}
let form = document.querySelector(".search-location");
form.addEventListener("submit", search);

function handlePosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "84e6c4931d6059fa123cd32aecf7e033";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}
navigator.geolocation.getCurrentPosition(handlePosition);
