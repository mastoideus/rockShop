import React, {useState} from 'react'
import classes from './BendSlider.module.css'
import bends from './BendData/bendData'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const BendSlider= (props)=>{
    const [index, setIndex] =useState(0)
    const {img, name}= bends[index]
    
    const checkNumber= (number)=>{
        if (number<0){
            return bends.length-1
        }
        if (number>bends.length-1 ){
            return 0
        }

        return number
    }
    
    const prevBand= ()=>{
        setIndex((index)=>{
           const newIndex= index-1
           return checkNumber(newIndex)
        })
    }
    const nextBand=()=>{
        setIndex((index)=>{
            const newIndex=index+1
            return checkNumber(newIndex)
        })
    }

    return (
          <div className={classes.BendSlider}>
              <FaChevronLeft  className={classes.FaIcon} onClick={prevBand} />
              <div className={classes.BandCont}>
                  <img src={img} alt='eee' style={{width:'120px', borderRadius:'50%', height:'120px', margin:'0px 10px', border:'2px solid red',padding:'2px'}}/>
                  <p style={{color:'darkred', fontWeight:'bold'}}>{name}</p>
              </div>
              <FaChevronRight className={classes.FaIcon} onClick={nextBand}/>
          </div>
    )
}


export default BendSlider