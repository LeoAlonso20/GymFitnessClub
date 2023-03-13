import './BodyCuotas.css'
import React from 'react';
import { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Description from '../../Shared/Description';
import { StyledContainer } from '../../Shared/StyledComponents';
import SearchBar from '../BodyClientes/SearchBar/SearchBar';
import QuoteValue from './QuoteValue/QuoteValue';
import RecMonth from './RecMonth/RecMonth';

const optionDescription = 'Texto provisional hasta que se encuentre que descripción poner en esta sección. La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque. '

const BodyCuotas = () => {

    const [ clientSelected, setClientSelected ] = useState(null)

    return (
            <Grid2 container spacing={2} sx={{width: '100%', height: '100%', position: 'relative'}}>
                <Grid2 md={3.5} sx={{height: '38%', width: '100%'}}>
                    <Description title={'CUOTAS'} description={optionDescription} sx={{backgroundColor: 'rgb(220, 20, 60, 0.925)'}}/>
                </Grid2>
                <Grid2 md={5.5} sx={{height: '38%'}}>
                    <StyledContainer>
                            <SearchBar clientSelected={clientSelected} setClientSelected={setClientSelected} sx={{left: '0.5em', top: '1.2em'}} idIcon={1}/>
                            <p className='text-title title-add title-reg-pay'>Registrar pago</p>
                            <div className='container-img-pay'>
                                    <img src={require('../../../images/functions/billetes.png')} alt='pay-img' className='img-pay'/>
                                    <p className='text-legend-pay'>Registre el pago de una cuota en 3 simples pasos</p>
                            </div>
                    </StyledContainer>
                </Grid2>
                <Grid2 md={3} sx={{height: '38%'}}>
                    <StyledContainer sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p className='text-title title-add'>Valor de cuota</p>
                            <QuoteValue />
                    </StyledContainer>
                </Grid2>
                <Grid2 md={6} sx={{height: '62%'}}>
                    <StyledContainer>
                        <p className='text-title title-add title-table'>Cuotas por cobrar</p>
                    </StyledContainer>
                </Grid2>
                <Grid2 md={3} sx={{height: '62%'}}>
                        <StyledContainer></StyledContainer>
                </Grid2>
                <Grid2 container md={3} sx={{height: '62%'}}>
                    <Grid2 md={12} sx={{height: '51.5%'}}>
                        <StyledContainer sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p className='text-title title-add title-rec'>Recaudación del mes</p>
                            <RecMonth />
                        </StyledContainer>
                    </Grid2>
                    <Grid2 md={12} sx={{height: '51.5%'}}>
                        <StyledContainer></StyledContainer>
                    </Grid2>
                </Grid2>
            </Grid2>
    )
}

export default React.memo(BodyCuotas)
