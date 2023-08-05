var city = 'Cairo';
async function weather() {
    let myResp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=98c9207409674a30b0835544230208&q=${city}&days=3`);
    let finalWeather = await myResp.json();

    let date = new Date(finalWeather.forecast.forecastday[0].date);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNumber = date.getDate();
    let dayName = dayNames[date.getDay()];
    let monthName = monthNames[date.getMonth()];

    let currentWeather = {
        daynumber: dayNumber,
        dayname: dayName,
        monthname: monthName,
        locationname: finalWeather.location.name,
        temp: finalWeather.current.temp_c,
        icon: "https://" + finalWeather.current.condition.icon,
        condition: finalWeather.current.condition.text,
        chanceOfRain: finalWeather.forecast.forecastday[0].day.daily_chance_of_rain + "%",
        windspeed: finalWeather.current.wind_kph,
        windDirection: finalWeather.current.wind_dir
    }

    // let tomorrow = {
        
    //     icon: "https://" + finalWeather.forecast.forecastday[1].day.condition.icon,
    //     max: finalWeather.forecast.forecastday[1].day.maxtemp_c,
    //     min: finalWeather.forecast.forecastday[1].day.mintemp_c,
    //     condition: finalWeather.forecast.forecastday[1].day.condition.text
    // }

    // let afterTomorrow = {
    //     icon: "https://" + finalWeather.forecast.forecastday[2].day.condition.icon,
    //     max: finalWeather.forecast.forecastday[2].day.maxtemp_c,
    //     min: finalWeather.forecast.forecastday[2].day.mintemp_c,
    //     condition: finalWeather.forecast.forecastday[2].day.condition.text
    // }

    document.querySelector('.today').innerHTML = `<div class="">
    <div class="d-flex justify-content-between">
    <p>${currentWeather.dayname}</p>
    <p>${currentWeather.daynumber} ${currentWeather.monthname}</p>
    </div>
    <p>${currentWeather.locationname}</p>
    <div class="d-flex justify-content-around align-items-center">
    <p class='deg'>${currentWeather.temp}<sup>o</sup>C</p>
    <img src="${currentWeather.icon}"class='w-25'>
    </div>
    <p>${currentWeather.condition}</p>
    <div class="d-flex justify-content-between">
    <p><i class="fa-solid px-1 fa-umbrella"></i>${currentWeather.chanceOfRain}</p>
    <p><i class="fa-solid px-1 fa-wind"></i>${currentWeather.windspeed}</p>
    <p><i class="fa-solid px-1 fa-compass"></i>${currentWeather.windDirection}</p>
    </div>
  </div>`

    // document.querySelector('.tomorrow').innerHTML = `<p>Tomorrow</p>
    // <img src="${tomorrow.icon}">
    // <p>${tomorrow.max}<sup>o</sup>C</p>
    // <p>${tomorrow.min}<sup>o</sup>C</p>
    // <p>${tomorrow.condition}</p>`

    // document.querySelector('.afterTomorrow').innerHTML = `<p>After Tomorrow</p>
    // <img src="${afterTomorrow.icon}">
    // <p>${afterTomorrow.max}<sup>o</sup>C</p>
    // <p>${afterTomorrow.min}<sup>o</sup>C</p>
    // <p>${afterTomorrow.condition}</p>`
}

async function weather2(){
    let myResp2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=98c9207409674a30b0835544230208&q=${city}&days=3`);
    let finalWeather2 = await myResp2.json();

    let date2 = new Date(finalWeather2.forecast.forecastday[1].date);
    const dayNames2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNumber2 = date2.getDate();
    let dayName2 = dayNames2[date2.getDay()];
    let monthName2 = monthNames2[date2.getMonth()];

    let tomorrow = {
        daynumber2: dayNumber2,
        dayname2: dayName2,
        monthname2: monthName2,
        icon: "https://" + finalWeather2.forecast.forecastday[1].day.condition.icon,
        max: finalWeather2.forecast.forecastday[1].day.maxtemp_c,
        min: finalWeather2.forecast.forecastday[1].day.mintemp_c,
        condition: finalWeather2.forecast.forecastday[1].day.condition.text
    }

    document.querySelector('.tomorrow').innerHTML = `<div class="d-flex justify-content-between">
    <p>${tomorrow.dayname2}</p>
    <p>${tomorrow.daynumber2} ${tomorrow.monthname2}</p>
    </div>
    <img src="${tomorrow.icon}">
    <p>${tomorrow.max}<sup>o</sup>C</p>
    <p>${tomorrow.min}<sup>o</sup>C</p>
    <p>${tomorrow.condition}</p>`
}

async function weather3(){
    let myResp3 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=98c9207409674a30b0835544230208&q=${city}&days=3`);
    let finalWeather3 = await myResp3.json();

    let date3 = new Date(finalWeather3.forecast.forecastday[2].date);
    const dayNames3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNumber3 = date3.getDate();
    let dayName3 = dayNames3[date3.getDay()];
    let monthName3 = monthNames3[date3.getMonth()];

    let afterTomorrow = {
        daynumber3: dayNumber3,
        dayname3: dayName3,
        monthname3: monthName3,
        icon: "https://" + finalWeather3.forecast.forecastday[2].day.condition.icon,
        max: finalWeather3.forecast.forecastday[2].day.maxtemp_c,
        min: finalWeather3.forecast.forecastday[2].day.mintemp_c,
        condition: finalWeather3.forecast.forecastday[2].day.condition.text
    }

    document.querySelector('.afterTomorrow').innerHTML = `<div class="d-flex justify-content-between">
    <p>${afterTomorrow.dayname3}</p>
    <p>${afterTomorrow.daynumber3} ${afterTomorrow.monthname3}</p>
    </div>
    <img src="${afterTomorrow.icon}">
    <p>${afterTomorrow.max}<sup>o</sup>C</p>
    <p>${afterTomorrow.min}<sup>o</sup>C</p>
    <p>${afterTomorrow.condition}</p>`
}

weather();
weather2();
weather3();

function toSearch() {
    if (document.getElementById('search').value != null) {
        city = document.getElementById('search').value;
    }
    weather();
    weather2();
    weather3();
}

var mySearch = document.querySelector('.mySearch');

mySearch.addEventListener('click', function () {
    toSearch();
})