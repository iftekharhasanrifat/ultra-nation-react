import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Country from '../Country/Country';

const CountryByRegion = () => {
    const { regionName } = useParams();
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/region/${regionName}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="country-container">
            {
                countries.map(country =><Country  key={country.alpha3Code} country={country}></Country>)
            }
        </div>
    );
};

export default CountryByRegion;