import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopBuuton";

const DisplayAndPosition = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Display</div>
                • block, inline-block, inline
                • flex, inline-flex
                • flow-root, grid, inline-grid, contents, hidden
                • table, inline-table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row-group, table-row
                • list-item, flow-root, grid, inline-grid, contents, hidden

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <span class="block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span class="block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span class="block w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span class="block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">block</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <span class="inline-block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span class="inline-block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span class="inline-block w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span class="inline-block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-block</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <div class="table w-full">
                                <div class="table-row-group">
                                    <div class="table-row">
                                        <div class="table-cell w-16 h-16 bg-red-500 text-white bg-red-500 text-white p-2">1</div>
                                        <div class="table-cell w-16 h-16 bg-red-500 text-white bg-green-500 text-white p-2">2</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-cell w-16 h-16 bg-red-500 text-white bg-blue-500 text-white p-2">3</div>
                                        <div class="table-cell w-16 h-16 bg-red-500 text-white bg-yellow-300 text-white p-2">4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 mr-1">table</span><span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">inline-table</span><br />
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-row</span>
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-cell</span>
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-caption</span><br />
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-column</span>
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-column-group</span><br />
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-header-group</span>
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-row-group</span><br />
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-footer-group</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <span class="list-item w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span class="list-item w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span class="list-item w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span class="list-item w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">list-item</div>
                        </div>
                    </li>  <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex</span>
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-flex</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="grid grid-cols-2 gap-1">
                            <span class="flex-1 w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="flex-1 w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="flex-1 w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="flex-1 w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">grid</span><br />
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-grid</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <span class="flow-root">

                            <img class="float-left" style={{ src: 'url(http://pixelprowess.com/i/powship.svg)' }}>
                                <img class="float-left" style={{ src: 'url(http://pixelprowess.com/i/powship.svg)' }}>
                                    <img class="float-left" style={{ src: 'url(http://pixelprowess.com/i/powship.svg)' }}>
                                    </span>
                                    <div class="ml-5 text-right">
                                        <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">flow-root</div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between px-4 py-2">
                                    <div class="w-full inline-block">
                                        <span class="inline-block w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                                        <div class="contents grid grid-cols-2 gap-1 inline-block">
                                            <span class="flex-1 w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">2</span>
                                            <span class="flex-1 w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">3</span>
                                            <span class="flex-1 w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">4</span>
                                            <span class="flex-1 w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">5</span>
                                        </div>
                                        <span class="inline-block w-16 h-16 bg-pink-500 text-white px-3 py-2 rounded-md mb-1">6</span>
                                    </div>
                                    <div class="ml-5 text-right">
                                        <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">contents</div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between px-4 py-2">
                                    <div class="w-full">
                                        <span class="inline-block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                                        <span class="inline-block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                                        <span class="hidden w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                                        <span class="inline-block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                                    </div>
                                    <div class="ml-5 text-right">
                                        <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">hidden</div>
                                    </div>
                                </li>
                            </ul>

                            <Link to='https://raybo.org/slides_tailwind/notes/slides/04_03/index.html#display'>
                                <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                            </Link>

                            <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Margin</div>
                            • (-)m(-DIR)(-SIZ)
                            <br />
                            DIR (px, py, t, r, b, l)
                            <br />
                            SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, px)
                            <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                                <li className="flex items-center justify-between px-4 py-2">
                                    <div className="antialiased">
                                        <div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-0 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">0</span> 0 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-0.5 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">0.5</span> 1.125 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-1 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">1</span> 1.25 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-1.5 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">1.5</span> 1.375 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-2 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">2</span> 1.5 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-2.5 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">2.5</span> 1.625 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-3 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">3</span> 1.75 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-3.5 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">3.5</span> 1.875 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-4 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">4</span> 1 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-5 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">5</span> 1.25 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-6 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">6</span> 1.5 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-7 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">7</span> 1.75 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-8 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">8</span> 2 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-9 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">9</span> 1.25 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-10 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">10</span> 1.5 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-11 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">11</span> 1.75 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-12 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">12</span> 3 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-14 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">14</span> 1.5 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-16 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">16</span> 4 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-20 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">20</span> 24 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-24 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">24</span> 6 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-28 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">28</span> 7 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-32 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">32</span> 8 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-36 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">36</span> 9 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-40 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">40</span> 10 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-44 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">44</span> 11 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-48 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">48</span> 12 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-52 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">52</span> 13 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-56 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">56</span> 14 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-60 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">60</span> 15 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-64 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">64</span> 16 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-72 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">72</span> 18 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-80 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">80</span> 20 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-96 p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">96</span> 24 rem</div>
                                            <div className="whitespace-nowrap"><span className="m-1 mr-px p-1 w-10 text-center inline-block border-2 border-green-500 bg-green-200 text-green-900">px</span> 1 px</div>
                                        </div>
                                    </div>
                                    <div className="ml-5 text-right">
                                        <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">(SIG)p-DIR-SIZ</div>
                                        <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIG</b><br />-</div>
                                        <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />x y t r b l</div>
                                        <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br /> 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96 px</div>
                                    </div>
                                </li>

                            </ul>

                            <Link to='https://raybo.org/slides_tailwind/notes/slides/04_02/index.html#margin'>
                                <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                            </Link>
                            <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Box Sizing</div>
                            • box-border, box-content

                            <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                                <li className="flex items-center justify-between px-4 py-2">
                                    <div>
                                        <div className="box-border border-purple-500 border-8 w-32 h-32 p-5 text-center bg-yellow-300"></div>
                                    </div>
                                    <div className="ml-5 text-right">
                                        <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">box-border</div>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between px-4 py-2">
                                    <div>
                                        <div className="box-content border-purple-500 border-8 w-32 h-32 p-5 text-center bg-yellow-300"></div>
                                    </div>
                                    <div className="ml-5 text-right">
                                        <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">box-content</div>
                                    </div>
                                </li>
                            </ul>


                            <Link to='https://raybo.org/slides_tailwind/notes/slides/04_02/index.html#box-sizing'>
                                <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                            </Link>

                        </section >
                        <ScrollToTopButton />
                    </>
                    )
}

                    export default DisplayAndPosition