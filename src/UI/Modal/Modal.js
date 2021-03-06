import React from 'react'
import classes from './Modal.module.css'


const modal= (props)=>{
   return (
   <div className={classes.Modal} style={{transform: props.show? 'translateY(0)': 'translateY(-150vh)'}}>
       {props.children}
    </div>
    )
}


export default modal 