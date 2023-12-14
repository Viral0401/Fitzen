import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
//icons
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';

//image
import logo from "../Logos/fitzen-logo.jpg"

import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#15181C',
  border: '1px solid ',
  boxShadow: 24,
  borderRadius: 10,
  color:'white',
  px: 4,
  py: 5
};




export default function Sidebar({setLogin}) {
  const navigate = useNavigate();
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

  // const {logout} = UserAuth()
  const [error, setError] = useState()

  const handleLogout = async (e) => {
    e.preventDefault();
    setError('');
    try {
        // await logout();
        setLogin(false)
        setAnchorEl(null);
        navigate('/Login')
      } 
      catch (e) {
        setError(e.message);
        console.log(error);
      }

  }

  const [open, setOpen] = useState(false);
  const handleVoiceNavOpen = () => setOpen(true);
  const handleVoiceNavClose = () => setOpen(false);

  const [redirectUrl, setRedirectUrl] = useState("");
    const commands = [
        {
        command: ["Go to * page", "Go to *", "Open * page", "Open *"],
        // callback: (redirectPage) => setRedirectUrl(redirectPage),
        callback: (redirectPage) => setRedirectUrl(encodeURIComponent(redirectPage)),
        },
    ];
    const { transcript } = useSpeechRecognition({ commands });

    useEffect(() => {
        if (redirectUrl) {
            navigate(`/${redirectUrl}`);
            setRedirectUrl(""); // Clear the redirectUrl after navigation
        }
    }, [redirectUrl, navigate])

    // const pages = ["community", "education", "blogs", "videos", "insurance", "schemes" ];
    // const urls = {
    //     community: "/community",
    //     education: "/education",
    //     blogs: "/blog",
    //     videos: "/edvideo",
    //     insurance: "/insurance",
    //     schemes: "/schemes",
    // };

    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return null;
    // }

  
    const list = () => {
        
          return (
            <div
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className='p-5 my-6  h-full flex flex-col items-center justify-start'
              style={{ maxWidth: '300px' }}
            >
              <img src={logo} alt="fitzen logo" className='h-[30px] w-[160px]'/>
              <List>
                <ListItem className='my-5'>
                  <Link to="/Dashboard">
                    <Button style={{ color: 'black' }}>
                      <MdOutlineDashboard className='mr-3' size={25}/>Dashboard
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-5'>
                  <Link to="/exercise">
                    <Button style={{ color: 'black' }}>
                      <IoIosFitness className='mr-3' size={25}/>Exercise
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-5'>
                  <Link to="/meal-plan">   
                    <Button style={{ color: 'black' }}>
                      <GiMeal className='mr-3' size={25}/>AI Meal Plans
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-5'>
                  <Link to="/fundraiser">   
                    <Button style={{ color: 'black' }}>
                      <MdConnectWithoutContact className='mr-3' size={25}/>Meet New People
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-5'>
                  <Link to="/rewards">   
                    <Button style={{ color: 'black' }}>
                      <GiPodiumWinner className='mr-3' size={25}/>Rewards
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-5'>
                  <Link to="/mental-health">   
                    <Button style={{ color: 'black' }}>
                      <RiMentalHealthLine className='mr-3' size={25}/>Mental Health
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </div>
          )
      };
      
      

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
                    {list()}
                </Drawer>
                <img src={logo} alt="fitzen logo" className='h-[30px] w-[160px]'/>
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

                    <IconButton onClick={handleVoiceNavOpen} type="button" sx={{ p: 1 }}>
                        <MicIcon />
                    </IconButton>

                    <Modal
                        open={open}
                        onClose={handleVoiceNavClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h1 className=" text-center text-2xl mb-10">Voice Assisted Tab Navigation</h1>
                            <p className="my-16">Transcript: &nbsp;&nbsp;
                            <span className="text-white">{transcript}</span> </p>
                            <div className=" flex items-center justify-center">
                            <Button variant="contained" className="bg-[#4961e7] transition duration-300 hover:text-black px-5 py-2 rounded-full "
                            onClick={SpeechRecognition.startListening}>Start</Button>
                            </div>
                        </Box>
                    </Modal>

                    
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
                        <Link to="/Profile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
                
            </Box>
        </Box>
    </div>
  );
}
