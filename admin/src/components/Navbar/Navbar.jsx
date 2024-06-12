import React from 'react'
import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { assets } from '../../assets/admin_assets/assets'

const Navbar = () => {
  return (
      <div className='navbar'>
        <h1 className="logo" style={{ color: "red" }}>Veg-Mania</h1>
        <h3>Admin Panel</h3>
          {/* <img className='logo' src={assets.logo} alt="" /> */}
          <img className='profile' src={assets.profile_image} alt="" />
          
          
    </div>
  )
}

export default Navbar