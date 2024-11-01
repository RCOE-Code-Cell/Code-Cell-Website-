"use client"
import React from 'react'
import { useUserContext } from '@/app/context/Userinfo';
function page() {
  const {contextQRInfo} = useUserContext(); // Updated hook
  return (
    <div>
      {contextQRInfo}
    </div>
  )
}

export default page
