import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const ScreenReaders = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Screen Readers
                </div>
                • sr-only, not-sr-only
                <p className="my-8 border-b-2" >
                    The sr-only className means that an item will only show up on screen readers and not in the browser. This may be good for textual content that is more suitable for things that are too visual.
                    The opposite of it is not-sr-only, which overrides sr-only. It's tough to visualize that one, so let's take a look at an example.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-1/2">
                                <img className="w-24" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                                <p className="sr-only lg:not-sr-only text-2xl text-blue-300 leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit impedit officia fugiat mollitia alias ex quas modi.</p>
                                <p>Voluptatibus ad distinctio, modi sed praesentium nobis quas non aperiam, recusandae illum, animi sit labore cumque in obcaecati cum laboriosam voluptas consectetur. Voluptate voluptates porro aliquid ut maiores, quidem rem!</p>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">sr-only</div>
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">not-sr-only</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/screen-readerse'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default ScreenReaders