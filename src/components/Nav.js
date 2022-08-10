import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <img src={cart} id='cart' />
    </nav>
  )
}

export default Nav;