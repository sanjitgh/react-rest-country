import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
  return (
    <div>
      <h3>Country Details</h3>
      <CountryData
        {...props}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;
