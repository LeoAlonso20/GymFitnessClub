import { useState, forwardRef ,useImperativeHandle } from 'react'
import { Snackbar, Alert, Slide} from '@mui/material'

const TransitionTop = (props) => {
    return <Slide {...props} direction='up' />
}

const Snack = forwardRef((props, ref) => {

    const [snack, setSnack] = useState({
        open: false,
        severity: 'success',
        message: ''
    })

    const handleClose = () => {
        setSnack({...snack, open: false})
    }

    useImperativeHandle(ref, () => {
        return {
            setSnack
        }
    })


    return (
        <Snackbar   anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                    open={snack.open} 
                    key={'leftbottom'} 
                    onClose={handleClose} 
                    autoHideDuration={6000}
                    TransitionComponent={TransitionTop}
                    >
                        <Alert onClose={handleClose} severity={snack.severity} sx={{ width: '100%' }}>
                            <p className='text-snackbar'>{snack.message}</p>
                        </Alert>
        </Snackbar>
    )

})

export default Snack