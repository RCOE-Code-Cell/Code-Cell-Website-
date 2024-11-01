"use client"
import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context value
const UserContext = createContext({
  contextemail: '',
  contextname: '',
  contextpassword: '',
  contextisLoggedIn: false,
  contextQRInfo:'',
  contextimg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',

  

  contextsetEmail: () => {},
  contextsetName: () => {},
  contextsetPassword: () => {},
  contextsetIsLoggedIn: () => {},
  contextsetQRInfo: () => {},
  contextsetimg: () => {},
});

export const UserProvider = ({ children }) => {
  const [contextemail, contextsetEmail] = useState('');
  const [contextname, contextsetName] = useState('');
  const [contextpassword, contextsetPassword] = useState('');
  const [contextQRInfo, contextsetQRInfo] = useState('');
  const [contextisLoggedIn, contextsetIsLoggedIn] = useState(false);
  const [contextimg, contextsetimg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');


  const value = {
    contextemail,
    contextname,
    contextpassword,
    contextisLoggedIn,
    contextimg,
    contextsetEmail,
    contextsetName,
    contextsetPassword,
    contextsetIsLoggedIn,
    contextsetimg,
    contextQRInfo,
    contextsetQRInfo
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
