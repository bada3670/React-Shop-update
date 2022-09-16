import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <>
      <Carousel />
      <ProductList page="home" category="fashion" />
      <ProductList page="home" category="accessory" />
      <ProductList page="home" category="digital" />
    </>
  );
}