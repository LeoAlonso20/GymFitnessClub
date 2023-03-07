  import './LengMenu.css'
  import * as React from 'react';
  import Box from '@mui/material/Box';
  import Avatar from '@mui/material/Avatar';
  import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import IconButton from '@mui/material/IconButton';
  import Tooltip from '@mui/material/Tooltip';
  import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


  export default function LengMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
          <Tooltip title="Idioma">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, backgroundColor: 'transparent' }}>
                <LanguageRoundedIcon sx={{color: 'rgb(33, 43, 54)'}} />
                </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              mt: 1.5,
              boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px',
              borderRadius: '12px',
              backgroundColor: 'rgb(255,255,255)',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div className='container-options-menu-user menu-user-amp'>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/argentina.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Español</p>
            </MenuItem>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/brazil.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Portugués</p>
            </MenuItem>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/united-states.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Inglés</p>
            </MenuItem>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/china.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Chino</p>
            </MenuItem>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/france.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Francés</p>
            </MenuItem>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%', margin: '3px', maxHeight: '32px'}} onClick={handleClose}>
              <img src={require('../../../../images/idiomas/italy.png')} alt='arg' className='img-leng'/>
              <p className='name-user option-text leng-text'>Italiano</p>
            </MenuItem>
          </div>
        </Menu>
      </React.Fragment>
    );
  }
