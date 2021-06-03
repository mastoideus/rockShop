import React from 'react'
import classes from './Izbornik.module.css'

const Izbornik= (props)=>{
    
   
    return (
         <div className={classes.Izbornik}>
               <p className={classes.Title}>Izbornik</p>
               <div>
               <button className={classes.Butt} onClick={()=>props.filterProducts('all')}>Svi Artikli</button>
               <button className={classes.Butt} onClick={()=>props.filterProducts('men')}>Muški</button>
               <button className={classes.Butt} onClick={()=>props.filterProducts('woman')}>Ženski</button>
               </div>
         </div>
    )
}

export default Izbornik 