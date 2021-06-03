import React from 'react'
import classes from './Product.module.css'


const product = (props)=>{
    return (
        
        <div className={classes.Product}>
          <div className={classes.Content}>
              <div className={classes.ContentLeft}>
                 <img src={props.img} alt='ret' />
              </div>
              <div className={classes.ContentRight}>
                 <h3>{props.name}</h3>
                 <h6>{props.descr}</h6>
                 <p><strong>Cijena: {props.price}KM</strong></p>
                 <p>{props.stars}</p>
                 <button onClick={props.clicked} className={classes.Btn}>Dodaj u korpu</button>
              </div>
          </div>
        </div>
        
    )
}

export default product