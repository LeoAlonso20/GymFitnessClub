import './OptionContainer.css'
import React from 'react'

const OptionContainer = ({children}) => {
    return (
        <div className='option-container'>
            {children}
        </div>
    )
}

export default React.memo(OptionContainer)