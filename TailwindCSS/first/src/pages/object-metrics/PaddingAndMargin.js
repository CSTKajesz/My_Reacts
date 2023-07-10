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
                <p className="my-8 border-b-2" >
                    Padding sets up the spacing inside an element's border section. You can see that there are some really rich options for padding.
                    You can apply padding on four sides at once using just a p. You can change all vertical padding at once with py, horizontal padding with px or each one of the sides with one of the four letters t- for top r- for right b- for bottom and l- forleft.
                    There are also a ton of size classes here. There are some pretty small classes at the beginning and some large ones towards the end. All sizes are in REMs, or root ems, which is set to 16 pixels except for a special size for a single pixel on all sides.
                </p>

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
                <Link to='https://tailwindcss.com/docs/padding'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Margin</div>
                • (-)m(-DIR)(-SIZ)
                <br />
                DIR (px, py, t, r, b, l)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, px)
                <p className="my-8 border-b-2" >
                    Margin sets up the spacing outside an element's border section. Like with padding, there are a ton of numbers you can use. However margin lets you specify negative margins so there are even more options.
                    You can apply margin on four sides at once using just a p. You can change all vertical margins at once with py, horizontal margin with px or each one of the sides with one of the four letters t- for top r- for right b- for bottom and l- for left. I find it easy to remember by thinking of the word TROUBLE without the consonants
                    There are also a ton of size classes here. There are some pretty small classes at the beginning and some large ones towards the end. All sizes are in REMs, or root ems, which is set to 16 pixels except for a special size for a single pixel on all sides.
                </p>
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

                <Link to='https://tailwindcss.com/docs/margin'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Box Sizing</div>
                • box-border, box-content
                <p className="my-8 border-b-2" >
                    In CSS, the size of elements is often expressed in pixels, but is calculated by adding the border and padding to the element's size. So if you specify a 100px width, but then add 10 pixels of padding, then the size of the element is 120px, 100, plus ten on each side.
                    space between
                    You can change that by setting the box sizing parameter to border box. This makes the size include the border and padding inside the size specified. So a 100 pixel width will make adjust the size of the element to 80 pixels. That is a much more predictable sizing and is the default for Tailwind.
                    However, if you want to change it to the traditional CSS sizing, you can use box-content class.
                </p>

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


                <Link to='https://tailwindcss.com/docs/box-sizing'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default PaddingAndMargin