import Card from "./Card";
import uniqid from "uniqid";

function ProductsBox({ products, addCart }) {
  const createCards = () => {
    const cards = [];
    products.forEach(e => {
      const card = <Card key={uniqid()} product={e} addCart={addCart}/>
      cards.push(card);
    });
    return cards;
  }
  return (
    <div id="content">
      { createCards() }
    </div>
  )
}

export default ProductsBox;