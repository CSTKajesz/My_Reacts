import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineToTop } from 'react-icons/ai';

const ScrollToTopButton = () => {


    return (
        <Link to="#" >
            <button className="fixed right-6 bottom-6 text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded-full text-white bg-indigo-400 my-3">
                <AiOutlineToTop className='text-4xl font-black' />
            </button>
        </Link>
    );
};

export default ScrollToTopButton;