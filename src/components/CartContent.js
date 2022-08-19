import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

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
      <div className='cart-img'>
        <img src={product.img}/>
      </div>
      <div className="cartDetails">
        <h3>{product.name}</h3>
        <div className="cart-input">
            <img src={minus} onClick={decrementThis} />
          <input type='number' value={product.quantity} onChange={onChangeThis} />
          <img src={plus} onClick={incrementThis} />
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