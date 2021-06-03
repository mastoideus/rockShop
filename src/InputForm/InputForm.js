import React, {Component} from 'react'
import classes from './InputForm.module.css'
import Input from './Input/Input'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class InputForm extends Component {
    state ={
        orderForm : {
            name: {
                type:'text',
                placeholder:'Your name',
                value:''
            },
            email: {
                type:'email',
                placeholder:'Your mail',
                value:''
            },
            password: {
                type:'password',
                placeholder:'Your password',
                value:''
            },
            country: {
                type:'text',
                placeholder:'Your Country',
                value:''
            }
        }
    }
    
    
    orderHandler=(event)=>{
        event.preventDefault()

        const orderData= {
            name: this.state.orderForm.name.value,
            email: this.state.orderForm.email.value,
            password: this.state.orderForm.password.value
        }

         axios.post('https://metalshop-36999-default-rtdb.firebaseio.com/orders.json', orderData)
         .then(response=>{
             console.log(response)
              this.props.history.push('/')

         }).catch(error=>{
             console.log(error)
         })
       

    }

    onChangeHandler= (event,elementIdent)=>{
         const copyOrderForm= {...this.state.orderForm}
         const copyFormElement= {...copyOrderForm[elementIdent]}
         copyFormElement.value= event.target.value
         copyOrderForm[elementIdent]= copyFormElement
         this.setState({orderForm: copyOrderForm})
    }
    
    
    
    render (){


        let formElementArray= []
        for(let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        
        const inputList= formElementArray.map(formElement=>{
            return <Input
              key={formElement.id}
              name={formElement.id}
              type={formElement.config.type}
              placeholder={formElement.config.placeholder}
              value={formElement.config.value}
              changed={(event)=>this.onChangeHandler(event, formElement.id)}
             />
        })

        return (
            <div className={classes.InputForm}>
               <h3 className={classes.Title}>Insert your Contact-Data</h3>
               <form onSubmit={this.orderHandler} style={{display:'flex', flexDirection:'column'}}>
                   {inputList}
                   <button type='submit' className={classes.Btn}>Potvrdi kupovinu</button>
               </form>
            </div>
        )
    }
}

export default withRouter(InputForm)