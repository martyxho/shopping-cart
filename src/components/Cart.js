function Cart({toggleCart}) {
  return (
    <div id="cart" className="hide">
      Cart
      <button onClick={toggleCart}>Close</button>
    </div>
  )
}

export default Cart;