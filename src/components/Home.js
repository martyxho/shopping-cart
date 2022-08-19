import citrusBg from '../assets/citrushero.webp';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const home = document.getElementById('home');
    setTimeout(() => home.classList.add('show'));
  }, []);

  return (
    <div id="home">
      <img src={citrusBg} className='bg' alt='citrus background' />
      <Link to="/shop" id='home-content' >
        <div>Fresh Citrus sourced from local farms</div>
        <div>Shipping Worldwide</div>
      </Link>
    </div>
  )
}

export default Home;