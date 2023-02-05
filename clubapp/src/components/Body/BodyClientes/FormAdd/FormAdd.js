import React, { useState } from 'react'
import './FormAdd.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useForm, Controller } from 'react-hook-form'
import { InputLabel, MenuItem, Button} from '@mui/material'
import { TextFieldCustom, FormControlCustom, SelectCustom } from '../../../Shared/StyledComponents'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    idNumber: yup.number().required(),
    birth: yup.date().required(),
    address: yup.string().required(),
    phone: yup.number().required(),
    gender: yup.string().required()
}).required()

const FormAdd = () => {

    const [date, setDate] = useState(null);

    const { control, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            idNumber: '',
            birth: '',
            address: '',
            phone: '',
            gender: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        reset()
        setDate(null)
        setValue('birth', null)
    }

    const handleDateChange = newValue => {
        setDate(newValue)
        setValue('birth', dayjs(newValue).toDate())
    }

    return (
        <form className='form-add-cliente' onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container rowSpacing={3} columnSpacing={2}>
                            <Grid2 md={3}>
                                <Controller name='firstName' control={control} render={({field}) => 
                                    <TextFieldCustom {...field} sx={{width: '100%'}} id="outlined-basic" label='Nombre' variant='outlined' className='input-form'></TextFieldCustom>}>
                                </Controller>       
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='lastName' control={control} render={({field}) => 
                                    <TextFieldCustom {...field} sx={{width: '100%'}} id="outlined-basic" label='Apellido' variant='outlined' className='input-form'></TextFieldCustom>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='idNumber' control={control} render={({field}) => 
                                    <TextFieldCustom {...field} type={'number'} sx={{width: '100%'}} id="outlined-basic" label='D.N.I' variant='outlined' className='input-form'></TextFieldCustom>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='birth' control={control} render={({field}) => 
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker inputFormat="DD/MM/YYYY" value={date} onChange={handleDateChange} label='Fecha de nacimiento' renderInput={(params) => <TextFieldCustom {...params} {...field} sx={{width: '100%'}} id="outlined-basic"  variant='outlined' className='input-form'></TextFieldCustom>}></DesktopDatePicker>
                                        </LocalizationProvider>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='address' control={control} render={({field}) => 
                                    <TextFieldCustom {...field} sx={{width: '100%'}} id="outlined-basic" label='Dirección' variant='outlined' className='input-form'></TextFieldCustom>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='phone' control={control} render={({field}) => 
                                    <TextFieldCustom {...field} type={'number'} sx={{width: '100%'}} id="outlined-basic" label='Teléfono' variant='outlined' className='input-form'></TextFieldCustom>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='gender' control={control} render={({field}) => 
                                            <FormControlCustom fullWidth>
                                                <InputLabel id='gender-select-id' className='input-label'>Sexo</InputLabel>
                                            <SelectCustom {...field} sx={{width: '100%', textAlign: 'start'}} id="outlined-basic" labelId='gender-select-id' label='Sexo'>
                                                <MenuItem value={1}>Femenino</MenuItem>
                                                <MenuItem value={2}>Masculino</MenuItem>
                                            </SelectCustom>
                                            </FormControlCustom>
                                            }>
                                </Controller> 
                            </Grid2>
                        </Grid2>
                        <div className='button-add'>
                            <Button type='submit' sx={{backgroundColor: 'inherit', color: 'rgb(33, 43, 54)', fontSize: '15px'}} aria-label="add">
                                Agregar
                            </Button>
                        </div>
                    </form>
    )
}

export default React.memo(FormAdd)