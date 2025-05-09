function getWeather() {
  const city = document.getElementById("city").value;
  fetch(`https://api.weatherapi.com/v1/current.json?key=56b57bf5a5f04945853112716250805=${city}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h3>${data.location.name}</h3>
        <p>${data.current.temp_c} °C, ${data.current.condition.text}</p>
      `;
    })
    .catch(error => {
      document.getElementById("result").innerText = "City not found.";
    });
}
