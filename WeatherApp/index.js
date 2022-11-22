let searchName = document.getElementById('search-bar')
let searchInput = document.getElementById('search-button')

let nameCountry = document.getElementById('country-name')
let temperatureCountry = document.getElementById('country-temperature')

let imgTemperature = document.getElementById('img-temperature')
let cloudCountry = document.getElementById('country-clouds')
let humidityCountry = document.getElementById('country-humidity')
let windCountry = document.getElementById('country-wind')

const apiKey = 'deb3f006b34230dbb1a937b62fd856b3'
const absoluteURL = 'https://api.openweathermap.org/data/2.5/weather?q='

const getInfoWeather = (nameCountry) =>{
    fetch(`${absoluteURL}${nameCountry}&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.weather[0].icon)
        getCharacteristics(json)
    })
}

const getCharacteristics = (result) => {
    nameCountry.innerHTML = `<p>Weather in ${result.name}</p>`
    temperatureCountry.innerHTML = `<p>${Math.floor(result.main.temp) - 273}°C</p>`
    imgTemperature.innerHTML = `<img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" width = 80px height = 80px>`
    cloudCountry.innerHTML = `<p>${result.weather[0].description}</p>`
    humidityCountry.innerHTML = `<p>Humidity : ${result.main.humidity}%</p>`
    windCountry.innerHTML = `<p>Wind : ${result.wind.speed}km/h</p>`
}

searchInput.onclick = () =>{
    getInfoWeather(searchName.value)
}