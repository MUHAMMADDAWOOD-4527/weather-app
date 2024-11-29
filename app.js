const inputBox = document.querySelector('.inputbox');  // Use querySelector for single element
const searchBtn = document.querySelector('#searchBtn');  // Use querySelector for single element
const temperature = document.querySelector('.temperature');  // Use querySelector for single element
const description = document.querySelector('.description');  // Use querySelector for single element
const humidity = document.querySelector('#humidity');  // Use querySelector for single element
const windSpeed = document.querySelector('#wind-speed');  // Use querySelector for single element

async function checkWeather(city) {
    const apiKey = "828d134ce6d90ef7e6538237cc4ae4bf";  // Correct variable name
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;  // Fixed template literal

    try {
        const response = await fetch(url);  // Fetch the data
        const weatherData = await response.json();  // Use .json() to parse the response

        // Extract data from the API response
        const temp = weatherData.main.temp;
        const weatherDesc = weatherData.weather[0].description;
        const humidityData = weatherData.main.humidity;
        const windSpeedData = weatherData.wind.speed;

        // Update the DOM with the fetched weather data
        temperature.innerHTML = `${Math.round(temp)}°C`;  // Display the temperature
        description.innerHTML = weatherDesc;  // Display the weather description
        humidity.innerHTML = `${humidityData}%`;  // Display the humidity
        windSpeed.innerHTML = `${windSpeedData} km/h`;  // Display the wind speed

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();  // Get the city name from the input box
    if (city) {
        checkWeather(city);  // Call the checkWeather function if the city is not empty
    } else {
        description.innerHTML = 'Please enter a city name.';  // Display the weather description

        // alert("Please enter a city name.");
    }
});

