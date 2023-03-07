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

    const defineColor = idOption => {
        switch(idOption){

            case 1:
                return '#f5f5f5'
            case 2:
                return 'rgb(220, 20, 60)'
            case 3:
                return 'rgb(70, 162, 218)'
            case 4:
                return 'rgb(135, 193, 155)'
            case 5:
                return 'gray'
            default:
                return ''

        }
    }


    return(
        <Link to={`/${createPath(name)}`} className={`specific-option ripple ${id === navState.option ? 'specific-option-selected' : ''}`} key={id} onClick={() => handleClick(id)}>
                            <div className={`icon-column ${id === navState.option ? 'icon-column-selected' : ''}`} style={id === navState.option ? {color: defineColor(id)} : {}}>
                                {renderIcon(id)}
                            </div>
                            {
                            navState.open
                                ? <></>
                                : <div className={`name-option-column ${id === navState.option ? 'name-option-selected' : ''}`}>
                                    <Animated animationIn="fadeIn" animationInDuration={500}>
                                        <p style={id === navState.option ? {color: defineColor(id)} : {}}>{name}</p>
                                    </Animated>
                                </div>
                            }
        </Link>
    )
}

export default ButtonOption