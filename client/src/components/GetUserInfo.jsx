"use client"
import React from 'react'
import { useEffect } from 'react';
import { useUserContext } from '@/app/context/Userinfo';
import { useToast } from "@/hooks/use-toast"
function GetUserInfo() {
    const { toast } = useToast();

    const {contextsetIsLoggedIn,contextsetEmail,contextsetName,contextisLoggedIn}= useUserContext();

    const getUserInfo = async () => {
       
           
              const token = localStorage.getItem('authToken');
              
           
          
        if (!token) return; // Early return if no token exists
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            method: 'GET',
            headers: {
              "Authorization": token,
              'Content-Type': "application/json",
            },
            credentials: 'include',
          });
    
         
    if(response.ok){
        const result = await response.json();
          contextsetIsLoggedIn(true);
          contextsetEmail(result.email);
          contextsetName(result.name);
          toast({
            title: "Successfully logged in",
            description: `Welcome back, ${result.name}!`,
          });
    }
          
    
        } catch (error) {
          console.error("Error fetching user info:", error);
          
        }
       
      };
      useEffect(() => {

            getUserInfo()
        
        
      },[contextisLoggedIn])
  return (
    <div>
      
    </div>
  )
}

export default GetUserInfo
