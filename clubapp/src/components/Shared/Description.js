import React from "react"
import './Description.css'

const Description = ({title, description, sx}) => {


    return (
        <div className={`container-option-description`}>
                    <div className='container-content'>
                        <div className={`container-title-description`}>
                            <p className={`text-title title-description`}>{title}</p>
                        </div>
                        <div className={`container-info-description`}>
                            <p className='text-description'>
                                {description}
                            </p>
                        </div>
                    </div>
        </div>
    )

}

export default React.memo(Description)