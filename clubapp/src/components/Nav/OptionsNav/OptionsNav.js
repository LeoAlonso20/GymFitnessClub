import React, {useContext} from "react"

import './OptionsNav.css'
import { Animated } from "react-animated-css"
import NavContext from "../../../context/navContext"
import ButtonOption from "../ButtonOption/ButtonOption"
import useOptionPath from "../../../hooks/useOptionPath"

import PersonAddAlt1TwoToneIcon from '@mui/icons-material/PersonAddAlt1TwoTone';

const OptionsNav = () => {


    const {navState} = useContext(NavContext)

    useOptionPath();

    const options = [[1,'star','Clientes'], [2,'B','Cuotas'], [3,'C','Planes'], [4,'D','Reportes'], [5,'E','Ajustes']]


    return(        
            <div className='options-box' >
                {
                navState.open
                    ? <></>
                    : <Animated animationIn="fadeIn" animationInDuration={500}><p className="title-options">OPCIONES</p></Animated> 
                }
                <div className="options">
                    {options.map( ([idOption, {iconOption}, nameOption]) => {
                        return(
                        <ButtonOption key={idOption} id={idOption} icon={iconOption} name={nameOption}></ButtonOption>
                    )
                    } )}

                </div>
            </div>
    )
}

export default React.memo(OptionsNav)