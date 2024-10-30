"use client"
import React from 'react'

function Map() {
   

    return (
        <div className='overflow-auto relative w-full h-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.930927793693!2d72.82354437515913!3d19.066774282135817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90ee61a46d9%3A0x632e25778a624051!2sRizvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1730309727622!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map
