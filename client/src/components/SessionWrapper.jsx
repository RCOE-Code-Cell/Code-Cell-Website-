"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

const SessionWrapper=({ children })=> {
  console.log(getSession)
  return (
    <div>
       <Toaster position="right-bottom" reverseOrder={false} />
      <SessionProvider>{ children }</SessionProvider>
    </div>
  )
}

export default SessionWrapper