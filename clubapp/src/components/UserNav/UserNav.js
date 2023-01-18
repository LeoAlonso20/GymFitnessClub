import React from "react"
import './UserNav.css'
import {Animated} from "react-animated-css";


const UserNav = ({open}) => {
    return (
        <>
        {
            open
                    ? <></>
                    : <Animated animationIn="fadeIn" animationInDuration={500}>
                        <div className='container-user'>
                            <div className="first-column">
                                <div className="logo-user">U</div>
                            </div>
                            <div className="second-column">
                                <div className="info-user">
                                    <p className="name-user">Usuario App</p>
                                    <p className="profile-name">admin</p>
                                </div>
                            </div>
                        </div>
                      </Animated>
            
        }
        </>
    )
}

export default React.memo(UserNav)