function Card({ product, addCart }) {
  const handleClick = () => {
    addCart(product);
  }

  const price = () => {
    const num = product.price.toFixed(2);
    return `$${num}`;
  }

  return (
    <div className="card">
      <div className="img">
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <div className="info">
          <h3>{product.name}</h3>
          <p>{price()}</p>
        </div>
        <div>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;