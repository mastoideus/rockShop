import React from 'react'
import classes from './OrdersCockpit.module.css'

import rockHand from '../../assets/images/rockhand.png'
import cockImg from '../../assets/images/bannerorders.jpeg'


const ordersCockpit= (props)=>{
    
    const sum = props.orders.map(order=>{
        return order.price
    }).reduce((res,el)=>{
        return res + el
    },0)
    
    return (
        <div className={classes.Cockpit}>
           <img className={classes.Img} src={cockImg} alt='b'/>
           <div className={classes.Line}></div>
           <div className={classes.CockCont}>
               <h3>Trenutne narudžbe:</h3>
               <h5>Broj artikala: {props.orders.length}</h5>
               <h5>Ukupna cijena: {sum}KM</h5>
               <div className={classes.Arrow}>
                <p style={{color:'darkred', fontWeight:'bold'}} >Kliknite za potvrdu kupovine</p>   
               <img style={{width:'50px', margin:'auto', cursor:'pointer'}} src={rockHand} alt='ttt' onClick={props.clicked} />
               </div>    
              
           </div>
        </div>
    )
}


export default ordersCockpit