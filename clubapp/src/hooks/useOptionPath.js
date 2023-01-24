import { useEffect, useContext } from "react"
import useLocation from "wouter/use-location"
import NavContext from "../context/navContext"

const useOptionPath = () => {

    const {navState, updateNavState} = useContext(NavContext)

    const [location, setLocation] = useLocation()

    useEffect(() => {
        
        const pathLocation = location

        const ID_OPTION = {
            'clientes': 1,
            'cuotas': 2,
            'planes': 3,
            'reportes': 4,
            'ajustes': 5
        }

        let idOption = 1

        if (typeof ID_OPTION[pathLocation.substring(1, )] === "undefined"){
            setLocation('/clientes')
        } else {
             idOption = ID_OPTION[pathLocation.substring(1, )]
        }

        updateNavState({...navState, option: idOption})


    }, []);


}

export default useOptionPath