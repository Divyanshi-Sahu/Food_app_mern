import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      {getTotalCartAmount() === 0 ?
        <div className='empty-cart'> 
          <h1 className='empty-cart-h1'>
            Nothing to show
          </h1>
          <h4 className='empty-cart-h4'> To add your favourite items now...
              Go to home page
          </h4>
        </div>
        :
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br /><hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
                <hr />
               </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div> <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{10}</p>
            </div> <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+10}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
    
            <div className="cart-promocode">
              <div>
              <p>Enter your promo code</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
              </div>
              </div>
            </div>
      </div>
    </div >
         }
      </>
  )
}

export default Cart