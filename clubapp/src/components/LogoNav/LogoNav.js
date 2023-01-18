import './LogoNav.css'
import {Animated} from "react-animated-css";
import React from 'react';


const LogoNav = ({open}) => {
    return (
        <div className='container-logo-app' >
                    {open
                        ? <p>A</p>
                        : <Animated animationIn='fadeIn' animationInDuration={500}><p>Logo App</p></Animated>
                    }
                </div>
    )
}

export default React.memo(LogoNav)