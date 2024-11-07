"use client"
import React, {useEffect,useState} from 'react';
import GetUserInfo from '@/components/GetUserInfo'; 

const Layout = ({ children }) => {
    
    return (
        <div>
           
            <main>
              {/* <GetUserInfo/> */}
                {children}
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default Layout;