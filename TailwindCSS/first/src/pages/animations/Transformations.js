import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Transformations = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Transform</div>
                • transform, transform-gpu, transform-none
                <p className="my-8 border-b-2" >
                    There are three main transformation classes. It sets up the element so that it can be transform and acts as a reset for all of the transformation properties like translate, rotate, skew and scale.
                    The transform class is the base class and there's an optional class that tries to use the GPU or Graphical User Processor if it's available. That can yield faster animations.
                    The last class will ignore transforms if they exist.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="transform rotate-45 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">transform</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="transform-gpu rotate-180 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">transform-gpu</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="transform-none rotate-45 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">transform-none</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/scale'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Rotate</div>
                • (-)rotate(-DEG)
                <br />
                AMT (0, 1, 2, 3, 6, 12, 45, 90, 180)
                <p className="my-8 border-b-2" >
                    Since we already looked at rotation, let's take a look at the options there. You can rotate on 9 different angles. Rotation happens clockwise by default, but you can add a negative sign at the beginning so that it goes counter clockwise.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center space-between px-4 py-2">
                        <div class="w-full bg-yellow-200 h-32 flex items-center">
                            <img class="transform h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img class="transform -rotate-180 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">(-)rotate(-DEG)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">DEG</b><br />
                                0 1 2 3 6<br />12 45 90 180
                            </div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/rotate'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Scale</div>
                • scale(-DIR)(-SIZ)
                <br />
                DIR (x, y)
                <br />
                SIZ (0, 50, 75, 90, 95, 100, 105, 110, 125, 150)
                <p className="my-8 border-b-2" >
                    Scaling will allow you to resize elements. You can scale horizontally (in the x direction), vertically or both.
                    There's really just a handful of sizes here and honestly, they seem inadequate.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center space-between px-4 py-2">
                        <div class="w-full bg-purple-400 h-32 flex items-center">
                            <img class="transform h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img class="transform scale-150 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">scale(-DIR)(-SIZ)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">SIZ</b><br />
                                0 50 75 90 95 100 105 110 125 150
                            </div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/scale'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Skew</div>
                • (-)skew(-DIR)(-DEG)
                <br />
                DIR (x, y)
                <br />
                DEG (0, 1, 2, 3, 6, 12)
                <p className="my-8 border-b-2" >
                    Another transformation you can perform is a skew that takes in an angle, direction and can optionally take in a negative value.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center space-between px-4 py-2">
                        <div class="w-full bg-purple-400 h-32 flex items-center">
                            <img class="transform h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            <img class="transform -skew-x-12 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">(-)skew(-DIR)(-DEG)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">DIR</b><br />
                                x y
                                <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">DEG</b><br />
                                    0 1 2 3 6 12
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/skew'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Translate</div>
                • (-)translate(-DIR)(-AMT)
                <br />
                DIR (x, y)
                <br />
                AMT (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
                <br />1/2, 1/3, 2/3, 1/4, 2/4, 3/4, px, full)
                <p className="my-8 border-b-2" >
                    Translating means moving the object in a certain direction from it's origin. You can go in the x or y direction and also move in a negative direction with a full compliment of amounts from 0 to 96, fractions, px which is one pixel and full which is the full width.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center space-between px-4 py-2">
                        <div class="w-full bg-indigo-300 h-96 flex items-center">
                            <img class="transform translate-x-16 h-16 w-full" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">(-)translate(-DIR)(-AMT)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">DIR</b><br />
                                x y
                                <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />
                                    0 0.5 1 1.5 2 2.5 3<br />
                                    3.5 4 5 6 7 8 9 10<br />
                                    11 12 14 16 20 24 28<br />
                                    32 36 40 44 48 52 56<br />
                                    60 64 72 80 96<br />
                                    1/2 1/3 2/3<br />
                                    1/4 2/4 3/4<br />
                                    px full
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/translate'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Transform Origin</div>
                • origin(-DIR)
                <br />
                DIR (center, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
                <p className="my-8 border-b-2" >
                    These classes will let you set the origin for transformations. The names are pretty self explanatory.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center space-between px-4 py-2">
                        <div class="w-full bg-yellow-200">
                            <img class="transform origin-left rotate-12 h-40 bg-indigo-400" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">origin(-DIR)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">DIR</b><br />
                                center top<br /> top-right
                                right<br />bottom-right
                                bottom <br />bottom-left
                                left<br />top-left
                            </div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/transform-origin'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Transformations