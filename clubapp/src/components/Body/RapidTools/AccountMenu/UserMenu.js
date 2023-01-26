import './UserMenu.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
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
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40, backgroundColor: 'rgb(0, 0, 0, 0.925)' }}>I</Avatar>
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
        <div className='container-info-user'>
          <p className='name-user'>Usuario App</p>
          <p className='email-user'>usuarioApp0@gmail.com</p>
        </div>
        <Divider sx={{borderWitdh: '0px 0px thin', borderColor: 'rgba(145, 158, 171, 0.24)', borderStyle: 'dashed'}}/>
        <div className='container-options-menu-user'>
          <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%'}} onClick={handleClose}>
            <p className='name-user option-text'>Home</p>
          </MenuItem>
          <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%'}} onClick={handleClose}>
            <p className='name-user option-text'>Perfil</p>
          </MenuItem>
          <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%'}} onClick={handleClose}>
            <p className='name-user option-text'>Ajustes</p>
          </MenuItem>
        </div>
          <Divider sx={{borderWitdh: '0px 0px thin', borderColor: 'rgba(145, 158, 171, 0.24)', borderStyle: 'dashed'}}/>
          <div className='container-options-menu-user'>
            <MenuItem sx={{borderRadius: '8px', padding: '6px 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '94%'}} onClick={handleClose}>
              <p className='name-user option-text'>Cerrar sesión</p>
            </MenuItem>
          </div>
      </Menu>
    </React.Fragment>
  );
}
