import './RapidTools.css'
import AccountMenu from './AccountMenu/UserMenu'

const RapidTools = () => {

    return (
        <div className="container-head-tools">
            <div className='container-rapid-tools'>
                <div className='tool tool-leng'>
                    <AccountMenu />
                </div>
                <div className='tool tool-user'>
                    <AccountMenu />
                </div>
                <div className='tool tool-logOut'>
                    <AccountMenu />
                </div>
            </div>
        </div>
    )

}

export default RapidTools