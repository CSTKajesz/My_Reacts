import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Rings = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Ring Width</div>
                • ring(-AMT)
                <br />
                AMT (0, 1, 2, 4, 8, inset)
                <p className="my-8 border-b-2" >
                    There are four sizes besides 0, but interestingly enough, if you just use ring without a size you get an extra size, which is the equivalent of three pixels.
                    You can also add an inset option to any of these sizes to make the box shadow display inside.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="ring-0 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring-1 :focus-ring-2 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring-2 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring-4 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring-8 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div className="ring-8 ring-inset font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-SID-AMT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />0 1 2 4 8 inset</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/ring-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Opacity</div>
                • ring-opacity-AMT
                <br />
                AMT (0, 5, 10, 20 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <p className="my-8 border-b-2" >
                    Opacity is similar to the border opacity with each value listed here being the equivalent in decimal measurements. So 20 means an opacity of .2. Again the nice thing here is that you can do the opacity of just the outline in the same place that you set the background color and border with. It's part of Tailwind's charm by using a variable.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div className="ring-opacity-0 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-5 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-10 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-20 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-25 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-30 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-40 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-50 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-60 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-70 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-75 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-80 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-90 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-95 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="ring-opacity-100 ring-4 0 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">--tw-ring-opacity</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-opacity-AMT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />0 5 10 20 25 30 40 50 60 70 75 80 90 95 100</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/ring-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Color</div>
                • ring-COL-STR
                <p className="my-8 border-b-2" >
                    Colors and it's options are exactly the same as borders, so there's not much to say here, other than the default color for a ring is blue, so if you don't specify a color, but have a ring, it will be a light blue.
                    Just like with the ring color, a variable controls the color so that you can set all options at the same level.
                </p>
                <ul className="container mx-auto">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div className="ring-gray-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-red-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-yellow-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-green-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-blue-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-indigo-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-purple-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="ring-pink-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                            </div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-4"><span className="font-bold">tw-ring-color</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-COL-STR</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">COL</b><br />transparent current black white<br />gray red yellow green blue indigo purple pink</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STR</b><br />100 200 300 400 500 600 700 800 900</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/ring-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Offset Width</div>
                • ring-offset-WDT
                <br />
                WDT(0, 1, 2, 4, 8)
                <p className="my-8 border-b-2" >
                    The offset width lets you simulate an offset of the ring by adding a solid white border of a certain size.
                </p>
                <ul className="container mx-auto">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div className="ring-offset-0 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-1 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-2 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-8 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                            </div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-4"><span className="font-bold">--tw-offset-width</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-WDT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">WDT</b><br />0 1 2 4 8</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/ring-offset-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Offset Color</div>
                • ring-offset-COL-STR
                <p className="my-8 border-b-2" >
                    You can also set the color of the ring's space to whatever color you want, which gives you some other options for styles.
                    The color are the usual variables, which includes black, white and transparent, plus the current color option as well.
                </p>
                <ul className="container mx-auto">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div className="ring-offset-4 ring-offset-gray-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-red-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-yellow-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-green-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-blue-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-indigo-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-purple-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div className="ring-offset-4 ring-offset-pink-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                            </div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-4"><span className="font-bold">--tw-ring-offset-color</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-offset-COL</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">COL</b><br />
                                transparent current black white<br />
                                gray red yellow green blue indigo purple pink</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/ring-offset-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Focus Variants</div>
                • focus:
                <p className="my-8 border-b-2" >
                    There are two other properties you can use to modify the rings. These are prefixes that you use as modifier. Focus lets you control the look fields when they gain focus, so this is really good for things like buttons and other input fields in forms.
                    By default, rings are drawn on the outside of an element, but there's a variant you can use to switch that so it displays inside the element.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <button className="focus:outline-none bg-blue-500 text-white font-bold rounded-md p-2 mr-2">Normal</button>
                            <button className="focus:ring-8 focus:ring-pink-400 bg-blue-500 text-white font-bold rounded-md p-2 my-4">Focus</button>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">:focus</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/ring-width#focus-rings'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section>
            <ScrollToTopButton />
        </>
    )
}

export default Rings