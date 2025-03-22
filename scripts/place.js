const today = new Date();
currentyear.innerHTML = today.getFullYear();
currentdatetime.innerHTML = document.lastModified;

area.innerHTML = "3.79 million square miles"; // Figure is from a Bing search
population.innerHTML = "333,290,000"; // Figure is from a Bing search
capital.innerHTML = "Washington D.C.";
language.innerHTML = "English";
currency.innerHTML = "U.S. Dollar";
timezone.innerHTML = "UTC-5:00 through UTC-10:00";
callingcode.innerHTML = "+1";
internettld.innerHTML = ".us";

const temperatureValue = 35;
temperature.innerHTML = `${temperatureValue}° F`;
conditions.innerHTML = "Sunny";

const windSpeedValue = 6;
wind.innerHTML = `${windSpeedValue} MPH`;

function calculateWindChill(temp, ws) {
    if (temp <= 50 && ws > 3) {
        let windChill = 35.74 + 0.6215 * temp - 35.75 * (ws ** 0.16) + 0.4275 * temp * (ws ** 0.16);
        let windChillRounded = windChill.toFixed(1); // Got help for rounding from a Bing search
        return `${windChillRounded}° F`;
    }
    else {
        return "N/A";
    }
}

windchill.innerHTML = calculateWindChill(temperatureValue, windSpeedValue);