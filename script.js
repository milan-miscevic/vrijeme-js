function fahrenheitToCelsius(temperature)
{
  return ((temperature - 32) * 5 / 9).toFixed(1);
}

function loadPurpleAir(url, field)
{
  fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById(field).innerText = fahrenheitToCelsius(data.results[0].temp_f)
  })
  .catch(error => {
    document.getElementById(field).innerText = '[Greška]';
  })
}

document.addEventListener("DOMContentLoaded", function() {
  loadPurpleAir('http://www.purpleair.com/json?show=33637', 'purple-air-centar');
  loadPurpleAir('http://www.purpleair.com/json?show=33099', 'purple-air-mejdan');
  loadPurpleAir('http://www.purpleair.com/json?show=43831', 'purple-air-budzak');
  loadPurpleAir('http://www.purpleair.com/json?show=33627', 'purple-air-trn');
  loadPurpleAir('http://www.purpleair.com/json?show=44385', 'purple-air-jajce');
});
