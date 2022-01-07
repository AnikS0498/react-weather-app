import React, { useState } from "react";
import {
  WiCloudy,
  WiDaySunny,
  WiFog,
  WiRain,
  WiSmoke,
  WiWindy,
  WiHumidity,
  WiThermometer,
  WiWindBeaufort0,
} from "weather-icons-react";
import { ArrowDown, ArrowUp } from "react-feather";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default function WeatherCard({ city, weatherInformation }) {
  const [dropDown, setDropDown] = useState(false);

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      {!isNaN(weatherInformation.temp) && (
        <div>
          <div className="text-black bg-gray-200 border rounded-xl px-3 hover:shadow-xl hover:duration-1000 transition-all hover:scale-125">
            <div className="flex w-min mt-2 border-2 bg-white rounded-xl shadow-md">
              {weatherInformation.weatherType === "Clouds" ? (
                <WiCloudy size="140" />
              ) : weatherInformation.weatherType === "Haze" ? (
                <WiFog size="140" />
              ) : weatherInformation.weatherType === "Smoke" ? (
                <WiSmoke size="140" />
              ) : weatherInformation.weatherType === "Rain" ? (
                <WiRain size="140" />
              ) : weatherInformation.weatherType === "Clear" ? (
                <WiDaySunny size="140" />
              ) : (
                <WiWindy size="140" />
              )}

              <div className="flex">
                <WiThermometer size="40" className="my-10 ml-2" />
                <p className="font-bold font-mono text-7xl py-6 px-5">
                  {Math.round(parseInt(weatherInformation.temp))}
                </p>
                <span className="font-mono text-4xl mt-10 pr-3">&deg;C</span>
              </div>
            </div>
            <div className="flex justify-center py-2">
              <span className="font-thin">
                {weatherInformation.weatherType} in {city}, feels like{" "}
                {Math.round(parseInt(weatherInformation.feels_like))} &deg;C
              </span>
            </div>
            <span
              className={`flex justify-center py-3 cursor-pointer ${
                !dropDown && "animate-bounce"
              }`}
            >
              {!dropDown ? (
                <ArrowDown onClick={handleDropdown} />
              ) : (
                <ArrowUp onClick={handleDropdown} />
              )}
            </span>
          </div>
          {dropDown && (
            <div className="flex font-thin my-10 bg-zinc-50 rounded-md transition-all hover:scale-125 hover:duration-1000">
              <div className="shadow-lg py-2 px-2 w-1/3 ">
                <div className="flex justify-center">
                  <WiHumidity size="30" />
                </div>

                <div className="flex justify-center 0">
                  <span>{weatherInformation.humidity}</span>
                </div>
              </div>

              <div className="px-2 py-2 shadow-xl w-1/3">
                <div className="flex justify-center">
                  <WiWindBeaufort0 size="30" />
                </div>
                <div className="flex justify-center">
                  <span>{weatherInformation.windSpeed}</span>
                </div>
              </div>
              <div className="shadow-2xl px-2 py-2 w-1/3">
                <div className="flex justify-center">
                  <span className="font-bold font-mono">Country</span>
                </div>

                <div className="flex justify-center my-1">
                  {weatherInformation.countryCode}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
