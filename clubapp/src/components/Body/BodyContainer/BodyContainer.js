import { Route } from 'wouter'
import './BodyContainer.css'

const BodyContainer = () => {

    return(
            <div className='body-container'>
                <Route path='/clientes' component={() => <div className='comp-1'></div>}></Route>
                <Route path='/cuotas' component={() => <div className='comp-2'></div>}></Route>
                <Route path='/planes' component={() => <div className='comp-3'></div>}></Route>
                <Route path='/reportes' component={() => <div className='comp-4'></div>}></Route>
                <Route path='/ajustes' component={() => <div className='comp-5'></div>}></Route>
            </div>
        
    )

}

export default BodyContainer