import { useState } from "react";
import NavContext from "./navContext";

const NavProvider = ({children}) => {

    const [navState, setNavState] = useState({
        open: true,
        option: 1
    });

    const updateNavState = (newNavState) => {
        setNavState(() => newNavState)
    }

    return (
        <NavContext.Provider value={{navState, updateNavState}} >
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider