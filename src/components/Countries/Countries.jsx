import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = () => {
  const [conuntries, setCountries] = useState([]);
  const [visitedCountris, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountries = conuntry => {
    const newVisitedCountries = [...visitedCountris, conuntry];
    setVisitedCountries(newVisitedCountries);
  };

  const handelFlags = flag =>{
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
  }

  return (
    <div>
      <h3>Countries {conuntries.length}</h3>
      {/* visited country */}
      <div>
        <h3>Visited Countries {visitedCountris.length}</h3>
        <ul>
          {visitedCountris.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries flag-container">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag} />)
        }
      </div>
      {/* display country */}
      <div className="countries">
        {conuntries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
            handelFlags={handelFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
