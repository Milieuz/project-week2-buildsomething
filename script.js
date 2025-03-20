let apiKey  = '9a0da6b1c5df4f69b52214228240611';
let baseUrl = 'https://api.weatherapi.com/v1/current.json';

let form = document.querySelector('form');
let input = document.querySelector('input');

let display = document.querySelector('.weather-display');
let tempDisplay = document.querySelector('.temp-display');
let locationDisplay = document.querySelector('.location-display');
let conditionDisplay = document.querySelector('.condition-display');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Send request to API first X
  // Get data back X
  // Attach the data back to the html so the user can see it X
  
  //Construct our URL
  //Need to include API key, query
  
  let combinedUrl = baseUrl + '?key=' + apiKey + '&q=' + input.value;
  
  console.log(combinedUrl);
  
  fetch(combinedUrl)
  .then((request) => request.json())
  .then((data) => {
    
    console.log(data.current.temp_f);
    
    let tempF = data.current.temp_f;
    let tempC = data.current.temp_c;
    let condition = data.current.condition.text;
    let iconSrc = data.current.condition.icon;
    
    locationDisplay.innerHTML = 'Curently, the weather in ' + data.location.name + ', ' + data.location.region + ' is: ';
    tempDisplay.innerHTML = tempF + '°F  /  ' + tempC + '°C';
    conditionDisplay.innerHTML = 'The current condition is: ' + condition;
    
  });
  
});