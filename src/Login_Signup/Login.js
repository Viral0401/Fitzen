import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";
import { UserAuth } from '../FirebaseAuthContext/AuthContext';


import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from '../Logos/fitzen-logo.jpg'
import hero from './fitness-hero.png'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Login = ({setLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { signIn } = UserAuth();

    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
        await signIn(email, password)
        setLogin(true)
        navigate('/Dashboard')
        } catch (e) {
        setError(e.message)
        console.log(error)
        }
    };

  return (
    <div style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}} className="h-screen w-screen overflow-y-hidden flex items-center justify-between px-10" >

        <div className="w-[60%] flex flex-col items-center justify-center h-full">
            
            <Flip left><img src={hero} alt="rupee" className=" w-[550px]"/></Flip>
        
        </div>
        
        
        <Fade left>
        <div className="h-[90%] w-[40%] rounded-3xl bg-white flex flex-col item-center justify-center shadow-2xl">

            <div className=" w-full pt-4">
                <a href="/" className="flex justify-center"><img src={logo} style={{height:"auto", width:"40%"}} alt="intellihealt logo"/></a>
            </div>
      
            <div className="flex flex-col item-center justify-center w-full px-8 pb-5 pt-2" >

                <div>

                    <h1 className="text-3xl mt-3 mb-3 font-semibold tracking-widest ">Login</h1>

                    <h4 className="font-semibold text-[#c0c0c0] cursor-pointer">Not Signed Up? <span className="text-[#8D2FFF]"><Link to="/SignUp">SignUp</Link></span></h4>

                </div>

                <div className="w-[100%] mt-5">
                    <p className="font-medium">Email</p>
                    <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input className="appearance-none bg-transparent border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"  type="text" placeholder="Enter your email address" name="email" 
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                    />
                    </div>
                    <p className="font-medium mt-5">Password</p>
                    <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input
                        onChange={(e) => {
                        setPassword(e.target.value);
                        }} 
                        value={password} 
                        className="appearance-none bg-none border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"
                        type="password" placeholder="Enter your password" name="password"
                    />
                    </div>

                    
                    <div className="mt-8 mb-5" >
                        <Link to="/Dashboard">
                            <Button 
                            onClick={handleSubmit}  
                            variant="contained" className="w-full rounded-full" style={{padding:"10px"}}>Login
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-center gap-4">
                        <hr className="border border-[#F0F1EB] w-[45%]" />
                        <p>OR</p>
                        <hr className="border border-[#F0F1EB] w-[45%]" />
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <button className="flex items-center justify-start gap-5 py-2 px-5 w-full border border-[#b7b8b2] "><FcGoogle size={25} /> Continue with Google</button>
                        <button className="flex items-center justify-start gap-5 py-2 px-5 w-full border border-[#b7b8b2] "><FaApple  size={25}/> Continue with Apple</button>
                    </div>

                </div>
            </div>

        </div>
        </Fade>
        
    </div>
  );
};

export default Login;







//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const {role, setRole} = useRoleContext();

//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { signIn } = UserAuth();

//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [webcamActivated, setWebcamActivated] = useState(false);
//   const activateWebcam = () => {
//     setWebcamActivated(true);
//   };

//   const capturePhoto = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);

    // // Send the captured image as a POST request
    // try {
    //   const response = await axios.post('/upload', { image: imageSrc });
    //   console.log('Image uploaded successfully:', response.data);
    // } catch (error) {
    //   console.error('Error sending image:', error);
    // }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('')
//     try {
//       await signIn(email, password)
//       setPatient(true)
//       navigate('/community')
//     } catch (e) {
//       setError(e.message)
//       console.log(error)
//     }
//   };












//   const url = "http://localhost:5000/";

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(url + `login${role}`, { email, password });
//       const token = res.data.authToken;
//       localStorage.setItem("token", token);
//       localStorage.setItem("userType", role);
//       if (role === "user") {
//         setMe(true);
//         navigate("/pension");
//       } else if (role === "helper") {
//         setMe(true);
//         navigate("/postjobs");
//       }
//     } catch (err) {
//       setEmail("");
//       setPassword("");
//       alert("Error occured while logging in");
//       console.log(err);
//     }
//   };