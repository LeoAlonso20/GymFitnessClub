import React, {useContext} from "react"

import './OptionsNav.css'
import { Animated } from "react-animated-css"
import NavContext from "../../../context/navContext"
import ButtonOption from "../ButtonOption/ButtonOption"

const OptionsNav = () => {

    const {navState} = useContext(NavContext)

    const options = [[1,'A','Opción A'], [2,'B','Opción B'], [3,'C','Opción C'], [4,'D','Opción D'], [5,'E','Opción E']]

    return(
            <div className='options-box' >
                {
                navState.open
                    ? <></>
                    : <Animated animationIn="fadeIn" animationInDuration={500}><p className="title-options">OPCIONES</p></Animated> 
                }
                <div className="options">
                    {options.map( ([idOption, iconOption, nameOption]) => {
                        return(
                        <ButtonOption  key={idOption} id={idOption} icon={iconOption} name={nameOption}></ButtonOption>
                    )
                    } )}

                </div>
            </div>
    )
}

export default React.memo(OptionsNav)