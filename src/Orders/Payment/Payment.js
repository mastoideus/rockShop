import React, {useState} from 'react'
import classes from './Payment.module.css'
import ways from './paymentData'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Payment = ()=>{
    const [index, setIndex] = useState(0)
    const {title, info} = ways[index]

  const checkNumber= (number) =>{
    if (number > ways.length -1 ) {
      return 0
    }
    if (number <0 ){
      return ways.length -1 
    }
    return number
  }
  
  const prevWay= ()=>{
     setIndex((index)=>{
       let newIndex= index-1
      return checkNumber(newIndex)
     })
  }
  const nextWay= ()=>{
    setIndex((index)=>{
      let newIndex= index+1
      return checkNumber(newIndex)
    })
  }
  
  
  return (
        <div className={classes.Payment}>
           <div className={classes.PaymentCard}>
             <h3 className={classes.MainTitle}>Način plaćanja</h3>
             <div  className={classes.Pay} >
               <h4 className={classes.Title}>{title}</h4>
               <h5>{info}</h5>
             </div>
              
              <button onClick={prevWay} style={{marginRight:'5px'}}>
                <FaChevronLeft/>
              </button>
              <button onClick={nextWay}>
                 <FaChevronRight/>
              </button>
              
              
          </div>
        </div>

    )
}

export default Payment