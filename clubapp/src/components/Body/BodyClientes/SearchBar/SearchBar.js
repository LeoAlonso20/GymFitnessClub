import './SearchBar.css'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { StyledInput } from '../../../Shared/StyledComponents';
import SearchItem from './SearchItem/SearchItem';
import { useForm, Controller } from 'react-hook-form';

const clients = [
    {
        firstName: 'Leandro Romano',
        lastName: 'Alonso Millicay',
        idNumber: '42497815',
        birth: '19/03/2000',
        address: 'General Paz 27',
        phone: '3572671602',
        email: 'leandroalonso2000@gmail.com',
        gender: 0,
        payState: 0
    },
    {
        firstName: 'Eric',
        lastName: 'Chiarenza',
        idNumber: '42000000',
        birth: '15/06/2000',
        address: 'San Lorenzo 300',
        phone: '3572506070',
        email: 'ericc@gmail.com',
        gender: 0,
        payState: 2
    },
    {
        firstName: 'Rick',
        lastName: 'Sanchez',
        idNumber: '32004540',
        birth: '22/04/1989',
        address: 'Rio Cuarto 4321',
        phone: '351607542',
        email: 'ricksanchezrickmorty@gmail.com',
        gender: 0,
        payState: 1
    },
    {
        firstName: 'Barack',
        lastName: 'Obama',
        idNumber: '24513412',
        birth: '24/11/1971',
        address: 'Chicago Bulls 23',
        phone: '3571325621',
        email: 'barackobama@gmail.com',
        gender: 0,
        payState: 0
    },
    {
        firstName: 'Sansa',
        lastName: 'Stark',
        idNumber: '4689876',
        birth: '03/02/2008',
        address: 'Invernalia 2031',
        phone: '351606060',
        email: 'sansastark@gmail.com',
        gender: 1,
        payState: 2
    },
    {
        firstName: 'Carla',
        lastName: 'Strauss',
        idNumber: '23415632',
        birth: '03/02/1973',
        address: 'Ponce 198',
        phone: '11542012',
        email: 'strausscarla@gmail.com',
        gender: 1,
        payState: 1
    },
    {
        firstName: 'Marco',
        lastName: 'Aurelio',
        idNumber: '19004321',
        birth: '01/10/1951',
        address: 'San Lucas 18',
        phone: '115034211',
        email: 'aureliomarco1@gmail.com',
        gender: 0,
        payState: 1
    }
]


const SearchBar = forwardRef(({clientSelected, setClientSelected, sx, idIcon}, ref) => {

    const [open, setOpen] = useState(false)

    const [ clientsResult, setClientsResult ] = useState([])

    // const [ clientSelected, setClientSelected ] = useState(null)

    const { control, reset, getValues } = useForm({
        defaultValues: {
            keyword: ''
        }
    })
    
    const handleClick = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
        setClientsResult([])
        reset()
    }

    const handleSelectClient = (client) => {
        setClientSelected(prevClient => client)
        handleClose()
    }

    const handleBack = () => {
        setClientSelected(null)
    }

    useImperativeHandle(ref, () => {
        return {
            handleClose
        }
    })
    
    const handleKeyUp = () => {
        const { keyword } = getValues()

        setClientsResult([])

        if( !keyword ) return

        clients.map(client => `${client.firstName.toLowerCase()} ${client.lastName.toLowerCase()}`.includes(keyword.toLowerCase()) ? setClientsResult(prevClients => [...prevClients, client]) : '')
    }

    const controlVisibility = (clientSelected) => {
        if( clientSelected ) return 'visible'
        return 'hidden'
    }

    const defineIconShow = idIcon => {
        switch(idIcon){

            case 1:
                return <AttachMoneyRoundedIcon sx={{color: 'rgb(33, 43, 54)'}}/>
            default:
                return <SearchIcon sx={{color: 'rgb(33, 43, 54)'}} /> 

        }
    }

    
    return (
        <>
            <div className='box-search-container'>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', 
                    height: '40px', position: 'relative', left: '1.4em', top: '1em', ...sx}}>
                <IconButton
                    size="small"
                    sx={{ ml: 2 }}
                    onClick={handleClick}
                >
                    <Avatar sx={{ width: 40, height: 40, backgroundColor: 'rgb(99, 115, 129, 0.12)' }}>
                    {
                        defineIconShow(idIcon)
                    }
                    </Avatar>
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', 
                    height: '40px', position: 'relative', left: '1em', top: '1em', marginLeft: '1em',
                    visibility: controlVisibility(clientSelected) }}>
                <IconButton
                    size="small"
                    sx={{ ml: 2 }}
                    onClick={handleBack}
                >
                    <Avatar sx={{ width: 40, height: 40, backgroundColor: 'rgb(99, 115, 129, 0.12)' }}>
                    <CloseRoundedIcon sx={{color: 'rgb(33, 43, 54)'}} />
                    </Avatar>
                </IconButton>
            </Box>
            </div>
            <div className={`container-search ${open ? 'container-search-translate' : ''}`}>
                <form className='search-item' action='#' onSubmit={(e) => e.preventDefault()}>
                    <SearchIcon sx={{color: 'rgb(77, 77, 77, 0.7)', position: 'relative', left: '-0.3em'}} />
                    <Controller name='keyword' control={control} render={({field}) => 
                        <StyledInput placeholder='Buscar...' {...field} onKeyUp={handleKeyUp} />}>    
                    </Controller>
                </form>
                {
                    open
                        ? clientsResult.slice(0, 6).map(client => {
                            return <SearchItem key={client.idNumber} firstName={client.firstName} 
                                               lastName={client.lastName} gender={client.gender}
                                               payState={client.payState} onClick={() => handleSelectClient(client)}/>                         
                        }) 
                        
                        : ''
                }
                <div className={`button-close-search ${ clientsResult.length === 0 ? 'button-close-search-position' : '' }`}>
                    <HorizontalRuleRoundedIcon sx={{color: 'rgb(77, 77, 77, 0.7)', cursor: 'pointer'}} onClick={handleClose}/>
                </div>
            </div>
      </>
    )
})

export default React.memo(SearchBar)