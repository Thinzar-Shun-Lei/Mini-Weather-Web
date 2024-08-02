import Swal from "sweetalert2";
import { apiKey, inputCity, weatherCard } from "./selectors";

export const getWeatherApi = async function (city) {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(currentWeatherUrl);
  console.log(response);
  if (!response.ok) {
    Swal.fire({
      icon: "error",
      title: "No Data",
      text: "The country is not found",
      confirmButtonColor: "#1e293b",
      confirmButtonText: "OK",
    });
  }
  return await response.json();
};

export const displayWeatherData = (data) => {
  console.log(data);

  const {
    name: city,
    main: { temp, humidity, pressure },
    weather: [{ description, icon, id }],
  } = data;

  weatherCard.innerHTML = "";

  const cityName = document.createElement("h3");
  const temperature = document.createElement("h2");
  const conditionContainer = document.createElement("div");
  const humidityCondition = document.createElement("p");
  const skyCondition = document.createElement("p");
  const pressureCondition = document.createElement("p");
  const weatherIcon = document.createElement("p");

  cityName.innerText = city;
  temperature.innerText = `${(temp - 275.15).toFixed(2)}°C`;
  humidityCondition.innerText = "Humidity : " + humidity;
  skyCondition.innerText = "Condition : " + description;
  pressureCondition.innerText = "Pressure : " + pressure;
  weatherIcon.innerHTML = getWeatherIcon(id);

  cityName.classList.add("text-3xl", "text-slate-600", "font-semibold");
  temperature.classList.add("text-4xl", "text-slate-600", "font-bold");
  conditionContainer.classList.add("flex", "gap-6", "justify-center", "mt-8", "mb-4");
  humidityCondition.classList.add("text-xl", "text-slate-600");
  skyCondition.classList.add("text-xl", "text-slate-600");
  pressureCondition.classList.add("text-xl", "text-slate-600");

  weatherCard.appendChild(cityName);
  weatherCard.appendChild(temperature);
  weatherCard.appendChild(conditionContainer);
  conditionContainer.appendChild(humidityCondition);
  conditionContainer.appendChild(pressureCondition);
  weatherCard.appendChild(weatherIcon);
  weatherCard.appendChild(skyCondition);
};

export const getWeatherIcon = (id) => {
  if (id >= 200 && id <= 300) {
    return `<i class="fa fa-solid fa-droplet text-7xl text-blue-200 filter drop-shadow-md"></i>`;
  } else if (id > 300 && id <= 400) {
    return `<i class="fa fa-solid fa-cloud-rain text-7xl text-blue-200 filter drop-shadow-md"></i>`;
  } else if (id > 400 && id <= 600) {
    return `<i class="fa fa-solid fa-cloud-sun-rain text-7xl text-blue-200 filter drop-shadow-md"></i>`;
  } else if (id > 600 && id <= 850) {
    return `<i class="fa fa-solid fa-cloud-sun-rain text-7xl text-blue-200 filter drop-shadow-md"></i>`;
  } else if (id > 850){
    return `<i class="fa fa-solid fa-snowman text-7xl text-blue-200 filter drop-shadow-md"></i>`;
  }
};
