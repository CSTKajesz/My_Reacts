import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton"

const TextDirectives = () => {

    return (
        <>
            <section id="textdirectives">
                <div className="text-2xl border-t-8 border-b-2 mb-8">Text Colors</div>
                • text-COLOR(-STR)
                <table className="border-separate [border-spacing:0.75rem]">

                    <tr className="row">
                        <th className="font-bold pr-4">Text colors</th>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Black</th>
                        <td className="text-black-50">50</td>
                        <td className="text-black-100">100</td>
                        <td className="text-black-200">200</td>
                        <td className="text-black-300">300</td>
                        <td className="text-black-400">400</td>
                        <td className="text-black-500">500</td>
                        <td className="text-black-600">600</td>
                        <td className="text-black-700">700</td>
                        <td className="text-black-800">800</td>
                        <td className="text-black-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Gray</th>
                        <td className="text-gray-50">50</td>
                        <td className="text-gray-100">100</td>
                        <td className="text-gray-200">200</td>
                        <td className="text-gray-300">300</td>
                        <td className="text-gray-400">400</td>
                        <td className="text-gray-500">500</td>
                        <td className="text-gray-600">600</td>
                        <td className="text-gray-700">700</td>
                        <td className="text-gray-800">800</td>
                        <td className="text-gray-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Red</th>
                        <td className="text-red-50">50</td>
                        <td className="text-red-100">100</td>
                        <td className="text-red-200">200</td>
                        <td className="text-red-300">300</td>
                        <td className="text-red-400">400</td>
                        <td className="text-red-500">500</td>
                        <td className="text-red-600">600</td>
                        <td className="text-red-700">700</td>
                        <td className="text-red-800">800</td>
                        <td className="text-red-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Yellow</th>
                        <td className="text-yellow-50">50</td>
                        <td className="text-yellow-100">100</td>
                        <td className="text-yellow-200">200</td>
                        <td className="text-yellow-300">300</td>
                        <td className="text-yellow-400">400</td>
                        <td className="text-yellow-500">500</td>
                        <td className="text-yellow-600">600</td>
                        <td className="text-yellow-700">700</td>
                        <td className="text-yellow-800">800</td>
                        <td className="text-yellow-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Green</th>
                        <td className="text-green-50">50</td>
                        <td className="text-green-100">100</td>
                        <td className="text-green-200">200</td>
                        <td className="text-green-300">300</td>
                        <td className="text-green-400">400</td>
                        <td className="text-green-500">500</td>
                        <td className="text-green-600">600</td>
                        <td className="text-green-700">700</td>
                        <td className="text-green-800">800</td>
                        <td className="text-green-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Blue</th>
                        <td className="text-blue-50">50</td>
                        <td className="text-blue-100">100</td>
                        <td className="text-blue-200">200</td>
                        <td className="text-blue-300">300</td>
                        <td className="text-blue-400">400</td>
                        <td className="text-blue-500">500</td>
                        <td className="text-blue-600">600</td>
                        <td className="text-blue-700">700</td>
                        <td className="text-blue-800">800</td>
                        <td className="text-blue-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Indigo</th>
                        <td className="text-indigo-50">50</td>
                        <td className="text-indigo-100">100</td>
                        <td className="text-indigo-200">200</td>
                        <td className="text-indigo-300">300</td>
                        <td className="text-indigo-400">400</td>
                        <td className="text-indigo-500">500</td>
                        <td className="text-indigo-600">600</td>
                        <td className="text-indigo-700">700</td>
                        <td className="text-indigo-800">800</td>
                        <td className="text-indigo-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Purple</th>
                        <td className="text-purple-50">50</td>
                        <td className="text-purple-100">100</td>
                        <td className="text-purple-200">200</td>
                        <td className="text-purple-300">300</td>
                        <td className="text-purple-400">400</td>
                        <td className="text-purple-500">500</td>
                        <td className="text-purple-600">600</td>
                        <td className="text-purple-700">700</td>
                        <td className="text-purple-800">800</td>
                        <td className="text-purple-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-pink-500">Pink</th>
                        <td className="text-pink-50">50</td>
                        <td className="text-pink-100">100</td>
                        <td className="text-pink-200">200</td>
                        <td className="text-pink-300">300</td>
                        <td className="text-pink-400">400</td>
                        <td className="text-pink-500">500</td>
                        <td className="text-pink-600">600</td>
                        <td className="text-pink-700">700</td>
                        <td className="text-pink-800">800</td>
                        <td className="text-pink-900">900</td>
                    </tr>
                </table>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-colors'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Text Opacity</div>
                • text-opacity-AMT
                <br />
                AMT (0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <ul className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-0 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-0</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-5 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-5</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-10 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-10</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-20 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-20</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-25 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-25</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-30 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-30</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-40 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-40</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-50 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-50</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-60 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-60</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-70 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-70</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-75 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-75</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-70 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-70</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-75 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-75</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-80 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-80</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-90 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-90</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-95 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-95</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className=" text-opacity-100 bg-indigo-500 text-white rounded-2 px-2 py-1 rounded inline-block font-light text-2xl align-middle mb-2">Dolores</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 text-white bg-pink-500 rounded">text-opacity-100</div>
                    </li>
                </ul>
                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Text Alignment</div>
                • text-TYP
                <br />
                TYP(Left, center, right, justify)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-left">
                            <div className="font-light text-5xl align-middle mb-2">Rex</div>
                            <p className="text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-align</span>: left</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-left</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-center">
                            <div className="font-light text-5xl align-middle mb-2">Dolores</div>
                            <p className="text-md leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-align</span>: center</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-center</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-right">
                            <div className="font-light text-5xl align-middle mb-2">Bubbles</div>
                            <p className="text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-align</span>: right</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-right</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-justify">
                            <div className="font-light text-5xl align-middle mb-2">Fred</div>
                            <p className="text-md leading-tight">Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants. He's been at the forefront of many inventions, but has a special affinity for improving the world through alternative energy and green-living. Fred's engineering collaborations with the City of Binaryville have helped the city reduce its energy consumption year over year, and he's twice been awarded the highly coveted Binaryville Medallion of Honor.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-align</span>: justify</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-justify</div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-alignment'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Text Decoration</div>
                • underline, line-through, no-underline
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-left">
                            <div className="font-light text-5xl align-middle mb-2">Rex</div>
                            <p className="underline text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-decoration</span>: underline;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">underline</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-light text-5xl align-middle mb-2">Dolores</div>
                            <p className="line-through text-md leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-decoration</span>: center</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">line-through</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-light text-5xl align-middle mb-2">Bubbles</div>
                            <p className="text-md leading-tight"><u className="no-underline">Bubble Gum robot</u>, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-decoration</span>: right</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">no-underline</div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-decoration'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Text Transform</div>
                • uppercase, lowercase, capitalize, normal-case
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-left">
                            <p className="uppercase text-xl leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-transform</span>: uppercase;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">uppercase</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="lowercase text-xl leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-transform</span>: lowercase</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">lowercase</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="capitalize text-xl leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-transform</span>: capitalize</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">capitalize</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-transform: capitalize">
                            <p className="normal-case text-xl leading-tight">Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants.</p>
                            <div className="normal-case text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">text-transform</span>: normal-case</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">normal-case</div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-transform'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Text Overflow</div>
                • truncate, overflow-ellipsis, overflow-clip
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <p className="truncate w-96 bg-yellow-200 text-md p-4">Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants. He's been at the forefront of many inventions, but has a special affinity for improving the world through alternative energy and green-living. Fred's engineering collaborations with the City of Binaryville have helped the city reduce its energy consumption year over year, and he's twice been awarded the highly coveted Binaryville Medallion of Honor.</p>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">truncate</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <p className="overflow-ellipsis overflow-hidden w-96 p-4 bg-yellow-200 text-md">
                            Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</p>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">overflow-ellipsis</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <p className="overflow-clip overflow-hidden w-96 p-4 bg-yellow-200 text-md">
                            Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</p>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">overflow-clip</div>
                    </li>

                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/02_02/index.html#text-overflow'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section>
            <ScrollToTopButton />
        </>
    )
}

export default TextDirectives