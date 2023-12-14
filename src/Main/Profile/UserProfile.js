import React, { useState } from 'react';
// Import all tab components
import Overview from './Overview'; 
import Personal from './Personal';
import { UserAuth } from '../../FirebaseAuthContext/AuthContext';


const UserProfile = () => {

  const [activeTab, setActiveTab] = useState('Overview');
  
  const { user } = UserAuth();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabContents = {
    Overview: <Overview />,
    Personal: <Personal />,
  };

  return (
    <div>
      <div className='text-2xl px-10 pt-5 flex items-center justify-between'>
        <p className='font-semibold tracking-widest text-3xl'>Profile Page</p>
        <p>{user && user.email}</p>  
      </div>

      {/* Tabs for displaying user information */}
      <div className='mb-10 mt-5 px-10'>
        <ul className='flex items-center justify-around text-lg border-b'>
          {Object.keys(tabContents).map((tabName) => (
            <li
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              className={`py-2 cursor-pointer ${
                activeTab === tabName ? 'border-b border-black' : 'border-black hover:border-b'
              }`}
            >
              {tabName}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the selected tab content */}
      {tabContents[activeTab]}
    </div>
  );
}

export default UserProfile;