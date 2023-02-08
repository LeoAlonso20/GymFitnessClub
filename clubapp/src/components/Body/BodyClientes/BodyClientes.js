import './BodyClientes.css'
import React, { useContext } from 'react'
import NavContext from '../../../context/navContext'
import FormNewClient from './FormNewClient/FormNewClient'
import TableClients from './TableClients/TableClients'
import Description from '../../Shared/Description'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const optionDescription = 'Texto provisional hasta que se encuentre que descripción poner en esta sección. La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque.'

const BodyClientes = () => {

    const { navState } = useContext(NavContext);

    return (
            // Ver forma de no tener que usar la propiedad left
            <Grid2 container spacing={2} sx={{width: '95%', position: 'relative', left: '5em'}}>
                <Grid2 md={3.5} sx={{height: '38%'}}>
                    <Description title={'CLIENTES'} description={optionDescription} />
                </Grid2>
                <Grid2 md={8.5} sx={{height: '38%'}}>
                    <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
                        <p className='text-title title-add'>Nuevo Cliente</p>
                        <FormNewClient />
                    </div>
                </Grid2>
                <Grid2 md={8} sx={{height: '62%'}}>
                    <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
                        <p className='text-title title-table'>Lista de Clientes</p>
                        <TableClients />
                    </div>
                </Grid2>
                <Grid2 md={4} sx={{height: '62%'}}>
                    <div className={`container-search-clientes ${navState.open ? '' : 'search-dec'}`}>
                        <p className='text-title title-table'>Lista de Clientes</p>
                    </div>
                </Grid2>
            </Grid2>
            // <div >
            //     <Description title={'CLIENTES'} description={optionDescription} />
            //     <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
            //         <p className='text-title title-add'>Nuevo Cliente</p>
            //         <FormNewClient />
            //     </div>
            //     <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
            //         <p className='text-title title-table'>Lista de Clientes</p>
            //         <TableClients />
            //     </div>
            //     {/* <div className={`container-search-clientes ${navState.open ? '' : 'search-dec'}`}>
            //         <p className='text-title title-table'>Lista de Clientes</p>
            //     </div> */}
            // </div>
            
    )

}

export default React.memo(BodyClientes)