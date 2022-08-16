function CartContent({ product, index, onChange, remove }) {
  const incrementThis = () => {
    onChange(index, product.quantity + 1);
  };

  const decrementThis = () => {
    onChange(index, product.quantity - 1);
  };

  const removeThis = () => {
    remove(index);
  }

  const onChangeThis = (e) => {
    const value = e.target.value;
    onChange(index, value);
  }

  const formatPrice = () => {
    const price = product.price.toFixed(2);
    return `$${price}`;
  }

  return (
    <div className="cartContent">
      <img src={product.img}/>
      <div className="cartDetails">
        <h3>{product.name}</h3>
        <div>
          <button onClick={decrementThis}>-</button>
          <input type='number' value={product.quantity} onChange={onChangeThis} />
          <button onClick={incrementThis}>+</button>
        </div>
      </div>
      <div className="cartPrice">
        {formatPrice()}
        <button onClick={removeThis}>Remove</button>
      </div>
    </div>
  )
}

export default CartContent;