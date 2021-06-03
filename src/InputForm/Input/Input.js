import React from 'react'
import classes from './Input.module.css'


const input= (props)=>{
    return (
        <div className={classes.Input}>
           <label className={classes.Label}>{props.name}</label>
           <input className={classes.Inp} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.changed} />
        </div>
    )
}

export default input