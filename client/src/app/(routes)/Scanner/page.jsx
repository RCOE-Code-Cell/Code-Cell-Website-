"use client"
import React, { useEffect } from 'react'
import{Html5QrcodeScanner} from 'html5-qrcode';
function page() {
    useEffect(()=>{
        const scanner=new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
        scanner.render(onScanSuccess);
        function onScanSuccess(qrCodeMessage) {
          // handle on success condition with the decoded message
          console.log(qrCodeMessage);
          scanner.clear();}
        
        }
      ,[]);
    
  return (
    <div>
      <div id='reader'></div>
    </div>
  )
}

export default page
