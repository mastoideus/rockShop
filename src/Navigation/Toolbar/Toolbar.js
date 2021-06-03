import React, {Component} from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import ToggleSkull from '../ToggleSkull/ToggleSkull'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from '../SideDrawer/SideDrawer'
import guitarIcon from '../../assets/images/guitarIcon.png'


class Toolbar extends Component {
   state= {
       openSideDrawer: false
   }

   sideDrawerHandler= ()=>{
       const currentDrawerState= this.state.openSideDrawer
       this.setState({openSideDrawer: !currentDrawerState})
   }
   
   render (){
     return (
        <div className='Toolbar'>
          <SideDrawer showDrawer={this.state.openSideDrawer}/>
          <ToggleSkull skullClicked={this.sideDrawerHandler} showDrawer={this.state.openSideDrawer}/>
          <Logo />
          <h3 className='Title' >ROKER<img style={{height:'30px'}} src={guitarIcon} alt='t' />METALAC</h3>
          <nav>
              <NavigationItems/>
          </nav>
        </div>
    )
   }
    
}


export default Toolbar