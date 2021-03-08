import React from 'react';
import { useHistory } from 'react-router';
import './Country.css';
const Country = (props) => {
    const {name,flag} = props.country;
    let history = useHistory();
    const handleCountryClick=(countryName)=>{
        history.push(`/country/${countryName}`);
    }
    return (
        <div className="country d-flex justify-content-center align-items-center" onClick= {()=>{handleCountryClick(name)}}>
            <div>
            <img src={flag} alt={name}/>
            <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Country;