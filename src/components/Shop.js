import ProductsBox from "./ProductsBox"
import products from "../Data/products";
import { useEffect } from "react";

function Shop({ addCart }) {

  useEffect(() => {
    const shop = document.getElementById('shop');
    setTimeout(() => shop.classList.add('show'));
  }, []);

  return(
    <div id="shop">
      <ProductsBox products={products} addCart={addCart}/>
    </div>
  )
}

export default Shop;