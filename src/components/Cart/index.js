import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
  
    <div className="cart_all_wrap">
    <h2>SHOPPING CART</h2>
    <div className="cart_item_wrap">
      {line_items}
      </div>
      <div className="cart_total">
      <h2>Subtotal</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      Or 3 interest-free payment of $37 with <div className="__affirm-logo __affirm-logo-blue __ligature__affirm_full_logo__ __processed"><span>affirm</span><span className="bullet"></span></div>
      <a href="#">Learn more</a>
      <span>Order will be processed in USD</span>
      <div className="agree_wraper"><input type="Checkbox" name="agree" id="agree" /> <label for="agree">I Agree with the Terms & Conditions</label> </div>
      <div className="checkout_button">
      <div className="cover_button" name="cover_button"></div>
      <button onClick={handleCheckout} className="minicheck">Check out</button>
      </div>
      </div>
    </div>
  )
}

export default Cart
