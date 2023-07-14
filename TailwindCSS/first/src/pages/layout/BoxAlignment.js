import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const BoxAlignment = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Space Between</div>
                • space(-DIR)(-AMT)
                <br />
                DIR (x, y)
                <br />
                AMT (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20,
                24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, px, reves)
                <p className="my-8 border-b-2" >
                    I often just want to put some space in between elements. I know I could use a list, but then I'd have to undo some of the other spacing. Tailwind gives you a real easy set of classNamees to take care of that.
                    You get the typical scale from 0 to 96, plus px, which means one pixel.
                    There's a reverse options when you are using a reverse flex. like when you're using space-x-2 with flex-row-reverse you'd add space-x-reverse.
                    You can use these without flex on simple items like divs or display blocks, but they work real well with flex items.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className=" justify-start w-full flex items-center justify-between px-4 py-2">
                        <div className="space-x-2 flex">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                            <div className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</div>
                        </div>
                        <div className="space-x-8 flex">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                            <div className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-content-start</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />
                                x y<br />
                                <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />
                                    0 0.5 1 1.5 2<br />
                                    2.5 3 3.5 4 5 6<br />
                                    7 8 9 10 11 12<br />
                                    14 16 20 24 28<br />
                                    32 36 40 44 48 52<br />
                                    56 60 64 72 80 96<br />
                                    px reverse
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/space'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Justify Content</div>
                • justify(-DIR)
                <br />
                DIR (start, end, center, between, around, evenly)

                <p className="my-8 border-b-2" >
                    Justify content works with either grid or flex items and let you control how elements are postioned in the main axis.
                    <code> justify-start</code> places items at the beginning,
                    <code> justify-end</code> puts them at the end,
                    <code> justify-center </code>centers them.
                    Then there's a set of justify classNamees that spread items around
                    <code> justify-between </code>makes sure there is equal space between the items.
                    <code>justify-around</code> does the same thing, but puts equal space on each side. Finally
                    <code>justify-evenly</code> does the same thing as justify around, but gets rid of the double space.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className=" justify-start w-full flex items-center px-4 py-2">
                        <div className="w-full justify-start flex space-x-2 bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-start</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center py-2">
                        <div className="w-full justify-end flex space-x-2  bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3 w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-end</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full justify-center flex space-x-2  bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-center</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full justify-between flex space-x-2  bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-between</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full justify-around flex space-x-2  bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-around</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full justify-evenly flex space-x-2  bg-yellow-200">
                            <div className="bg-red-500 text-white px-3 py-2 rounded-md">1</div>
                            <div className="bg-green-500 text-white px-3 py-2 rounded-md">2</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded-md">3</div>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-evenly</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/justify-content'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Justify Items</div>
                • justify-items(-DIR)
                <br />
                DIR (auto, span, start, end, stretch)
                <p className="my-8 border-b-2" >
                    Specifically for grid items, you can control how items are placed within their axis. This is similar to Justify Content.
                    <code>justify-items-auto</code> is the default, which looks the same as
                    <code>justify-items-stretch</code> which stretches the items to fit their grid lines.
                    <code>justify-items-start</code> makes the items align to the beginning of the grid lines,
                    <code>justify-items-end </code>aligns the items to the end, and
                    <code>justify-items-center</code> aligns them to the center of the grid.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-items-auto</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-start grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-items-start</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-end grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-items-end</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-center grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-items-center</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-stretch grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-items-stretch</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/justify-items'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Justify Self</div>
                • justify-self(-DIR)
                <br />
                DIR (auto, span, start, end, stretch)
                <p className="my-8 border-b-2" >
                    Justify self is similar to Justify items, but applies to a single element.
                    In the example, you can see that I've set all of the items to use a
                    <code>justify-items-auto </code>layout, but each of the green ones uses one of the other classNamees.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="justify-self-auto bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-self-auto</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="justify-self-start bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-self-start</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="justify-self-end  bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-self-end</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="justify-self-center  bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-self-center</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="justify-items-auto grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="justify-self-stretch bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">justify-self-stretch</div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/justify-self'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Align Content</div>
                • content(-DIR)
                <br />
                DIR (center, start, end, between, around, evenly)
                <p className="my-8 border-b-2" >
                    Align Content works with flex and grid containers and align based on the cross axis.
                    The classNamees are pretty straightforward and much like the justify content classNamees with
                    <code>content-evenly</code>
                    In the example, I've given each of the containers a height of 40 units and made sure that the elements that have been aligned have been sized to full heights.
                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-center h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-center</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-start h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-start</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-end h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-end</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-between h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-between</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-around h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-around</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="content-evenly h-full bg-purple-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">content-evenly</div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/align-content'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Align Items</div>
                • items(-DIR)
                <br />
                DIR (center, start, end, baseline, stretch)

                <p className="my-8 border-b-2" >
                    Align Items lets you control how different rows are position on flex and grid containers. The example shows you the differences.
                    Most are straightforward, but take a look at items-baseline. It's slightly different than items-center. Although the text is different sizes, the browser will try to align the baselines when placing the elements.
                    Also, notice that I have no heights, just different padding on the items which gives them the extra heights.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-start h-full bg-green-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="text-6xl py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-6 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">items-start</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-end h-full bg-green-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="text-6xl py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-6 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">items-end</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-center h-full bg-green-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="text-6xl py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-6 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">items-center</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-baseline h-full bg-green-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="text-6xl py-2 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-6 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">items-baseline</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-green-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="text-6xl py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">items-stretch</div>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/align-items'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Align Self</div>
                • items(-DIR)
                <br />
                DIR (center, start, end, baseline, stretch)

                <p className="my-8 border-b-2" >
                    Align self lets you control the alignment of individual items. Notice that self-auto and self-stretch look the same.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="self-auto py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-auto</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="self-start py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-start</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="self-end py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-end</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="self-center py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-center</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="self-stretch py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-stretch</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/align-self'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Place Content</div>
                • place-content(-DIR)
                <br />
                DIR (center, start, end, between, around, evenly, stretch)
                <p className="my-8 border-b-2" >
                    Place content lets you take care of justifying and aligning at the same time and you'll see that it's very similar to the content classNamees, but the names are a combination of content and align.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-center h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-center</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-start h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-start</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-end h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-end</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-between h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-between</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-around h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-around</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-evenly h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-evenly</div>
                        </div>
                    </li>
                    <li className="w-full h-64 flex items-center px-4 py-2">
                        <div className="place-content-stretch h-48 bg-indigo-100 grid grid-cols-3 w-full gap-1">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-content-evenly</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/place-content'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Place Items</div>
                • place-items(-DIR)
                <br />
                DIR (auto, start, end, center, stretch)

                <p className="my-8 border-b-2" >
                    Similarly place items controls how items are justified and aligned.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="place-items-auto  h-32 grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-items-auto</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="place-items-start  h-32 grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-items-start</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="place-items-end  h-32 grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-items-end</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="place-items-center  h-32 grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-items-center</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="place-items-stretch  h-32 grid grid-cols-3 w-full gap-2">
                            <span className="bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span className="bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span className="bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                        </div>
                        <div className="ml-5 text-right  w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">place-items-stretch</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/place-items'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Place Self</div>
                • place-items(-DIR)
                <br />
                DIR (center, start, end, auto, stretch)

                <p className="my-8 border-b-2" >
                    Place self lets you control individual items inside place content containers, helping you justify and align them..

                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="place-items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="place-self-auto py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-auto</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="place-items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="place-self-start py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-start</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="place-items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="place-self-end py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-end</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="place-items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="place-self-center py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-center</div>
                        </div>
                    </li>
                    <li className="w-full h-40 flex items-center px-4 py-2">
                        <div className="place-items-stretch h-full bg-yellow-100 justify-items-auto grid grid-cols-3 w-full gap-1">
                            <span className="py-2 bg-red-500 text-white px-3 rounded-md">1</span>
                            <span className="place-self-stretch py-6 bg-green-500 text-white px-3 rounded-md">2</span>
                            <span className="py-2 bg-blue-500 text-white px-3 rounded-md">3</span>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">self-stretch</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/place-self'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section>
            <ScrollToTopButton />
        </>
    )
}

export default BoxAlignment