import React from 'react';
import { useHistory } from 'react-router';

const RegionalBloc = () => {
    let history = useHistory();
    const clickHandler = (regionalBlocName)=>{
        history.push(`/regionalBloc/${regionalBlocName}`);
        console.log('clicked');
    }
    return (
        <div>
            <button onClick={()=>clickHandler('eu')} className="region-link btn">EU (European Union)</button>
            <button onClick={()=>clickHandler('efta')} className="region-link btn">EFTA (European Free Trade Association)</button>
            <button onClick={()=>clickHandler('caricom')} className="region-link btn">CARICOM (Caribbean Community)</button>
            <button onClick={()=>clickHandler('pa')} className="region-link btn">PA (Pacific Alliance)</button>
            <button onClick={()=>clickHandler('au')} className="region-link btn">AU (African Union)</button>
            <button onClick={()=>clickHandler('usan')} className="region-link btn">USAN (Union of South American Nations)</button>
            <button onClick={()=>clickHandler('al')} className="region-link btn">AL (Arab League)</button>
            <button onClick={()=>clickHandler('asean')} className="region-link btn">ASEAN (Association of Southeast Asian Nations)</button>
            <button onClick={()=>clickHandler('cais')} className="region-link btn">CAIS (Central American Integration System)</button>
            <button onClick={()=>clickHandler('cefta')} className="region-link btn">CEFTA (Central European Free Trade Agreement)</button>
            <button onClick={()=>clickHandler('nafta')} className="region-link btn">NAFTA (North American Free Trade Agreement)</button>
            <button onClick={()=>clickHandler('saarc')} className="region-link btn">SAARC (South Asian Association for Regional Cooperation)</button>
        </div>
    );
};

export default RegionalBloc;