function currentLocation(location) {
  const API_KEY = "2c19020fb626211467027db30c0910ef";
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherBox = document.querySelector(".weatherBox");
      const weatherImgBox = document.querySelector(".weatherImg");
      const weatherColumn = weatherBox.querySelector(
        ".weatherdescription span"
      );
      const weatherTextColumn = weatherBox.querySelector("span:first-child");
      const city = data.name;
      const weatherImg = document.createElement("img");
      weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const weather = `${city} / ${data.main.temp}`;

      weatherTextColumn.innerText = data.weather[0].description;
      weatherColumn.innerText = weather;
      weatherImgBox.prepend(weatherImg);
    });
}

function locationLoadfailed() {
  console.log("현재 위치를 찾을수 없습니다.");
}
navigator.geolocation.getCurrentPosition(currentLocation, locationLoadfailed);
