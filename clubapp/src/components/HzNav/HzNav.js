import './HzNav.css'
import { useState } from 'react';
import LogoNav from '../LogoNav/LogoNav';
import UserNav from '../UserNav/UserNav';
import OptionsNav from '../OptionsNav/OptionsNav';

const HzNav = () => {

  const [open, setOpen] = useState(true)
  
  const handleClickButton = () => {
    if( open ) setOpen(() => false)
    else setOpen(() => true)
  }

  return (
    <>
        <div className={`container ${open ? "container-close" : ""}`} >
            <div className={`top-box ${open ? 'top-box-close' : ''}`} >
                <LogoNav open={open} />
                <UserNav open={open} />
            </div>
            <OptionsNav open={open} />
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