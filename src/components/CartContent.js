function CartContent({ product, index, increment, decrement }) {
  const incrementThis = () => {
    increment(index);
  };

  const decrementThis = () => {
    decrement(index);
  };

  return (
    <div className="cartContent">
      <img src={product.img}/>
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div>
          <button onClick={decrementThis}>-</button>
          <span>{product.quantity}</span>
          <button onClick={incrementThis}>+</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartContent;