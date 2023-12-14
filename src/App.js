import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './FirebaseAuthContext/AuthContext';

import Landing from './Landing/Landing/Landing';
import Home from './Blog/Home';
import Community from './Community/Community'
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/Signup';

import Sidebar from './components/Sidebar'
import MainDash from './Main/MainDash';
import UserProfile from './Main/Profile/UserProfile'
import MentalHealth from './Main/MentalHealth/MentalHealth';
import Chatbot from './Main/MentalHealth/Chatbot';
import LiveTherapy from './Main/MentalHealth/LiveTherapy';
import Rewards from './Main/Rewards/Rewards';
import Exercises from './Main/Exercise/Exercises';
import Main from './Main/Exercise/Main'; //exercises
import AIMealPlan from './Main/AIMealPlan';

function App() {

  const [login, setLogin] = useState(false);
  useEffect(()=>{}, [login]) 

  return (
    <div className="h-full w-full">
      <AuthContextProvider>
        {login && <Sidebar setLogin={setLogin} />}
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/Blog' element={<Home/>} />
          <Route path='/Community' element={<Community/>} />
          <Route path='/Login' element={<Login setLogin={setLogin} />} />
          <Route path='/SignUp' element={<Signup setLogin={setLogin} />} />
          <Route path='/Dashboard' element={<MainDash/>} />
          <Route path='/Profile' element={<UserProfile/>} />
          <Route path='/mental-health' element={<MentalHealth/>} />
          <Route path='/mental-health/mh-chatbot' element={<Chatbot/>} />
          <Route path='/mental-health/therapy' element={<LiveTherapy/>} />
          <Route path='/rewards' element={<Rewards/>} />
          <Route path='/exercise' element={<Exercises />} />
          <Route path='/exercise/bicep-curls' element={<Main />} />
          <Route path='/meal-plan' element={<AIMealPlan />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
