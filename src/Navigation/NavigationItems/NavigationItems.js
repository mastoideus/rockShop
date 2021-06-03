import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import basketIcon from '../../assets/images/basket.jpeg'
import {connect} from 'react-redux'


const navigationItems= (props)=> {
    return (
        <ul className={classes.NavigationItems} style={{display:props.display}}>
           <NavigationItem link='/'>Home</NavigationItem>
           <NavigationItem link='/orders'>Orders</NavigationItem>
           <NavigationItem link='/contact-us'>Contact us</NavigationItem>
           <a href='/orders'><img className={classes.Basket} src={basketIcon} alt='basket'/></a>
           <p>{props.ords.length}</p>
        </ul>
    )
}

const mapStateToProps= state=>{
    return {
      ords: state.orders
    }
    
}

export default connect(mapStateToProps)(navigationItems)