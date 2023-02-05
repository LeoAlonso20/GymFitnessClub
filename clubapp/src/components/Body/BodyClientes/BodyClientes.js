import './BodyClientes.css'
import React, { useContext } from 'react'
import NavContext from '../../../context/navContext'
import FormAdd from './FormAdd/FormAdd'
import Description from '../../Shared/Description'

const optionDescription = 'Texto provisional hasta que se encuentre que descripción poner en esta sección. La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque.'

const BodyClientes = () => {

    const { navState } = useContext(NavContext);

    return (
            <div >
                <Description title={'CLIENTES'} description={optionDescription} />
                <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
                    <p className='text-title title-add'>Nuevo Cliente</p>
                    <FormAdd />
                </div>
                <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
                    <p className='text-title title-table'>Tabla de Clientes</p>
                </div>
            </div>
            
    )

}

export default React.memo(BodyClientes)