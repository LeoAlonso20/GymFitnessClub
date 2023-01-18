import React from "react"
import './OptionsNav.css'
import { Animated } from "react-animated-css"

const OptionsNav = ({open}) => {

    const options = [['A','Opción A'], ['B','Opción B'], ['C','Opción C'], ['D','Opción D'], ['E','Opción E']]

    return(
            <div className='options-box' >
                {
                open
                    ? <></>
                    : <Animated animationIn="fadeIn" animationInDuration={500}><p className="title-options">OPCIONES</p></Animated> 
                }
                <div className="options">
                    {options.map( ([iconOption, nameOption]) => {
                        return(
                        <div className="specific-option">
                        <div className="icon-column">
                            <p>{iconOption}</p>
                        </div>
                        {
                         open
                            ? <></>
                            : <Animated animationIn="fadeIn" animationInDuration={500}>
                                <div className="name-option-column">
                                    <p>{nameOption}</p>
                                </div>
                              </Animated>   
                        }
                    </div>
                    )
                    } )}
                    
                </div>
            </div>
    )
}

export default React.memo(OptionsNav)