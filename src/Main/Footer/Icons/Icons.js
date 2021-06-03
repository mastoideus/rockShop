import React from 'react'
import  './Icons.css'
import {FaFacebook,FaTwitterSquare, FaInstagramSquare,FaWhatsappSquare } from 'react-icons/fa'



const icons = (props)=>{
    return (
        <div className='Icons'>
          <FaFacebook  className='IconsIcons' />
          <FaTwitterSquare className='IconsIcons'/>
          <FaInstagramSquare className='IconsIcons'/>
          <FaWhatsappSquare className='IconsIcons'/>
        </div>
    )
}


export default icons

