import React, { useState, useRef } from 'react'
import './FormNewClient.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useForm, Controller } from 'react-hook-form'
import { InputLabel, MenuItem, Button} from '@mui/material'
import { StyledTextField, StyledFormControl, StyledSelect } from '../../../Shared/StyledComponents'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/es";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Snack from '../../../Shared/Snack'

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    idNumber: yup.number().required(),
    birth: yup.date().required(),
    address: yup.string().required(),
    phone: yup.number().required(),
    gender: yup.string().required(),
    email: yup.string().required()
}).required()

const FormNewClient = () => {

    const [date, setDate] = useState(null);

    const snackRef = useRef()

    const { control, handleSubmit, reset, setValue, formState: {errors}, clearErrors } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            idNumber: '',
            birth: '',
            address: '',
            phone: '',
            gender: '',
            email: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        reset()
        setDate(null)
        setValue('birth', null)
        snackRef.current.setSnack({open: true, severity: 'success', message: 'Cliente agregado con éxito'})
    }

    const handleClick  = () => {
        if( errors.firstName || errors.lastName || errors.birth || 
            errors.idNumber || errors.gender || errors.address || errors.phone ){
                snackRef.current.setSnack({open: true, severity: 'error', message: 'Complete todos los campos'})
        }
    }

    const handleCancel = () => {
        clearErrors()
        reset()
        setDate(null)
        setValue('birth', null)
    }

    const handleDateChange = newValue => {
        setDate(newValue)
        setValue('birth', dayjs(newValue).toDate())
    }

    return (
        <>
            <form className='form-add-cliente' onSubmit={handleSubmit(onSubmit)}>
                            <Grid2 container rowSpacing={3} columnSpacing={2}>
                                <Grid2 md={3}>
                                    <Controller name='firstName' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.firstName !== 'undefined'} {...field} sx={{width: '100%'}} id="outlined-basic" label='Nombre' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller>       
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='lastName' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.lastName !== 'undefined'} {...field} sx={{width: '100%'}} id="outlined-basic" label='Apellido' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='idNumber' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.idNumber !== 'undefined'} {...field} type={'number'} sx={{width: '100%'}} id="outlined-basic" label='D.N.I' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='birth' control={control} render={({field}) => 
                                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                                                <DesktopDatePicker inputFormat="DD/MM/YYYY" value={date} onChange={handleDateChange} label='Nacimiento' renderInput={(params) => <StyledTextField {...params} sx={{width: '100%'}} error={typeof errors.birth !== 'undefined'} {...field} id="outlined-basic"  variant='outlined' className='input-form'></StyledTextField>}></DesktopDatePicker>
                                            </LocalizationProvider>}>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='gender' control={control} render={({field}) => 
                                                <StyledFormControl fullWidth error={typeof errors.gender !== 'undefined'}>
                                                    <InputLabel id='gender-select-id' className='input-label'>Sexo</InputLabel>
                                                <StyledSelect {...field} sx={{width: '100%', textAlign: 'start'}} id="outlined-basic" labelId='gender-select-id' label='Sexo'>
                                                    <MenuItem value={1}>Femenino</MenuItem>
                                                    <MenuItem value={2}>Masculino</MenuItem>
                                                </StyledSelect>
                                                </StyledFormControl>
                                                }>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='address' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.address !== 'undefined'} {...field} sx={{width: '100%'}} id="outlined-basic" label='Dirección' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='phone' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.phone !== 'undefined'} {...field} type={'number'} sx={{width: '100%'}} id="outlined-basic" label='Teléfono' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller> 
                                </Grid2>
                                <Grid2 md={3}>
                                    <Controller name='email' control={control} render={({field}) => 
                                        <StyledTextField error={typeof errors.phone !== 'undefined'} {...field} type={'text'} sx={{width: '100%'}} id="outlined-basic" label='Email' variant='outlined' className='input-form'></StyledTextField>}>
                                    </Controller> 
                                </Grid2>
                            </Grid2>
                            <div className='button-add'>
                                <Button type='button' sx={{backgroundColor: 'inherit', color: 'rgb(33, 43, 54)', fontSize: '15px',borderEndEndRadius: '0', borderTopRightRadius: '0', borderRight: 'solid 1px rgb(33, 43, 54)'}} aria-label="add" onClick={handleCancel}>
                                    Cancelar
                                </Button>
                                <Button type='submit' sx={{backgroundColor: 'inherit', color: 'rgb(33, 43, 54)', fontSize: '15px', borderStartStartRadius: '0', borderBottomLeftRadius: '0'}} aria-label="add" onClick={handleClick}>
                                    Agregar
                                </Button>
                                
                            </div>
                        </form> 
                        <Snack ref={snackRef} />
                    </>
    )
}

export default React.memo(FormNewClient)