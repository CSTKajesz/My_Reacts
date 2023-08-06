import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const PlayCDN = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Play CDN</div>

                <p className="my-8 border-b-2" >
                    Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 mr-5 rounded text-white bg-pink-500 rounded-2">1</div>

                        <div className="select-auto text-md">Add the Play CDN script tag to the head of your HTML file, and start using Tailwind’s utility classes to style your content.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Add the Play CDN script to your HTML</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 mr-5 rounded text-white bg-pink-500 rounded-2">2</div>
                        <div className="select-auto text-md">Edit the tailwind.config object to customize your configuration with your own design tokens.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Try customizing your config</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 mr-5 rounded text-white bg-pink-500 rounded-2">3</div>
                        <div className="select-auto text-md">Use type="text/tailwindcss" to add custom CSS that supports all of Tailwind's CSS features.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Try adding some custom CSS</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 mr-5 rounded text-white bg-pink-500 rounded-2">4</div>
                        <div className="select-auto text-md">Enable first-party plugins, like forms and typography, using the plugins query parameter.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Try using a first-party plugin</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/installation/play-cdn'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />

        </>
    )
}

export default PlayCDN