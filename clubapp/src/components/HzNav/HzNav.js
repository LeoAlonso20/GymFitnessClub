import './HzNav.css'
import {Animated} from "react-animated-css";
import { useState } from 'react';


const HzNav = () => {

  const [open, setOpen] = useState(true)
  
  const handleClickButton = () => {
    if( open ) setOpen(() => false)
    else setOpen(() => true)
  }

  return (
    <>
        <div className={`container ${open ? "container-close" : ""}`} >
            <div className='top-box' >
                <div className='container-logo-app' >
                    {open
                        ? <p>A</p>
                        : <Animated animationIn='fadeIn' animationInDuration={500}><p>Logo App</p></Animated>
                    }
                </div>
            </div>
            <div className='options-box' ></div>
        </div>
        <button type='button' className={`button-bar ${open ? "button-bar-close" : ""}`} onClick={handleClickButton} >
          {open
                ? <i className="fa-solid fa-chevron-right arrow-icon"></i>
                : <i className="fa-solid fa-chevron-left arrow-icon"></i>
          }
        </button>

    </>
  );
}

export default HzNav