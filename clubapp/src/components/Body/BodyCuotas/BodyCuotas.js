import './BodyCuotas.css'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Description from '../../Shared/Description';
import { StyledContainer } from '../../Shared/StyledComponents';
const optionDescription = 'Texto provisional hasta que se encuentre que descripción poner en esta sección. La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque. '

const BodyCuotas = () => {
    return (
            <Grid2 container spacing={2} sx={{width: '100%', height: '100%', position: 'relative'}}>
                <Grid2 md={3.5} sx={{height: '38%', width: '100%'}}>
                    <Description title={'CUOTAS'} description={optionDescription} sx={{backgroundColor: 'rgb(220, 20, 60, 0.925)'}}/>
                </Grid2>
                <Grid2 md={8.5} sx={{height: '38%'}}>
                    <StyledContainer sx={{display: 'flex', justifyContent: 'center'}}>
                            <p className='text-title title-add'>Nuevo Cliente</p>
                    </StyledContainer>
                </Grid2>
                <Grid2 md={4} sx={{height: '62%'}}>
                    <StyledContainer></StyledContainer>
                </Grid2>
                <Grid2 md={4} sx={{height: '62%'}}>
                    <StyledContainer></StyledContainer>
                </Grid2>
                <Grid2 md={4} sx={{height: '62%'}}>
                    <StyledContainer></StyledContainer>
                </Grid2>
            </Grid2>
    )
}

export default BodyCuotas
