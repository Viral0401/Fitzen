import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";

//icons
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';

//image
import logo from "../../Logos/straddleblack.png"

import VoiceNav from './VoiceNav';
import SidebarList from './SidebarList'


export default function Sidebar() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);


    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


//   const [open, setOpen] = useState(false);      
      

  return (
    <div className='w-full shadow-lg'>
      <Box display="flex" justifyContent="space-between" p={2}>

            <div className='flex items-center justify-center'>
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon color='black'/>
                </Button>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                
                >
                    <SidebarList onCloseDrawer={toggleDrawer(false)}/> {/* pass a reference dont invoke it */}
                </Drawer>
                <img src={logo} alt="intellihealth logo" className='h-[40px]'/>
            </div>


            {/* ICONS */}
            <Box display="flex" gap="8px">
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    border="1px solid black"
                    borderRadius="8px"
                    padding="2px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>

                    <VoiceNav />  
                </Box>


                <IconButton>
                <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                <SettingsOutlinedIcon />
                </IconButton>

                {/* Profile dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/patientprofile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </div>
                
            </Box>


        </Box>
    </div>
  );
}
