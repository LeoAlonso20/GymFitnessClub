import { Animated } from 'react-animated-css'
import './InfoClient.css'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import Face2TwoToneIcon from '@mui/icons-material/Face2TwoTone';
import Tooltip from '@mui/material/Tooltip';

const InfoClient = ({client}) => {

    const swithPayState = payState => {
        switch(payState){
            case 0:
                return 'rgb(0, 187, 45, 0.16)'
            case 1:
                return 'rgba(255, 233, 0, 0.16)'
            case 2:
                return 'rgba(207, 6, 6, 0.16)'
            default:
                return ''
        }
    }

    const renderSwitch = (payState) => {
        switch(payState) {
            case 0:          
                return <p className='state-result-item'>Al día</p>
            case 1:
                return <p className='state-result-item'>Por vencer</p>
            case 2:
                return <p className='state-result-item'>Vencido</p>
            default:
                return <p className='state-result-item'>ERROR</p>
        }
    }

    return(
        <Animated animationIn='fadeIn' animationInDuration={500} className='container-info-client'>
            <div className='container-client-name'>
                {
                    client.gender
                                    ? <Face2TwoToneIcon sx={{fontSize: '2.5em', display: 'inline'}}/>
                                    : <FaceTwoToneIcon sx={{fontSize: '2.5em', display: 'inline'}}/>
                }
                
                <p className='text-client-name'>{client.firstName} {client.lastName}</p>
            </div>
            <div className='container-icons-client'>
                <Tooltip title='D.N.I' placement='left-start' enterDelay={200}>
                    <BadgeTwoToneIcon sx={{backgroundColor: swithPayState(client.payState), borderRadius: '50%', fontSize: '1.65em', padding: '3px'}}/>
                </Tooltip>
                <Tooltip title='F. de naciemiento' placement='left-start' enterDelay={200}>
                    <CakeTwoToneIcon sx={{backgroundColor: swithPayState(client.payState), borderRadius: '50%', fontSize: '1.65em', padding: '3px'}}/>
                </Tooltip>
                <Tooltip title='Dirección' placement='left-start' enterDelay={200}>
                    <HomeTwoToneIcon sx={{backgroundColor: swithPayState(client.payState), borderRadius: '50%', fontSize: '1.65em', padding: '3px'}}/>
                </Tooltip>
                <Tooltip title='Teléfono' placement='left-start' enterDelay={200}>
                    <LocalPhoneTwoToneIcon sx={{backgroundColor: swithPayState(client.payState), borderRadius: '50%', fontSize: '1.65em', padding: '3px'}}/>
                </Tooltip>
                <Tooltip title='Email' placement='left-start' enterDelay={200}>
                    <EmailTwoToneIcon sx={{backgroundColor: swithPayState(client.payState), borderRadius: '50%', fontSize: '1.65em', padding: '3px'}}/>
                </Tooltip>
            </div>
            <div className='container-icons-client container-data-client'>
                <p className='text-data-client'>{client.idNumber}</p>
                <p className='text-data-client'>{client.birth}</p>
                <p className='text-data-client'>{client.address}</p>
                <p className='text-data-client'>{client.phone}</p>
                <p className='text-data-client'>{client.email}</p>
            </div>
                <div className='state-pay-client' style={{backgroundColor: swithPayState(client.payState)}}>{renderSwitch(client.payState)}</div>
        </Animated>
    )
}

export default InfoClient