import CartContent from "./CartContent";

function Cart({toggleCart, content, increment, decrement, onChange, remove}) {

  const calcTotal = () => {
    const prices = content.map(e => e.quantity * e.price);
    const total = prices.reduce((a, b) => a + b, 0);
    return total;
  }

  const total = () => {
    const num = calcTotal();
    const fNum = num.toFixed(2);
    return `$${fNum}`;
  }

  return (
    <div id='cart-hide' className="hide">
      <div id="cart">
        <button onClick={toggleCart}>Close</button>
        <div id="cart-wrapper">
          <div id="head">Your<br/>shopping<br/>bag</div>
          <div id="cart-contents">
            {content &&
              content.length > 0 &&
              content.map((product, index) => (
                <CartContent 
                  key={product.id}
                  product={product} 
                  index={index} 
                  onChange={onChange}
                  remove={remove}
                />
              ))}
          </div>
          <div id="cart-bottom">
            <div id="total">Total: {total()}</div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;