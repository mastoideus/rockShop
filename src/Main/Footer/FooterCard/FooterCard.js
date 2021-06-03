import React from 'react'
import classes from './FooterCard.module.css'
import {NavLink} from 'react-router-dom'
import BendSlider from './BendSlider/BendSlider'


const footerCard= (props)=>{
    return (
        <div className={classes.Card}>
           <h5>Roker Metalac official page</h5>
           <h6 style={{color:'grey'}}>Online rock-metal shop</h6>
           <p style={{fontWeight:'bold', color:'red', cursor:'pointer',underline:'none'}}><NavLink to='/contact-us'>Kontaktirajte nas</NavLink></p>
           <hr style={{marginTop:'10px', marginBottom:'10px'}}></hr>
           <h3 style={{color:'darkred', marginBottom:'10px'}}>Dostupni bendovi</h3>
           <BendSlider/>
        </div>

    )
}

export default footerCard