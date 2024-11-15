const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('description');

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}

&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;
            tempElement.textContent = `${data.main.temp}°C`;
            descElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});