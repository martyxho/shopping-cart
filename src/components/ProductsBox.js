import Card from "./Card";
import uniqid from "uniqid";

function ProductsBox({ products }) {

  const createCards = () => {
    const cards = [];
    products.forEach(e => {
      const card = <Card key={uniqid()} product={e} />
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