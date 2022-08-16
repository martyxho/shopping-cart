import citrusBg from '../assets/citrushero.webp';

function Home() {
  return (
    <div id="home">
      <img src={citrusBg} className='bg' alt='citrus background' />
      <div>Citrus Shop</div>
      <div>Quality Citrus since 2001</div>
      <div>Shipping Worldwide</div>
    </div>
  )
}

export default Home;