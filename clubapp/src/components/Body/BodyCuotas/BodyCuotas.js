import './BodyCuotas.css'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const BodyCuotas = () => {
    return (
        <>
            <Grid2 container spacing={3} sx={{width: '1700px', position: 'relative', left: '2em'}} className='grid2'>
                <Grid2 xs={12} md={4} sx={{border: '1px solid red'}}>
                    <Item>1</Item>
                </Grid2>
                <Grid2 xs={12} md={8} sx={{border: '1px solid blue'}}>
                <Item>1</Item>

                </Grid2>
                <Grid2 xs={8} sx={{background: 'blue'}}>
                </Grid2>
            </Grid2>
        </>
    )
}

export default BodyCuotas
