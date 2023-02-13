import './SearchBar.css'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { StyledInput } from '../../../Shared/StyledComponents';
import SearchItem from './SearchItem/SearchItem';

const clients = [
    {
        firstName: 'Leandro',
        lastName: 'Alonso',
        idNumber: '42497815',
        birth: '19/03/2000',
        address: 'General Paz 27',
        gender: 0,
        payState: 0
    },
    {
        firstName: 'Gimena',
        lastName: 'Ciriaci Ribone',
        idNumber: '42000000',
        birth: '15/06/2000',
        address: 'San Lorenzo 300',
        gender: 1,
        payState: 2
    },
    {
        firstName: 'Rick',
        lastName: 'Sanchez',
        idNumber: '32004540',
        birth: '22/04/1989',
        address: 'Rio Cuarto 4321',
        gender: 0,
        payState: 1
    },
    {
        firstName: 'Barack',
        lastName: 'Obama',
        idNumber: '24513412',
        birth: '24/11/1971',
        address: 'Chicago Bulls 23',
        gender: 0,
        payState: 0
    },
    {
        firstName: 'Sansa',
        lastName: 'Stark',
        idNumber: '4689876',
        birth: '03/02/2008',
        address: 'Invernalia 2031',
        gender: 1,
        payState: 2
    },
    {
        firstName: 'Carla',
        lastName: 'Strauss',
        idNumber: '23415632',
        birth: '03/02/1973',
        address: 'Ponce 198',
        gender: 1,
        payState: 1
    },
    {
        firstName: 'Marco',
        lastName: 'Aurelio',
        idNumber: '19004321',
        birth: '01/10/1951',
        address: 'San Lucas 18',
        gender: 0,
        payState: 1
    }
]

const SearchBar = forwardRef((props, ref) => {

    const [open, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useImperativeHandle(ref, () => {
        return {
            handleClose
        }
    })
    

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', 
                    height: '40px', position: 'relative', left: '1em', top: '1em' }}>
                <IconButton
                    size="small"
                    sx={{ ml: 2 }}
                    onClick={handleClick}
                >
                    <Avatar sx={{ width: 40, height: 40, backgroundColor: 'rgb(99, 115, 129, 0.12)' }}>
                    <SearchIcon sx={{color: 'rgb(33, 43, 54)'}} />
                    </Avatar>
                </IconButton>
            </Box>
            <div className={`container-search ${open ? 'container-search-translate' : ''}`}>
                <div className='search-item'>
                    <SearchIcon sx={{color: 'rgb(77, 77, 77, 0.7)', position: 'relative', left: '-0.3em'}} />
                    <StyledInput placeholder='Buscar...'/>
                </div>
                {
                    open
                        ? clients.slice(0, 6).map(client => {
                            return <SearchItem key={client.idNumber} firstName={client.firstName} 
                                               lastName={client.lastName} gender={client.gender}
                                               payState={client.payState}/>                         
                        }) 
                        
                        : ''
                }
                <div className={`button-close-search ${ clients.length === 0 ? 'button-close-search-position' : '' }`}>
                    <HorizontalRuleRoundedIcon sx={{color: 'rgb(77, 77, 77, 0.7)', cursor: 'pointer'}} onClick={handleClose}/>
                </div>
            </div>
      </>
    )
})

export default React.memo(SearchBar)