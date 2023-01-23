import './ButtonOption.css'
import { useContext } from "react"
import { Link } from "wouter"
import NavContext from "../../../context/navContext"
import { Animated } from 'react-animated-css'

const ButtonOption = ({id, icon, name}) => {
   
    const {navState, updateNavState} = useContext(NavContext)

    const handleClick = idOption => {
        updateNavState({...navState, option: idOption})
    }

    const createPath = optionName => {
        return optionName.split(" ")[0].toLowerCase()
    }


    return(
        <Link to={`/${createPath(name)}`} className={`specific-option ripple ${id === navState.option ? 'specific-option-selected' : ''}`} key={id} onClick={() => handleClick(id)}>
                            <div className={`icon-column ${id === navState.option ? 'icon-column-selected' : ''}`}>
                                <p>{icon}</p>
                            </div>
                            {
                            navState.open
                                ? <></>
                                : <div className={`name-option-column ${id === navState.option ? 'name-option-selected' : ''}`}>
                                    <Animated animationIn="fadeIn" animationInDuration={500}>
                                        <p>{name}</p>
                                    </Animated>
                                </div>
                            }
        </Link>
    )
}

export default ButtonOption