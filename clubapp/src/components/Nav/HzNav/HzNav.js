import './HzNav.css'
import { useContext } from 'react';
import LogoNav from '../LogoNav/LogoNav';
import UserNav from '../UserNav/UserNav';
import OptionsNav from '../OptionsNav/OptionsNav';
import NavContext from "../../../context/navContext"

const HzNav = () => {

  const {navState, updateNavState} = useContext(NavContext)
  
  const handleClickButton = () => {
    if( navState.open ) updateNavState({...navState, open: false})
    else                updateNavState({...navState, open: true})
  }

  return (
    <>
        <div className={`container ${navState.open ? "container-close" : ""}`} >
            <div className={`top-box ${navState.open ? 'top-box-close' : ''}`} >
                <LogoNav/>
                <UserNav/>
            </div>
            <OptionsNav open={navState.open} />
        </div>
        <button type='button' className={`button-bar ${navState.open ? "button-bar-close" : ""}`} onClick={handleClickButton} >
          {navState.open
                ? <i className="fa-solid fa-chevron-right arrow-icon"></i>
                : <i className="fa-solid fa-chevron-left arrow-icon"></i>
          }
        </button>

    </>
  );
}

export default HzNav