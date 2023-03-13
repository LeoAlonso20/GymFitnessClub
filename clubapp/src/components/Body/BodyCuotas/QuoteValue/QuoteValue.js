import './QuoteValue.css'
import React, { useState } from 'react';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { useForm, Controller } from 'react-hook-form';
import { StyledInput } from '../../../Shared/StyledComponents';

const QuoteValue = () => {

    const [ editValue, setEditValue ] = useState(true)

    const { control, reset, getValues, setFocus, setValue } = useForm({
        defaultValues: {
            keyword: ''
        }
    })

    const handleEditValueClick = () => {

        setTimeout(() => {
            setFocus('keyword', {shouldSelect: true})
        }, 100)

        if( !editValue ){
            onSubmitQuote()
            reset()
        }
        setEditValue(!editValue)
    }

    const onSubmitQuote = () => {
        const { keyword } = getValues()
    }

    return (
        <div className={`quote-value circle`}>
                                {
                                    editValue
                                            ? <p className='text-value'>$3700</p>
                                            : <form className='form-quote-value' action='#' onSubmit={(e) => {e.preventDefault() 
                                                                                                                handleEditValueClick()}}>
                                                <Controller name='keyword' control={control} render={({field}) => 
                                                    <StyledInput type="number" placeholder='$$$' {...field} className='input-quote'/>}>    
                                                </Controller>
                                            </form>
                                }
                                <div className={`action-quote-value`}>
                                    {
                                        editValue 
                                                ? <EditTwoToneIcon sx={{color: 'rgb(33, 43, 54)', cursor: 'pointer', '&:hover' : { transform: 'scale(1.1)' }}} onClick={handleEditValueClick}/>
                                                : <CheckTwoToneIcon sx={{color: 'rgb(33, 43, 54)', cursor: 'pointer', '&:hover' : { transform: 'scale(1.1)' }}} onClick={handleEditValueClick}/>
                                    }
                                    
                                </div>
        </div>
    )
}

export default React.memo(QuoteValue)