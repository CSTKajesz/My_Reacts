import { Link } from 'react-router-dom'
import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return (
            // <>
            <Link to={`/tours/${tour.id}`}>
              <Tour {...tour} key={tour.id} />
            </Link>
            // </>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
