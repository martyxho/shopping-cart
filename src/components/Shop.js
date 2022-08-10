import ProductsBox from "./ProductsBox"
import products from "../Data/products";

function Shop() {

  return(
    <div id="shop">
      <ProductsBox products={products}/>
    </div>
  )
}

export default Shop;