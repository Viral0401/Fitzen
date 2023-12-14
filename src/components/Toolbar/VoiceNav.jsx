import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
  
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, IconButton} from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';

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

const VoiceNav = () => {

    const navigate = useNavigate();
    
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


  return (
    <>
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
    </>
  )
}

export default VoiceNav