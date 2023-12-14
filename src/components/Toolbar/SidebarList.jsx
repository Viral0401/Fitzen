import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

//icons
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

//image
import logo from "../../Logos/straddleblack.png"


const SidebarList = ({onCloseDrawer}) => {


return(
    <div className='p-3 h-full' style={{ maxWidth: '250px' }} >
        <div className='flex items-center justify-center w-full'>
            <img src={logo} alt="straddle logo" className='w-[80%] h-auto'/>
        </div>
          
        <List className='w-full'>
            
            <ListItem className='my-5'>
              <Link to="/community">
                <Button onClick={onCloseDrawer} style={{ color: 'black' }}>
                  <HomeIcon className='mr-3'/>Community
                </Button>
              </Link>
            </ListItem>

            <ListItem className='my-5'>
                <Link to="/finddonor">
                    <Button onClick={onCloseDrawer} style={{ color: 'black' }}>
                    <CalendarTodayIcon className='mr-3'/>Find a Donor
                    </Button>
                </Link>
            </ListItem>

        </List>
    </div>

    )

}

export default SidebarList