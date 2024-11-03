"use client"
import React, { useEffect } from 'react'
import{Html5QrcodeScanner} from 'html5-qrcode';
import { useUserContext } from '@/app/context/Userinfo';
import {useRouter} from 'next/navigation';
function page() {
  const {contextsetQRInfo} = useUserContext(); // Updated hook

  const router =useRouter();
    useEffect(()=>{
      
        const scanner=new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
        scanner.render(onScanSuccess);
        function onScanSuccess(qrCodeMessage) {
          // handle on success condition with the decoded message
          contextsetQRInfo(qrCodeMessage);
          scanner.clear();
        router.push('/QR-Info');
        }
        
        }
      ,[]);
    
  return (
    <div className='mt-[20vh]'>
      <div id='reader'></div>
    </div>
  )
}

export default page
