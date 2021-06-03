import React from 'react'
import classes from './SideDrawer.module.css'
import SideDrawerIcon from './SideDrawerIcons/SideDrawerIcon'
import mailSkull from '../../assets/images/mailskull.jpg'
import bigskull from '../../assets/images/bigskull.jpeg'
import ordersSkull from '../../assets/images/ordersSkull.jpeg'
import {NavLink} from 'react-router-dom'




const sideDrawer = (props)=>{
  

    return (
        <div className={classes.SideDrawer} style={{transform: props.showDrawer ? 'translateX(0)': 'translateX(-500px)'}}>
          <h3 style={{color:'rgb(143, 58, 58)'}}>Menu</h3>
          <ul className={classes.ItemsList}>
             <div className={classes.Items}>
                 <SideDrawerIcon img={bigskull} height='40px'  />
                 <li style={{marginLeft:'14px'}}><NavLink exact to='/'>Home</NavLink></li>
             </div>
             <div className={classes.Items}>
                  <SideDrawerIcon img={ordersSkull} height='40px' />
                 <li><NavLink to='/orders'>Orders</NavLink></li>
             </div>
             <div className={classes.Items}>
                 <SideDrawerIcon  img={mailSkull} height='40px' />
                 <li><NavLink  to='/contact-us'>Contact us</NavLink></li>
             </div>
          </ul>
         
        </div>
    )
}

export default sideDrawer