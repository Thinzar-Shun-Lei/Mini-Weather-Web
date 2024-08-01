import { frmHandler } from "./handlers";
import { frmWeather } from "./selectors";
// import { getWeatherApi } from "./weatherFun";

const listener = () => {
    console.log("This is listener");
    frmWeather.addEventListener("submit", frmHandler)

}
export default listener;