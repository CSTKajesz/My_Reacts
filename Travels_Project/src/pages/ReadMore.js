import Title from './Title';
import { Link } from 'react-router-dom';

const ReadMore = () => {
  return (
    <section className='section' id='read'>
      <Title title='read' subTitle='more' />
      <article className='read-info'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <Link to="/about" className='btn'>
          back
        </Link>

      </article>
    </section >
  );
};
export default ReadMore;
