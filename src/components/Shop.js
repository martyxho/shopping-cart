import ProductsBox from "./ProductsBox"
import products from "../Data/products";

function Shop({ addCart }) {
  return(
    <div id="shop">
      <ProductsBox products={products} addCart={addCart}/>
    </div>
  )
}

export default Shop;