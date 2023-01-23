import { useEffect, useContext } from "react"
import useLocation from "wouter/use-location"
import NavContext from "../context/navContext"

const useOptionPath = () => {

    const {navState, updateNavState} = useContext(NavContext)

    const [location] = useLocation()

    useEffect(() => {
        
        const pathLocation = location

        const ID_OPTION = {
            'clientes': 1,
            'cuotas': 2,
            'planes': 3,
            'reportes': 4,
            'ajustes': 5
        }

        const idOption = ID_OPTION[pathLocation.substring(1, )]

        updateNavState({...navState, option: idOption})

    }, []);

}

export default useOptionPath