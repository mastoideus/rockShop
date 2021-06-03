import React from 'react'
import classes from './Footer.module.css'
import FooterCard from './FooterCard/FooterCard'
import Icons from './Icons/Icons'



const footer=(props)=>{
    return (
        <div className={classes.Footer}>
           <FooterCard />
           
            
           <Icons/>
           
        </div>
    )
}

export default footer