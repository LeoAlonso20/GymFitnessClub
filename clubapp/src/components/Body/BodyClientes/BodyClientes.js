import './BodyClientes.css'
import React, { useContext, useState } from 'react'
import { Animated } from 'react-animated-css'
import NavContext from '../../../context/navContext'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs'

const BodyClientes = () => {

    const { navState } = useContext(NavContext);

    const [date, setDate] = useState(dayjs(new Date()));

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            idNumber: '',
            birth: '',
            address: '',
            phone: '',
            gender: ''
        }
    })

    const onSubmit = data => {
        console.log(data)
        reset()
    }
    
    //Ver como solucionar lo de que cuando selecciono la fecha con el mouse no lo toma el form

    const handleDateChange = newValue => {
        setDate(newValue)
        console.log(newValue)
    }

    return (
            <div >
                {/* Tratar de refactorizar en componentes */}
                <div className={`container-option-description ${navState.open ? '' : 'desc-dec'}`}>
                    <div className='container-content'>
                        <div className={`container-title-description  ${navState.open ? '' : 'container-title-desc-dec'}`}>
                            <p className={`text-title title-description ${navState.open ? '' : 'title-desc-dec'}`}>CLIENTES</p>
                        </div>
                        <div className={`container-info-description ${navState.open ? '' : 'info-dec'}`}>
                            <p className='text-description'>
                                Texto provisional hasta que se encuentre que descripción poner en esta sección.
                                La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
                    <p className='text-title title-add'>Nuevo Cliente</p>
                    <form className='form-add-cliente' onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container rowSpacing={3} columnSpacing={2}>
                            <Grid2 md={3}>
                                <Controller name='firstName' control={control} render={({field}) => 
                                    <TextField {...field} sx={{width: '100%'}} id="outlined-basic" label='Nombre' variant='outlined' className='input-form'></TextField>}>
                                </Controller>       
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='lastName' control={control} render={({field}) => 
                                    <TextField {...field} sx={{width: '100%'}} id="outlined-basic" label='Apellido' variant='outlined' className='input-form'></TextField>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='idNumber' control={control} render={({field}) => 
                                        <TextField {...field} sx={{width: '100%'}} id="outlined-basic" label='D.N.I' variant='outlined' className='input-form'></TextField>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={3}>
                                <Controller name='birth' control={control} render={({field}) => 
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker inputFormat="DD/MM/YYYY" value={date} onChange={handleDateChange} label='Fecha de nacimiento' renderInput={(params) => <TextField {...params} {...field} sx={{width: '100%'}} id="outlined-basic"  variant='outlined' className='input-form'></TextField>}></DesktopDatePicker>
                                        </LocalizationProvider>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='address' control={control} render={({field}) => 
                                        <TextField {...field} sx={{width: '100%'}} id="outlined-basic" label='Dirección' variant='outlined' className='input-form'></TextField>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='phone' control={control} render={({field}) => 
                                        <TextField {...field} sx={{width: '100%'}} id="outlined-basic" label='Teléfono' variant='outlined' className='input-form'></TextField>}>
                                </Controller> 
                            </Grid2>
                            <Grid2 md={4}>
                                <Controller name='gender' control={control} render={({field}) => 
                                            <FormControl fullWidth>
                                                <InputLabel id='gender-select-id'>Sexo</InputLabel>
                                            <Select {...field} sx={{width: '100%'}} id="outlined-basic" labelId='gender-select-id' label='Sexo'>
                                                <MenuItem value={1}>Femenino</MenuItem>
                                                <MenuItem value={2}>Masculino</MenuItem>
                                            </Select>
                                            </FormControl>
                                            }>
                                </Controller> 
                            </Grid2>
                        </Grid2>
                        <button className='button-submit'>enviar</button>
                    </form>
                </div>
                <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
                    <p className='text-title title-table'>Tabla de Clientes</p>
                </div>
            </div>
            
    )

}

export default React.memo(BodyClientes)