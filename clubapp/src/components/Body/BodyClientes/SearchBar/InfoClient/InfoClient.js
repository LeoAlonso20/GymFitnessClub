import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Animated } from 'react-animated-css'
import './InfoClient.css'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';

const InfoClient = ({client}) => {
    return(
        <Animated animationIn='fadeIn' animationInDuration={500} className='container-info-client'>
            <p className='text-client-name'>LEANDRO ALONSO</p>
            <div className='container-icons-client'>
                <BadgeTwoToneIcon />
                <CakeTwoToneIcon />
                <HomeTwoToneIcon />
                <LocalPhoneTwoToneIcon />
                <EmailTwoToneIcon />
            </div>
            <div className='container-icons-client container-data-client'>
                <p className='text-data-client'>42497815</p>
                <p className='text-data-client'>19/03/2000</p>
                <p className='text-data-client'>General Paz 27</p>
                <p className='text-data-client'>3572671602</p>
                <p className='text-data-client'>leandroalonso2000@gmail.com</p>
            </div>
            {/* <Grid2 container columnSpacing={2} rowSpacing={3}>
                <Grid2 md={12} className='client-name'>Leandro Alonso</Grid2>
                <Grid2 md={6} className='client-info'><CakeTwoToneIcon  className='icon-client'/>19/03/2000</Grid2>
                <Grid2 md={6} className='client-info'><BadgeTwoToneIcon  className='icon-client icon-client-right'/>42497815</Grid2>
                <Grid2 md={6} className='client-info'><LocalPhoneTwoToneIcon  className='icon-client'/>3572671602</Grid2>
                <Grid2 md={6} className='client-info'><div className='divs'><HomeTwoToneIcon  className='icon-client icon-client-right'/></div>General Paz 27</Grid2>
                <Grid2 md={12} className='client-info' sx={{justifyContent: 'center'}}><EmailTwoToneIcon className='icon-client'/>leandroalonso2000@gmail.com</Grid2>
                <Grid2 md={12} className='state-client'>ESTADO</Grid2>
            </Grid2> */}
        </Animated>
    )
}

export default InfoClient