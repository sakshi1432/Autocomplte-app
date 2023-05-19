import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Autocomplete() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchcountries, setseacrhcountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    };

    loadCountries();
  }, []);
  console.log(countries);

  const serachCountry = (text) => {
    setInput(text);

    if (!text) {
      setseacrhcountries([]);
    } else {
      let matche = countries.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        let countryname = JSON.stringify(country);
        return countryname.match(regex);
      });
      setseacrhcountries(matche);
    }
  };
  return (
    <div>
      <div className="text-center mt-3">Autocomplete</div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Enter to search"
          className="form-control mt-3"
          style={{ width: "20%" }}
          value={input}
          onChange={(e) => serachCountry(e.target.value)}
        ></input>
      </div>
      <div className>
        <div className="">
          {searchcountries &&
            searchcountries.map((item, index) => (
              <div key={index}>
                <div onClick={() => serachCountry(item.name.common)}>
                  {item.name.common}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
