import React from 'react'
import './ToggleSkull.css'
import skullIcon from '../../assets/images/skullIcon.png'

const toggleSkull = (props)=> (
    <img className='ToggleSkull' src={skullIcon} alt='skullImage' onClick={props.skullClicked} style={{transform: props.showDrawer ? 'translateX(280px)': null}} />
)


export default toggleSkull

