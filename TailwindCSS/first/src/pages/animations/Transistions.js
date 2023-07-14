import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Transistions = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Transitions</div>
                • transition(-TYP)
                <br />
                TYP (none, all, colors, opacity, shadow, transform)
                <p className="my-8 border-b-2" >
                    You can choose to have Tailwind transition to create smooth animations between states on different types of properties. You can use transition without any other properties, in which case it will let you transition on all the properties shown here.
                    Or you can use use transition-all, which sets the transition property to all. Similar, but will let you catch any other transitions you're doing manually.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">transition(-TYP)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />
                                none all colors opacity shadow transform
                            </div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/transition-property'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Transition Duration</div>
                • duration(-TYP)
                <br />
                AMT (75, 100, 150, 200, 300, 500, 700, 1000)
                <p className="my-8 border-b-2" >
                    Duration controls how long the transition takes to play.
                    The numbers are in milliseconds so 500 is half a second.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="duration-1000 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">duration(-AMT)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />
                                75 100 150 200 300 500 700 1000
                            </div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/transition-duration'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Delay</div>
                • delay(-TYP)
                <br />
                AMT (75, 100, 150, 200, 300, 500, 700, 1000)
                <p className="my-8 border-b-2" >
                    Similar to the transition duration, the delay lets you control how long to wait before the animation starts playing.
                    The numbers are in milliseconds so 1000 is a full second.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="delay-1000 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">delay(-AMT)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />
                                75 100 150 200 300 500 700 1000
                            </div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/transition-delay'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Transition Timing Function</div>
                • ease(-TYP)
                <br />
                DIR (x, y)
                <br />
                TYP (linear, in, out, in-out)
                <p className="my-8 border-b-2" >
                    Similar to the transition duration, the delay lets you control how long to delay an animation.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="ease-linear duration-500 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ease-linear</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="ease-in duration-500 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ease-in</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="ease-out duration-500 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ease-out</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <img className="ease-in-out duration-500 transition transform hover:scale-125 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ease-in-out</div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/transition-timing-function'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Transistions