import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton";

const PaddingAndMargin = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Padding</div>
                • p(-DIR)(-SIZ)
                <br />
                DIR (px, py, t, r, b, l)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, px)

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-0 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">0</span> 0 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-0.5 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">0.5</span> 1.125 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-1 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">1</span> 1.25 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-1.5 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">1.5</span> 1.375 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-2 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">2</span> 1.5 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-2.5 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">2.5</span> 1.625 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-3 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">3</span> 1.75 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-3.5 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">3.5</span> 1.875 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-4 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">4</span> 1 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-5 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">5</span> 1.25 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-6 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">6</span> 1.5 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-7 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">7</span> 1.75 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-8 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">8</span> 2 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-9 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">9</span> 1.25 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-10 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">10</span> 1.5 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-11 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">11</span> 1.75 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-12 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">12</span> 3 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-14 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">14</span> 1.5 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-16 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">16</span> 4 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-20 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">20</span> 24 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-24 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">24</span> 6 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-28 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">28</span> 7 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-32 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">32</span> 8 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-36 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">36</span> 9 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-40 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">40</span> 10 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-44 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">44</span> 11 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-48 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">48</span> 12 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-52 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">52</span> 13 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-56 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">56</span> 14 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-60 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">60</span> 15 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-64 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">64</span> 16 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-72 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">72</span> 18 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-80 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">80</span> 20 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-96 mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">96</span> 24 rem</div>
                                <div className="whitespace-nowrap"><span className="p-1 pr-px mb-1 inline-block border-2 border-yellow-500 bg-yellow-300 rounded-md text-yellow-900">px</span> 1 px</div>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">p-DIR-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />t l d r</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br /> 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96 px</div>
                        </div>
                    </li>

                </ul>
                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_02/index.html#padding'>
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

export default PaddingAndMargin