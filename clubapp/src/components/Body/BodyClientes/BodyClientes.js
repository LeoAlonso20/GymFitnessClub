import './BodyClientes.css'
import { useContext } from 'react'
import { Animated } from 'react-animated-css'
import NavContext from '../../../context/navContext'

const BodyClientes = () => {

    const {navState} = useContext(NavContext);

    return (
            <div >
                {/* Tratar de refactorizar en componentes */}
                <div className="container-option-description">
                    <div className='container-content'>
                        <div className='container-title-description'>
                            <p className='text-title title-description'>CLIENTES</p>
                        </div>
                        <div className='container-info-description'>
                            <p className='text-description'>
                                Texto provisional hasta que se encuentre que descripción poner en esta sección.
                                La idea es algo resumido, que igualmente ocupe un buen espacio además de sumarle alguna imagen al bloque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`container-add-cliente ${navState.open ? '' : 'add-dec'}`}>
                    <p className='text-title title-add'>Nuevo Cliente</p>
                </div>
                <div className={`container-table-clientes ${navState.open ? '' : 'table-dec'}`}>
                    <p className='text-title title-table'>Tabla de Clientes</p>
                </div>
            </div>
            
    )

}

export default BodyClientes