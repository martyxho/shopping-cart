function Card({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default Card;