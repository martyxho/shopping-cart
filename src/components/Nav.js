import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';

function Nav({ toggleCart, content }) {
  const calcCount = () => {
    const q = content.map(e => e.quantity);
    return q.reduce((a, b) => a + b, 0);
  }
  return (
    <nav>
      <Link to="/" id='store-name'>Citrus</Link>
      <div id='nav-right'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div id='cart-div' onClick={toggleCart}>
          {content.length > 0 &&
            <div>{calcCount()}</div>
          }
          <img src={cart} id='cart-pic'/>
        </div>
      </div>
    </nav>
  )
}

export default Nav;