import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineToTop } from 'react-icons/ai';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link to="#" smooth onClick={scrollToTop}>
            <button className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded-full text-white bg-indigo-400 my-3">
                <AiOutlineToTop className='text-4xl font-black' />
            </button>
        </Link>
    );
};

export default ScrollToTopButton;