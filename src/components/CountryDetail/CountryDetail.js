import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css'
const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    const { name, alpha3Code, capital, region, subregion, population, area, nativeName, flag } = country;
    return (
        <div className="country-detail">
            <img src={flag} alt="" />
            <div className="mt-3">
                <table class="table table-hover table-dark">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Capital</th>
                            <td>{capital}</td>
                        </tr>
                        <tr>
                            <th scope="row">Alpha3Code</th>
                            <td>{alpha3Code}</td>
                        </tr>
                        <tr>
                            <th scope="row">Region</th>
                            <td>{region}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sub Region</th>
                            <td>{subregion}</td>
                        </tr>
                        <tr>
                            <th scope="row">Population</th>
                            <td>{population}</td>
                        </tr>
                        <tr>
                            <th scope="row">Area</th>
                            <td>{area}</td>
                        </tr>
                        <tr>
                            <th scope="row">NativeName</th>
                            <td>{nativeName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountryDetail;