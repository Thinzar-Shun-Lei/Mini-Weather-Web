import Swal from "sweetalert2";
import { displayWeatherData, getWeatherApi } from "./weatherFun";

export const frmHandler = async (event) => {
  console.log(event);
  event.preventDefault();
  const city = inputCity.value;

  if (!city) {
    Swal.fire({
      icon: "error",
      title: "Blank Input",
      text: "Please enter the country!",
      confirmButtonColor: "#1e293b",
      confirmButtonText: "OK",
    });
  } else {
    const weatherData = await getWeatherApi(city);
    displayWeatherData(weatherData);
  }
};
