import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='home-banner'>
                <h1>travels project</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    explicabo debitis est autem dicta.
                </p>
                <Link to="/tours" className='btn home-btn'>
                    explore tours
                </Link>
            </div>
        </section>
    );
};
export default Home;
