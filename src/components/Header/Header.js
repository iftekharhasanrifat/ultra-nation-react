import React from 'react';
import { useHistory } from 'react-router';
import './Header.css'
const Header = () => {
    let history = useHistory();
    const handleNavClick = (path)=>{
        history.push(`/${path}`)
    }
    return (
            <nav className="text-center">
                <button onClick={()=>handleNavClick('home')} className="links btn">Home</button>
                <button onClick={()=>handleNavClick('region')} className="links btn">REGION</button>
                <button onClick={()=>handleNavClick('regionalBloc')} className="links btn">REGIONAL BLOC</button>
            </nav>
    );
};

export default Header;