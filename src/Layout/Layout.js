import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import  './Layout.css'




const layout = (props)=> {
   
  return (
        <div className='Layout'>
           <Toolbar/>
           <SideDrawer />
           <main>
               {props.children}
           </main>
        </div>
    )
}
    
    


export default layout 