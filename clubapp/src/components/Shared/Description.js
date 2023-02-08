import React, {useContext} from "react"
import NavContext from "../../context/navContext";
import './Description.css'

const Description = ({title, description}) => {

    const { navState } = useContext(NavContext);

    return (
        <div className={`container-option-description ${navState.open ? '' : 'desc-dec'}`}>
                    <div className='container-content'>
                        <div className={`container-title-description  ${navState.open ? '' : 'container-title-desc-dec'}`}>
                            <p className={`text-title title-description ${navState.open ? '' : 'title-desc-dec'}`}>{title}</p>
                        </div>
                        <div className={`container-info-description ${navState.open ? '' : 'info-dec'}`}>
                            <p className='text-description'>
                                {description}
                            </p>
                        </div>
                    </div>
        </div>
    )

}

export default React.memo(Description)