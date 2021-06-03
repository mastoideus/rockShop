import React,{Component} from 'react'
import classes from './Orders.module.css'
import Order from './Order/Order'
import {connect} from 'react-redux'
import OrdersCockpit from './OrdersCockpit/OrdersCockpit'
import Payment from './Payment/Payment'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../UI/Modal/Backdrop/Backdrop'
import InputForm from '../InputForm/InputForm'



class Orders extends Component {
     state= {
         showModal:false
     }


     openModalHandler= ()=>{
         
         this.setState({showModal: true})
     }
     closeModalHandler=()=>{
         this.setState({showModal:false})
     }
    
   
    render () {
         
     const ordersList= this.props.ords.map((order,index)=>{
        return <Order
           name={order.name}
           descr={order.descr}
           price={order.price}
           img={order.img}
           key={order.name}
           stars={order.stars}
           deleted={()=>this.props.onDeleteItem(index)}
         />
    })
       
        return (
          
        <div className={classes.Orders}>
           <Modal show={this.state.showModal}><InputForm/></Modal>
           <Backdrop show={this.state.showModal} clicked={this.closeModalHandler}/>
           <OrdersCockpit orders={this.props.ords} clicked={this.openModalHandler} />
           <h1 className={classes.Title}>Vaše narudžbe</h1>
           
           <div className={classes.Divide}>
               <div>
                   {ordersList}
               </div>
               <Payment/>
           </div>
              
           
           
        </div>
        )
    }

   
}

const mapStateToProps= state =>{
    return {
        ords: state.orders
    }
}
const mapDispatchToProps= dispatch=>{
    return {
        onDeleteItem: (index)=>dispatch({type:'DELETE_ITEM', ind:index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)