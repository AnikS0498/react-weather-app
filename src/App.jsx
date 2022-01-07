import { useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  const [search, setSearch] = useState(false);
  const [city, setCity] = useState("");
  const [weatherInformation, setWeatherInfo] = useState({});

  const { REACT_APP_WEATHER_API_KEY, REACT_APP_WEATHER_API_ENDPOINT } =
    process.env;

  return (
    <>
      <div className="bg-slate-800 h-screen">
        <nav className="flex px-3 py-4 bg-gray-300 justify-between">
          <span className="font-normal">WeatherApp</span>

          <ul className="flex justify-end mx-3.5 border rounded-md px-2 bg-slate-800 text-white">
            <li>
              <button
                onClick={() => {
                  toast.warn("This web-app is unoptimised for phones!!", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }}
              >
                Info
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <SearchBox
            handleSubmit={() => {
              setSearch(true);
            }}
            handleCityValue={async (cityReceived) => {
              try {
                const response = await axios.get(
                  `${REACT_APP_WEATHER_API_ENDPOINT}${cityReceived}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
                );
                setCity(cityReceived);
                const { temp, humidity, feels_like, pressure } =
                  response.data.main;
                const { main: weatherType } = response.data.weather[0];
                const { speed: windSpeed } = response.data.wind;
                const { country: countryCode } = response.data.sys;
                const weatherInfo = {
                  temp,
                  humidity,
                  weatherType,
                  feels_like,
                  pressure,
                  windSpeed,
                  countryCode,
                };
                setWeatherInfo(weatherInfo);
              } catch (error) {
                toast.error("Invalid city", {
                  position: toast.POSITION.BOTTOM_CENTER,
                });
              }
            }}
          />
        </div>
        <div className="flex justify-center">
          {search && city !== "" && (
            <WeatherCard city={city} weatherInformation={weatherInformation} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
