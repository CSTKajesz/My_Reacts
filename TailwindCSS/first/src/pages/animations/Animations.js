import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Animations = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Animate</div>
                • animate(-TYP)
                <br />
                TYP (none, spin, ping, pulse, bounce)
                <p className="my-8 border-b-2" >
                    Tailwind has a few built in animations to help you with common animation needs.
                    None is the reset and the rest are pretty self explanatory. They set up infinite animations with easing functions.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="animate-none h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">animate-none</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="animate-spin h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">animate-spin</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="animate-pulse h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">animate-pulse</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="animate-bounce h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">animate-bounce</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/animation'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Animations