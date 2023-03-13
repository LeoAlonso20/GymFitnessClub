import './RecMonth.css'
import React, { useState } from 'react'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';

const RecMonth = () => {

    const [ recVisibility, setRecVisibility ] = useState(false)

    const dateRec = () => {
        
    }

    return(
        <>
            <div className='month-container'>
                                {
                                    recVisibility
                                                ? <>
                                                    <p>$150.000</p>
                                                    <VisibilityOffTwoToneIcon className='eye-icon' sx={{color: 'rgb(33, 43, 54)', cursor: 'pointer', '&:hover' : { transform: 'scale(1.1)' }}} onClick={() => setRecVisibility(false)}/>
                                                  </>
                                                : <>
                                                    <p>*****</p>
                                                    <VisibilityTwoToneIcon className='eye-icon' sx={{color: 'rgb(33, 43, 54)', cursor: 'pointer', '&:hover' : { transform: 'scale(1.1)' }}} onClick={() => setRecVisibility(true)}/>
                                                  </>
                                }
            </div>
                            <p className='date-month'>13 - MAR</p>
        </>
    )
}

export default React.memo(RecMonth)
