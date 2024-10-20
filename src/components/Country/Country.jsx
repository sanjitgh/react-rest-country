import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({ country, handelVisitedCountries, handelFlags }) => {
  const { name, flags, population, area, flag, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h4 style={{ color: visited ? "purple" : "pink" }}>
        Name: {name.common}
      </h4>
      <h5>Flag: {flag}</h5>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>CCA3: {cca3}</small>
      </p>
      <button onClick={() => handelVisitedCountries(country)}>
        Mark Visited
      </button>
      <br /><br />
      <button onClick={()=> handelFlags(country.flags.png)}>Add Flag</button>
      <br />
      <br />
      <button onClick={handelVisited}>{visited ? "Visited" : "Going"}</button>
      <hr />
      <CountryDetails country={country} handelVisitedCountries={handelVisitedCountries} handelFlags={handelFlags}></CountryDetails>
    </div>
  );
};

export default Country;
