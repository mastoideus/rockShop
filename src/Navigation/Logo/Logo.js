import React from 'react'
import './Logo.css'
import logoImage from '../../assets/images/rock.png'


const Logo = (props) => (
    <div className='Logo' >
    <img  src={logoImage} alt='r'  />
    </div>
)

export default Logo