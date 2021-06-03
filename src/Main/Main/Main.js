import React from 'react'
import Products from '../../Main/BannerImg/ProductsPage/Products'
import BannerImg from '../../Main/BannerImg/BannerImg'
import Footer from '../Footer/Footer'


const main =(props)=>{
    return (
         <div>
           <BannerImg />
           <Products />
           <Footer/>
         </div>
    )
}

export default main