import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./CountriesList.css";

function CountriesList({allCountry}) {
     const [sDiv, setSDiv] = useState({
    isVisible: false,
    object: null,
  });

  const handleMouseEnter = (id) => {
    setSDiv({
      isVisible: true,
      object: allCountry.find((item) => item.id === id),
    });
  };

  const handleMouseLeave = () => {
    setSDiv({
      isVisible: false,
      object: null,
    });
  };
  return (
    <>
      <div className="countries_container">
        {allCountry.map((item) => (
          <Link
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave()}
            key={item.name.common}
            to={`/about/${item.name.common}`}
          >
            <div className="country_box">
              <div className="index">{item.id}</div>
              <div className="country_info">
                <img src={item.flags.png} alt="" />
                <p>{item.name.common}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="aboutCountry_container">
        {sDiv.isVisible && (
          <div className="aboutCountry">
            <div className="flag">
              <img
                src={sDiv.object.flags.png}
                alt={sDiv.object.flags.alt}
              />
            </div>
            <div className="country_name">
              <p>Name: {sDiv.object.name.common}</p>
              <p>Capital: {sDiv.object.capital}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CountriesList;
