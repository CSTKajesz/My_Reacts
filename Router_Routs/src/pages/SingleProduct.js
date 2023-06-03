import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  const { productId } = useParams();
  //azt a product id-t keressük amelyik megegyezik a useParams id-val
  const product = products.find((product) => product.id === productId)
  // ennek az id-u productnak az image és name levő kulcsok párja
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>Back to products</Link>
    </section>
  );
};

export default SingleProduct;
