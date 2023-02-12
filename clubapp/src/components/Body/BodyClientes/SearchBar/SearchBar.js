import './SearchBar.css'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { StyledInput } from '../../../Shared/StyledComponents';

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
                <SearchIcon sx={{color: 'rgb(77, 77, 77, 0.7)', position: 'relative', left: '-0.3em'}} />
                <StyledInput placeholder='Buscar...'/>
                <HorizontalRuleRoundedIcon sx={{color: 'rgb(77, 77, 77, 0.7)', position: 'absolute', bottom: '0.05em', cursor: 'pointer'}} onClick={handleClose}/>
            </div>
      </>
    )
})

export default React.memo(SearchBar)