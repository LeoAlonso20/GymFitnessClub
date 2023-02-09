import './BodyClientes.css'
import React from 'react'
import FormNewClient from './FormNewClient/FormNewClient'
import TableClients from './TableClients/TableClients'
import Description from '../../Shared/Description'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { StyledContainer } from '../../Shared/StyledComponents'
const optionDescription = 'Texto provisional hasta que se encuentre que descripción poner en esta sección. La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque.'

const BodyClientes = () => {

    return (
        //Ver de transformar el componente description en un styledComponent
            <Grid2 container spacing={2} sx={{width: '90%', position: 'relative', left: '7.5em'}}>
                <Grid2 md={3.5} sx={{height: '38%'}}>
                    <Description title={'CLIENTES'} description={optionDescription} />
                </Grid2>
                <Grid2 md={8.5} sx={{height: '38%'}}>
                    <StyledContainer sx={{display: 'flex', justifyContent: 'center'}}>
                        <p className='text-title title-add'>Nuevo Cliente</p>
                        <FormNewClient />
                    </StyledContainer>
                </Grid2>
                <Grid2 md={8} sx={{height: '62%'}}>
                    <StyledContainer sx={{display: 'flex', justifyContent: 'center'}}>
                        <p className='text-title title-table'>Lista de Clientes</p>
                        <TableClients />
                    </StyledContainer>
                </Grid2>
                <Grid2 md={4} sx={{height: '62%'}}>
                    <StyledContainer>
                        <p className='text-title title-table'>Lista de Clientes</p>
                    </StyledContainer>
                </Grid2>
            </Grid2>    
    )

}

export default React.memo(BodyClientes)