import { Link, useParams } from 'react-router-dom'
import { tours } from '../data'

const SingleTour = () => {
    const { tourId } = useParams();
    //azt a product id-t keressük amelyik megegyezik a useParams id-val
    const tour = tours.find((tour) => tour.id === tourId)
    // ennek az id-u productnak az image és name levő kulcsok párja
    const { image, title } = tours;
    return (
        // <section className='section-tour'>
        //     <img src={image} alt={title} />
        //     <h5>{title}</h5>
        <Link to='/tours' className='btn-bck'>
            Back to tours
        </Link>
        // </section>
    );
};

export default SingleTour;