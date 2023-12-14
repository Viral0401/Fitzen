import React,{useState}  from "react";
import {Link, useNavigate} from 'react-router-dom'
// import axios from "axios";
import { UserAuth } from '../FirebaseAuthContext/AuthContext';

import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from '../Logos/fitzen-logo.jpg'
import hero from './fitness-hero2.png'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Signup = ({setLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {createUser} = UserAuth();


      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // handleTextRecognition();
        try {
          await createUser(email, password);
            setLogin(true)
            navigate('/Profile')
        } 
        catch (e) {
          setError(e.message);
          console.log(error);
        }
    }

    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  return (
    <div style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}} className="h-screen w-screen overflow-y-hidden flex items-center justify-between px-10" >

        <Fade right>    
        <div className="h-[90%] w-[40%] rounded-3xl bg-white flex flex-col item-center justify-center shadow-2xl">

            <div className=" w-full pt-4">
                <a href="/" className="flex justify-center"><img src={logo} style={{height:"auto", width:"40%"}} alt="straddle logo"/></a>
            </div>
      
            <div className="flex flex-col item-center justify-center w-full px-8 pb-5 pt-2" >

                <div>

                    <h1 className="text-3xl mt-3 mb-3 font-semibold tracking-widest ">Sign Up</h1>

                    <h4 className="font-semibold text-[#c0c0c0] cursor-pointer">Already Signed Up? <span className="text-[#8D2FFF]"><Link to="/Login">Login</Link></span></h4>

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
                        <Link to="/Profile">
                            <Button onClick={handleSubmit} variant="contained" 
                            className="w-full rounded-full" style={{padding:"10px"}}>
                                Sign Up
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



        
        <div className="w-[60%] flex flex-col items-center justify-center h-full">
            
            <Flip left><img src={hero} alt="hero" className=" w-[550px]"/></Flip>
        
        </div>
        
    </div>

  );
};

export default Signup;


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const {role, setRole} = useRoleContext();
//   const [error, setError] = useState('')
//   const [image, setImage] = useState(null);

//   const navigate = useNavigate()

//   const handleFileUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     setImage(selectedFile);
//   };

//   const handleTextRecognition = async () => {
//         if (!image) {
//         setError('Please select an image to recognize text from.');
//         return;
//         }

//         setError('');

//         try {
//         const { data } = await Tesseract.recognize(image, 'eng');
//         setRecognizedText(data.text);
//         console.log(data.text)
//         } catch (err) {
//         console.error('Error recognizing text:', err);
//         setError('Error recognizing text. Please try again.');
//         }
//     };
//     console.log(recognizedText)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     handleTextRecognition();
//     try {
//       await createUser(email, password);
//       setPatient(true)
//       navigate('/community')
//     } 
//     catch (e) {
//       setError(e.message);
//       console.log(error);
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
