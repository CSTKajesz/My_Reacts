import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const MixingUtilities = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Backdrop Filter
                </div>
                • backdrop-filter
                • backdrop-filter-none

                • backdrop(-TYP)
                <br />
                AMT (blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, sepia)
                <br />
                • backdrop-opacity(-AMT)
                AMT (0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <p className="my-8 border-b-2" >
                    Backdrop filter helps you control how an element filters what's behind it. Most of the filter options are available here, but not all, so dropshadow is missing, for example.
                    Also, there is an additional property for controlling the strength of this effect called backdrop-opacity, which receives the same values as the opacity property.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-grayscale bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-grayscale</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-grayscale backdrop-opacity-75 bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-opacity</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-blur bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-blur</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-brightness-200 bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-brightness</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-contrast-50 bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-contrast</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-saturate-200 bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-saturate</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-hue-rotate-60 bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-hue-rotate</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-invert bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-invert</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="w-full h-32">
                            <div className="relative">
                                <div className="absolute w-full">
                                    <img className="h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                                </div>
                                <div className="absolute top-0 w-full flex">
                                    <div className="backdrop-filter backdrop-sepia bg-opacity-10 bg-green-500 w-1/2 h-32"></div>
                                    <div className="bg-transparent w-1/2 h-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">backdrop-sepia</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/backdrop-blur'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Isolation</div>
                • isolate
                <br />
                • isolation-auto

                <p className="my-8 border-b-2" >
                    Isolation is a CSS property that works with mix blend modes. Normally the mix-blend-mode will make the element it's assigned to interact with every element underneath. By turning on the isolation, you can limit the blend mode to interact only with certain elements. You'll want to see this one, so look at the example.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-center py-4 h-96">
                        <div className="bg-blue-300 w-full h-16 flex items-center justify-center">
                            <div className="isolate top-0 w-full flex items-center justify-center h-8 -space-x-64">
                                <div className="mix-blend-darken w-72 h-64 bg-green-300"></div>
                                <img className="w-96 h-96" src="http://pixelprowess.com/i/powship.svg" alt="Pow Ship Logo" />
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">isolate</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/isolation'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Blend Mode</div>
                • bg-blend(-TYP)
                <br />
                TYP (normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation)
                <p className="my-8 border-b-2" >
                    If an element has a background image as well as a background color, you can use the background blend mode to control how the image blends with its background color.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-multiply bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-multiply</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-screen bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-screen</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-overlay bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-overlay</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-darken bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-darken</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-lighten bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-lighten</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-color-dodge bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-color-dodge</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-color-burn bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-color-burn</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-hard-light bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-hard-light</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-soft-light bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-soft-light</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-difference bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-difference</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-exclusion bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-exclusion</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-hue bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-hue</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 flex items-center">
                            <img className="bg-yellow-200 h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <div className="bg-blend-saturation bg-yellow-200 w-full bg-center bg-no-repeat h-32" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">bg-blend-saturation</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/background-blend-mode'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Mix Blend Mode</div>
                • mix-blend(-TYP)
                <br />
                TYP (normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation)
                <p className="my-8 border-b-2" >
                    If an element has a background image as well as a background color, you can use the background blend mode to control how the image blends with its background color.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-multiply h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-multiply</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-screen h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-screen</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-overlay h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-overlay</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-darken h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-darken</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-lighten h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-lighten</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-color-dodge h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-color-dodge</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-color-burn h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-color-burn</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-hard-light h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-hard-light</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-soft-light h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-soft-light</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-difference h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-difference</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-exclusion h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-exclusion</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-hue h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-hue</div>
                        </div>
                    </li>
                    <li className="flex items-center space-between px-4 py-2">
                        <div className="w-3/4 bg-yellow-200 h-32 flex items-center">
                            <img className="mix-blend-normal h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img className="mix-blend-saturation h-32 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">mix-blend-saturation</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/mix-blend-mode'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default MixingUtilities