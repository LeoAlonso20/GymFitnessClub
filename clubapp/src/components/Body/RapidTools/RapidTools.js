import React from 'react'
import './RapidTools.css'
import UserMenu from './UserMenu/UserMenu'
import LengMenu from './LengMenu/LengMenu'
import NotificationMenu from './NotificationMenu/NotificationMenu'

const RapidTools = () => {

    return (
        <div className="container-head-tools">
            <div className='container-rapid-tools'>
                <div className='tool tool-leng'>
                    <LengMenu />
                </div>
                <div className='tool tool-notification'>
                    <NotificationMenu />
                </div>
                <div className='tool tool-user'>
                    <UserMenu />
                </div>
            </div>
        </div>
    )

}

export default React.memo(RapidTools)