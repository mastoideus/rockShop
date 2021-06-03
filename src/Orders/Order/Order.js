import React from 'react'
import classes from './Order.module.css'


const order=(props)=>{
    return (
       <div className={classes.Order}>
          
             <img className={classes.Img} src={props.img} alt='b' />
          
          <div className={classes.Content}>
            <h3 style={{color:'darkred'}}>{props.name}</h3>
            <p>{props.descr}</p>
            <p>{props.stars}</p>
            <p><strong>Cijena:{props.price}KM</strong></p>
            <button onClick={props.deleted} className={classes.Btn}>Ukloni artikal</button>
          </div>
        </div>
    )
}

export default order