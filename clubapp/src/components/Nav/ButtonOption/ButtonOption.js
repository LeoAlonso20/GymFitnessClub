import './ButtonOption.css'
import { useContext } from "react"
import { Link } from "wouter"
import NavContext from "../../../context/navContext"
import { Animated } from 'react-animated-css'

import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

const ButtonOption = ({id, icon, name}) => {
   
    const {navState, updateNavState} = useContext(NavContext)

    const handleClick = idOption => {
        updateNavState({...navState, option: idOption})
    }

    const createPath = optionName => {
        return optionName.split(" ")[0].toLowerCase()
    }

    const renderIcon = idOption => {
        switch(idOption){

            case 1:
                return <PermIdentityTwoToneIcon />
            case 2:
                return <SavingsTwoToneIcon />
            case 3:
                return <FolderCopyTwoToneIcon />
            case 4:
                return <LeaderboardTwoToneIcon />
            default:
                return <SettingsTwoToneIcon />

        }
    }


    return(
        <Link to={`/${createPath(name)}`} className={`specific-option ripple ${id === navState.option ? 'specific-option-selected' : ''}`} key={id} onClick={() => handleClick(id)}>
                            <div className={`icon-column ${id === navState.option ? 'icon-column-selected' : ''}`}>
                                {renderIcon(id)}
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