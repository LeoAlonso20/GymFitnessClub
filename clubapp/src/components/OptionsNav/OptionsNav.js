import React, {useState} from "react"
import './OptionsNav.css'
import { Animated } from "react-animated-css"

const OptionsNav = ({open}) => {

    const [optionSelected, setOptionSelected] = useState(1);

    const options = [[1,'A','Opción A'], [2,'B','Opción B'], [3,'C','Opción C'], [4,'D','Opción D'], [5,'E','Opción E']]

    const handleClick = idOption => {
        setOptionSelected(idOption)
    }

    return(
            <div className='options-box' >
                {
                open
                    ? <></>
                    : <Animated animationIn="fadeIn" animationInDuration={500}><p className="title-options">OPCIONES</p></Animated> 
                }
                <div className="options">
                    {options.map( ([idOption, iconOption, nameOption]) => {
                        return(
                        <div className={`specific-option ripple ${idOption === optionSelected ? 'specific-option-selected' : ''}`} key={idOption} onClick={() => handleClick(idOption)}>
                            <div className={`icon-column ${idOption === optionSelected ? 'icon-column-selected' : ''}`}>
                                <p>{iconOption}</p>
                            </div>
                            {
                            open
                                ? <></>
                                : <div className={`name-option-column ${idOption === optionSelected ? 'name-option-selected' : ''}`}>
                                    <Animated animationIn="fadeIn" animationInDuration={500}>
                                        <p>{nameOption}</p>
                                    </Animated>
                                </div>
                            }
                    </div>
                    )
                    } )}
                    
                </div>
            </div>
    )
}

export default React.memo(OptionsNav)