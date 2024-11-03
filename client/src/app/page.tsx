"use client";

import { useEffect } from 'react';
import Herotext from '@/components/Herotext';
import HomeEventCard from '@/components/HomeEventCard';
import Footer from '@/components/Footer';
import { useUserContext } from '@/app/context/Userinfo';
import { useToast } from "@/hooks/use-toast"


export default function Home() {
  
  const {contextsetIsLoggedIn,contextsetEmail,contextsetName,contextisLoggedIn}= useUserContext();

  const { toast } = useToast();

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

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      const result = await response.json();
      contextsetIsLoggedIn(true);
      contextsetEmail(result.email);
      contextsetName(result.name);
      toast({
        title: "Successfully logged in",
        description: `Welcome back, ${result.name}!`,
      });

    } catch (error) {
      console.error("Error fetching user info:", error);
      toast({
        title: "Error",
        description: "Failed to fetch user information",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if(contextisLoggedIn==false){
        getUserInfo()
    }
    
  },[contextisLoggedIn])
  return (
    <div className="min-h-screen">
      <Herotext />
      <HomeEventCard />
      <Footer />
    </div>
  );
}