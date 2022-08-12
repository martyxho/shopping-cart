function Card({ product, addCart }) {
  const handleClick = () => {
    addCart(product);
  }
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;