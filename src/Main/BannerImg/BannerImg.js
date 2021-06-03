import React from 'react'
import bannerImg from '../../assets/images/rockhand.png'
import './BannerImg.css'


const banner =(props)=>(
   <div className='Background'>
       
      <h1 className='Title1'>Roker Metalac</h1>
      <h3 style={{color:'green'}}>Online Shop</h3>
      <img className='BannerImg' src={bannerImg} alt='ee'/>
     
   </div>
    
)


export default banner