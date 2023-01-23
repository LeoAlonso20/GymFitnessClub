import './LogoNav.css'
import {Animated} from "react-animated-css";
import React, {useContext} from 'react';
import NavContext from '../../../context/navContext';


const LogoNav = () => {

    const {navState} = useContext(NavContext)

    return (
        <div className='container-logo-app' >
                    {navState.open
                        ? <p>A</p>
                        : <Animated animationIn='fadeIn' animationInDuration={500}><p>Logo App</p></Animated>
                    }
                </div>
    )
}

export default React.memo(LogoNav)