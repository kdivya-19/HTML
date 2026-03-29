

let ip = document.getElementById("input");
let btn = document.getElementById("btn");
let tempEl = document.getElementById("temp");
let cityEl = document.getElementById("cityName");

async function fetchData(city) {
    try {
        const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'cdcee97ad7msh1b2d0f0306a292fp19774ejsna6c4a5bf22da',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();

        tempEl.innerText = `${Math.round(result.main.temp)}°C`;
        cityEl.innerText = result.name;

    } catch (error) {
        console.error(error);
        tempEl.innerText = "Error";
    }
}

btn.addEventListener("click", () => {
    if (ip.value.trim() !== "") {
        fetchData(ip.value);
    }
});