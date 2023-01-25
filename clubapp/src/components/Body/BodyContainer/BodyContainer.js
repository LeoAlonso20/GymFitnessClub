import { Route, Switch, useLocation } from 'wouter'
import './BodyContainer.css'
import { useContext } from 'react'
import NavContext from '../../../context/navContext'
import BodyClientes from '../BodyClientes/BodyClientes'
import RapidTools from '../RapidTools/RapidTools'
import { Animated } from 'react-animated-css'


const BodyContainer = () => {

    const [location] = useLocation()

    const {navState} = useContext(NavContext);

    return(
            <div className={`body-container ${navState.open ? 'body-container-amp' : ''}`}>
                <RapidTools />
                <Switch>
                    <Route path='/clientes'>
                        {
                        location === '/clientes'
                                  ? <Animated animationIn='fadeIn' animationInDuration={500}> 
                                        <div className='container-option'>
                                             <BodyClientes></BodyClientes>
                                        </div>
                                    </Animated>
                                  : <></>
                        } 
                    </Route>
                    <Route path='/cuotas' component={() => <div className='comp-2'></div>}></Route>
                    <Route path='/planes' component={() => <div className='comp-3'></div>}></Route>
                    <Route path='/reportes' component={() => <div className='comp-4'></div>}></Route>
                    <Route path='/ajustes' component={() => <div className='comp-5'></div>}></Route>
                </Switch>
            </div>
        
    )

}

export default BodyContainer