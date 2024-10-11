const convertToCelsius = function(degreesFahrenheit) {
  let celcius = (degreesFahrenheit - 32) * 5 / 9;
  let rounded = Math.round(celcius * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(degreesCelcius) {
  let fahrenheit = (degreesCelcius * 9 / 5) + 32;
  let rounded = Math.round(fahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
