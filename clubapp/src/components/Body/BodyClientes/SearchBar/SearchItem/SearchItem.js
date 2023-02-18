import './SearchItem.css'
import Face2TwoToneIcon from '@mui/icons-material/Face2TwoTone';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';

const SearchItem = ({firstName, lastName, gender, payState, onClick}) => {
    const renderSwitch = (payState) => {
        switch(payState) {
            case 0:          
                return <p className='state-result-item'>Al día</p>
            case 1:
                return <p className='state-result-item'>Por vencer</p>
            case 2:
                return <p className='state-result-item'>Vencido</p>
            default:
                return <p className='state-result-item'>ERROR</p>
        }
    }

    const renderIcon = (gender) => {
        let icon

        gender === 0 
                ?  icon = <FaceTwoToneIcon sx={{color: 'rgb(33, 43, 54)', fontSize: '2.25em', position: 'relative', margin: '0 12px'}}/>
                :  icon = <Face2TwoToneIcon sx={{color: 'rgb(33, 43, 54)', fontSize: '2.25em', position: 'relative', margin: '0 12px'}}/>
        return icon
    }

    return (
        <div className='result-item' onClick={onClick}>
            {renderIcon(gender)}
            <div className='info-client'>
                <p className='name-result-item'>{firstName} {lastName}</p>
                <div className={`state-pay ${payState === 1 ? 'state-pay-por-vencer': ''} ${payState === 2 ? 'state-pay-vencido' : ''}`}>
                <p className='state-result-item'></p>
                    {renderSwitch(payState)}
                </div>
            </div>
        </div>  
    ) 
}

export default SearchItem