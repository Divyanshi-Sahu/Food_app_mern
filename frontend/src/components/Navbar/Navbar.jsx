import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");

    const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }

    return (
      <>
            <div className='navbar'>
                
                {/* <img src={assets.logo} alt="logoimg" className='logo' /> */}
                <Link to='/'>
                    <h2 className="logo" style={{ color: "red" }}>Veg-Mania</h2>
                </Link>
          <ul className="navbar-menu">
              <Link to='/' onClick={() => setMenu("home")} className={menu==="home" ? "active":""}>Home</Link>
              <a href="#explore-menu" onClick={() => setMenu("menu")}className={menu==="menu"? "active":""}>Menu</a>
              <a href="#app-download" onClick={() => setMenu("app")}className={menu==="app"? "active":""}>App</a>
              <a href="#footer" onClick={() => setMenu("contact")}className={menu==="contact"? "active":""}>Contact us</a>
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="search"  />
              <div className="navbar-search-icon">
                 <Link to ="/cart"> <img src={assets.basket_icon} alt="cart" /></Link>
                        <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
                    </div>
                    {
                        !token ?
                        <button onClick={() => setShowLogin(true)}>Sign-in</button>
                            :
                            <div className='navbar-profile'>
                                <img src={assets.profile_icon} alt="" />
                                <ul className='nav-profile-dropdown'>
                                    <li onClick={() => navigate('/myOrders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                   <hr/>
                                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                                </ul>
                            </div>
                    }
          </div>
            </div>
            </>
  )
}

export default Navbar