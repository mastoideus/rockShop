import React, {useState} from 'react'
import classes from './Products.module.css'
import Product from '../ProductsPage/Product/Product'
import {connect} from 'react-redux'
import Izbornik from './Izbornik/Izbornik'


const Products = (props)=> {
    const [newProducts, setNewProducts]= useState(props.prods)
  
     
    
    const filterProducts= (category)=>{
      if (category ==='all'){
        setNewProducts(props.prods)
        return 
      }


      const newProd= props.prods.filter((prod)=>{
        return prod.category===category
      })
      setNewProducts(newProd)
      console.log('hello')
    }
    
  
   
    const productsList= newProducts.map((product,index)=>{
      return <Product 
        key={product.name}
        name={product.name}
        descr={product.descr}
        img={product.img}
        stars={product.stars}
        price={product.price}
        clicked={()=>props.onAddOrder(index)}
      />
    })

    

    return (
          <div>
            <Izbornik filterProducts={filterProducts} />
            <div className={classes.Linija}></div>
            <div className={classes.Products}>
              {productsList}
            </div>
          </div>
        )
}



const mapStateToProps = state =>{
  return {
    ords: state.orders,
    prods: state.products
  }
}
const mapDispatchToProps= dispatch=>{
  return {
    onAddOrder: (index)=>dispatch({type:'ADD_ORDER', orderInd:index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
