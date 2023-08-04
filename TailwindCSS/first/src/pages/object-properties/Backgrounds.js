import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Backgrounds = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Background Colors</div>
                • bg-COLOR(-STR)
                <table className="border-separate [border-spacing:0.75rem]">

                    <tr className="row">
                        <th className="font-bold pr-4">Backgraound colors</th>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-black">Black</th>
                        <td className="bg-black-50 rounded p-2">50</td>
                        <td className="bg-black-100 rounded p-2">100</td>
                        <td className="bg-black-200 rounded p-2">200</td>
                        <td className="bg-black-300 rounded p-2">300</td>
                        <td className="bg-black-400 rounded p-2">400</td>
                        <td className="bg-black-500">500</td>
                        <td className="bg-black-600">600</td>
                        <td className="bg-black-700">700</td>
                        <td className="bg-black-800">800</td>
                        <td className="bg-black-900">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-gray-500">Gray</th>
                        <td className="bg-gray-50 rounded p-2">50</td>
                        <td className="bg-gray-100 rounded p-2">100</td>
                        <td className="bg-gray-200 rounded p-2">200</td>
                        <td className="bg-gray-300 rounded p-2">300</td>
                        <td className="bg-gray-400 rounded p-2">400</td>
                        <td className="bg-gray-500 rounded p-2">500</td>
                        <td className="bg-gray-600 rounded p-2">600</td>
                        <td className="bg-gray-700 rounded p-2">700</td>
                        <td className="bg-gray-800 rounded p-2">800</td>
                        <td className="bg-gray-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-red-500">Red</th>
                        <td className="bg-red-50 rounded p-2">50</td>
                        <td className="bg-red-100 rounded p-2">100</td>
                        <td className="bg-red-200 rounded p-2">200</td>
                        <td className="bg-red-300 rounded p-2">300</td>
                        <td className="bg-red-400 rounded p-2">400</td>
                        <td className="bg-red-500 rounded p-2">500</td>
                        <td className="bg-red-600 rounded p-2">600</td>
                        <td className="bg-red-700 rounded p-2">700</td>
                        <td className="bg-red-800 rounded p-2">800</td>
                        <td className="bg-red-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-yellow-500">Yellow</th>
                        <td className="bg-yellow-50 rounded p-2">50</td>
                        <td className="bg-yellow-100 rounded p-2">100</td>
                        <td className="bg-yellow-200 rounded p-2">200</td>
                        <td className="bg-yellow-300 rounded p-2">300</td>
                        <td className="bg-yellow-400 rounded p-2">400</td>
                        <td className="bg-yellow-500 rounded p-2">500</td>
                        <td className="bg-yellow-600 rounded p-2">600</td>
                        <td className="bg-yellow-700 rounded p-2">700</td>
                        <td className="bg-yellow-800 rounded p-2">800</td>
                        <td className="bg-yellow-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-green-500">Green</th>
                        <td className="bg-green-50 rounded p-2">50</td>
                        <td className="bg-green-100 rounded p-2">100</td>
                        <td className="bg-green-200 rounded p-2">200</td>
                        <td className="bg-green-300 rounded p-2">300</td>
                        <td className="bg-green-400 rounded p-2">400</td>
                        <td className="bg-green-500 rounded p-2">500</td>
                        <td className="bg-green-600 rounded p-2">600</td>
                        <td className="bg-green-700 rounded p-2">700</td>
                        <td className="bg-green-800 rounded p-2">800</td>
                        <td className="bg-green-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-blue-500">Blue</th>
                        <td className="bg-blue-50 rounded p-2">50</td>
                        <td className="bg-blue-100 rounded p-2">100</td>
                        <td className="bg-blue-200 rounded p-2">200</td>
                        <td className="bg-blue-300 rounded p-2">300</td>
                        <td className="bg-blue-400 rounded p-2">400</td>
                        <td className="bg-blue-500 rounded p-2">500</td>
                        <td className="bg-blue-600 rounded p-2">600</td>
                        <td className="bg-blue-700 rounded p-2">700</td>
                        <td className="bg-blue-800 rounded p-2">800</td>
                        <td className="bg-blue-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-indigo-500">Indigo</th>
                        <td className="bg-indigo-50 rounded p-2">50</td>
                        <td className="bg-indigo-100 rounded p-2">100</td>
                        <td className="bg-indigo-200 rounded p-2">200</td>
                        <td className="bg-indigo-300 rounded p-2">300</td>
                        <td className="bg-indigo-400 rounded p-2">400</td>
                        <td className="bg-indigo-500 rounded p-2">500</td>
                        <td className="bg-indigo-600 rounded p-2">600</td>
                        <td className="bg-indigo-700 rounded p-2">700</td>
                        <td className="bg-indigo-800 rounded p-2">800</td>
                        <td className="bg-indigo-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-purple-500">Purple</th>
                        <td className="bg-purple-50 rounded p-2">50</td>
                        <td className="bg-purple-100 rounded p-2">100</td>
                        <td className="bg-purple-200 rounded p-2">200</td>
                        <td className="bg-purple-300 rounded p-2">300</td>
                        <td className="bg-purple-400 rounded p-2">400</td>
                        <td className="bg-purple-500 rounded p-2">500</td>
                        <td className="bg-purple-600 rounded p-2">600</td>
                        <td className="bg-purple-700 rounded p-2">700</td>
                        <td className="bg-purple-800 rounded p-2">800</td>
                        <td className="bg-purple-900 rounded p-2">900</td>
                    </tr>
                    <tr className="row">
                        <th className="font-bold text-pink-500">Pink</th>
                        <td className="bg-pink-50 rounded p-2">50</td>
                        <td className="bg-pink-100 rounded p-2">100</td>
                        <td className="bg-pink-200 rounded p-2">200</td>
                        <td className="bg-pink-300 rounded p-2">300</td>
                        <td className="bg-pink-400 rounded p-2">400</td>
                        <td className="bg-pink-500 rounded p-2">500</td>
                        <td className="bg-pink-600 rounded p-2">600</td>
                        <td className="bg-pink-700 rounded p-2">700</td>
                        <td className="bg-pink-800 rounded p-2">800</td>
                        <td className="bg-pink-900 rounded p-2">900</td>
                    </tr>
                </table>

                <Link to='https://tailwindcss.com/docs/background-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Opacity</div>
                • bg-opacity-AMT
                <br />
                AMT (0, 5, 10, 20 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-0 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-0</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-5 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-5</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-10 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-10</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-20 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600 flex justify-center items-center text-xl font-bold"><div>Elton</div></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-20</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-25 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-25</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-30 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-30</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-40 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-40</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-50 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-50</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-60 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-60</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-70 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-70</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-75 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-75</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-80 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-80</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-90 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-90</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-95 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-95</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="bg-opacity-100 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-opacity-100</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/background-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Image</div>
                • bg(-none)|(-gradient-to)(-DIR)
                <br />
                DIR (t, tr, r, br, b, bl, l, tl)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-t from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-t</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-tr</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-r from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-r</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-br from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-br</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-b from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-b</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-bl from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-bl</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-l from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-l</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="bg-gradient-to-tl from-red-600 to-blue-600 h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-gradient-to-tl</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/background-image'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Gradient Color Stops</div>
                • (from|via|to)-COL-AMT
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between py-2">
                        <div className="from-red-600 bg-gradient-to-r h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">from</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="from-red-600 to-purple-500 bg-gradient-to-r h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">from, to</div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                        <div className="from-red-600 via-yellow-300 to-purple-500 bg-gradient-to-r h-32 w-full"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">from, via, to</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/gradient-color-stops'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Size</div>
                • bg(-TYP)
                <br />
                TYP(auto, cover, contain)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-auto bg-center bg-no-repeat h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-auto</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-cover bg-center bg-no-repeat h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-cover</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-contain bg-center bg-no-repeat h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-contain</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/background-size'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Repeat </div>
                • bg(-TYP)
                <br />
                TYP(repeat, no-repeat, repeat-x, repeat-y, repeat-round, repeat-space)
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-no-repeat bg-auto bg-center h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-no-repeat</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-repeat-x bg-auto bg-center h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-repeat-x</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-repeat-y bg-auto bg-center h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-repeat-y</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-repeat bg-auto bg-center h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-repeat</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-repeat-round bg-auto bg-center h-72 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-repeat-round</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-repeat-space bg-auto bg-center h-96 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-repeat-space</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/background-repeat'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Position</div>
                • bg-(TYP)
                <br />
                TYP(bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top)

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-bottom bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-bottom</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-center bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-center</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-left bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-left</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-left-bottom bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-left-bottom</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-left-top bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-left-top</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-right bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-right</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-right-bottom bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-right-bottom</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-right-top bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-right-top</div>
                    </li>
                    <li className="flex items-center justify-between py-4">
                        <div className="bg-top bg-no-repeat bg-auto h-64 w-full bg-green-300 overflow-auto" style={{ backgroundImage: 'url(http://pixelprowess.com/i/powship.svg)' }}></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-top</div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/background-position'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Background Origin</div>
                • bg-origin(-TYP)
                <br />
                TYP(padding, border, content)

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-origin-border border-dashed p-4 border-8 bg-cover bg-center bg-no-repeat w-72 h-72" style={{ backgroundImage: 'url(http://pixelprowess.com/i/swamp_sq.png)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-origin-border</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-origin-padding border-dashed p-4 border-8 bg-cover bg-center bg-no-repeat w-72 h-72" style={{ backgroundImage: 'url(http://pixelprowess.com/i/swamp_sq.png)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-origin-padding</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="bg-origin-content border-dashed p-4 border-8 bg-cover bg-center bg-no-repeat w-72 h-72" style={{ backgroundImage: 'url(http://pixelprowess.com/i/swamp_sq.png)' }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">bg-origin-content</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/background-origin'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8" style={{ fontFamily: 'Raleway' }}>Box Decoration Break</div>
                • decoration-slice, decoration-clone
                <br />
                TYP(padding, border, content)

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted font-ra">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased text-center">
                            <p class="decoration-slice inline bg-gradient-to-b from-yellow-400 to-red-500 leading-snug px-6 font-light text-4xl text-white">Bubbles is from a family of robots that originated from an experiment melding candy vending machines with robotics in the early 1980s.</p>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">decoration-slice</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased text-center">
                            <p class="decoration-clone inline bg-gradient-to-b from-yellow-400 to-red-500 leading-snug px-6 font-light text-4xl text-white">Bubbles is from a family of robots that originated from an experiment melding candy vending machines with robotics in the early 1980s.</p>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">decoration-clone</div>
                    </li>

                </ul>

                <Link to='https://tailwindcss.com/docs/box-decoration-break'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Backgrounds