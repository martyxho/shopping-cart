function CartContent({ product }) {
  return (
    <div className="cartContent">
      <img src={product.img}/>
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartContent;