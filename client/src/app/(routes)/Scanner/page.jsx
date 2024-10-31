"use client"
import React, { use, useEffect } from 'react'
import{Html5QrcodeScanner} from 'html5-qrcode';
import {useRouter} from 'next/navigation';
function page() {
  const router =useRouter();
    useEffect(()=>{
        const scanner=new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
        scanner.render(onScanSuccess);
        function onScanSuccess(qrCodeMessage) {
          // handle on success condition with the decoded message
          console.log(qrCodeMessage);
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
