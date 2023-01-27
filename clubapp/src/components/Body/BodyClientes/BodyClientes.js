import './BodyClientes.css'
import { useContext } from 'react'
import { Animated } from 'react-animated-css'
import NavContext from '../../../context/navContext'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const BodyClientes = () => {

    const { navState } = useContext(NavContext);

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = data => {
        // console.log(data)
        // reset()
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
                        </div>2
                    </div>
                </div>
                <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
                    <p className='text-title title-add'>Nuevo Cliente</p>
                    <form className='form-add-cliente' onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container rowSpacing={3} columnSpacing={2}>
                            <Grid2 md={3}><TextField sx={{width: '100%'}} id="outlined-basic" label='Nombre' variant='outlined' className='input-form'></TextField></Grid2>
                            <Grid2 md={3}><TextField sx={{width: '100%'}} id="outlined-basic" label='Apellido' variant='outlined'></TextField></Grid2>
                            <Grid2 md={3}><TextField sx={{width: '100%'}} id="outlined-basic" label='D.N.I' variant='outlined'></TextField></Grid2>
                            <Grid2 md={3}><TextField sx={{width: '100%'}} id="outlined-basic" label='Fecha de nacimiento' variant='outlined'></TextField></Grid2>
                            <Grid2 md={4}><TextField sx={{width: '100%'}} id="outlined-basic" label='Dirección' variant='outlined'></TextField></Grid2>
                            <Grid2 md={4}><TextField sx={{width: '100%'}} id="outlined-basic" label='Teléfono' variant='outlined'></TextField></Grid2>
                            <Grid2 md={4}><TextField sx={{width: '100%'}} id="outlined-basic" label='Sexo' variant='outlined'></TextField></Grid2>
                        </Grid2>
                    </form>
                </div>
                <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
                    <p className='text-title title-table'>Tabla de Clientes</p>
                </div>
            </div>
            
    )

}

export default BodyClientes