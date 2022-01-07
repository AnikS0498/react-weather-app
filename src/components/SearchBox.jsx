import React, { useState } from "react";
import { toast } from "react-toastify";
import { Search } from "react-feather";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default function SearchBox(props) {
  const [city, setCity] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchButtonClicked = () => {
    setSearchButtonClicked(true);
  };

  const notifyEmptyCity = () => {
    toast.error("Search field should not be empty", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div className="my-10 py-10 relative flex items-center">
      <Search className="absolute mx-1" size="20" />
      <input
        type="text"
        value={city}
        placeholder="city name..."
        className={`rounded-sm px-8 py-1 font-normal ${
          city === "" && searchButtonClicked && "bg-red-200 text-red-500"
        }`}
        onChange={handleChange}
      />
      <button
        className="mx-2 bg-blue-200 rounded-sm px-3 py-1 hover:bg-opacity-90 hover:duration-300"
        type="button"
        onClick={() => {
          if (city === "") {
            notifyEmptyCity();
          } else {
            props.handleCityValue(city);
            props.handleSubmit();
            handleSearchButtonClicked();
          }
        }}
      >
        Search
      </button>
    </div>
  );
}
