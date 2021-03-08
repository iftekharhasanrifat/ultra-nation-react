import React from 'react';
import { useHistory } from 'react-router';
import './Region.css'
const Region = () => {
    let history = useHistory();
    const clickRegionHandler = (regionName)=>{
        history.push(`/region/${regionName}`);
        console.log('clicked');
    }
    return (
        <div>
            <button onClick={()=>clickRegionHandler('africa')} className="region-link btn">Africa</button>
            <button onClick={()=>clickRegionHandler('americas')} className="region-link btn">Americas</button>
            <button onClick={()=>clickRegionHandler('asia')} className="region-link btn">Asia</button>
            <button onClick={()=>clickRegionHandler('europe')} className="region-link btn">Europe</button>
            <button onClick={()=>clickRegionHandler('oceania')} className="region-link btn">Oceania</button>
        </div>
    );
};

export default Region;