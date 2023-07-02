import { HashLink as Link } from 'react-router-hash-link';
// import ScrollToTop from '../../components/ScrollToTop'
import { AiOutlineToTop } from 'react-icons/ai';
import ScrollToTopButton from '../../components/ScrollToTopBuuton';


const Borders = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Ring Width</div>
                • ring(-AMT)
                <br />
                AMT (0, 1, 2, 4, 8, inset)
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <div class="ring-0 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring-1 :focus-ring-2 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring-2 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring-4 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring-8 font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="ring-8 ring-inset font-bold text-blue-500 rounded-md p-2 my-4 text-center">Spring</div>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">box-shadow</span></div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-SID-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />0 1 2 4 8 inset</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Opacity</div>
                • ring-opacity-AMT
                <br />
                AMT (0, 5, 10, 20 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)


                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="ring-opacity-0 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-5 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-10 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-20 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-25 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-30 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-40 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-50 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-60 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-70 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-75 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-80 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-90 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-95 ring-4 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="ring-opacity-100 ring-4 0 ring-purple-500 font-bold text-purple-500 rounded-md p-2 my-3 text-center">Rivet</div>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">--tw-ring-opacity</span>: VARIED</div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-opacity-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />0 5 10 20 25 30 40 50 60 70 75 80 90 95 100</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Color</div>
                • ring-COL-STR
                <ul class="container mx-auto">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div class="ring-gray-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-red-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-yellow-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-green-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-blue-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-indigo-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-purple-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div class="ring-pink-500 ring-4 text-center rounded-md p-2 my-4">Belle</div>
                            </div>
                            <div class="text-xs font-mono font-light text-gray-500 mt-4"><span class="font-bold">tw-ring-color</span>: VARIED</div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-COL-STR</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">COL</b><br />transparent current black white<br />gray red yellow green blue indigo purple pink</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">STR</b><br />100 200 300 400 500 600 700 800 900</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Offset Width</div>
                • ring-offset-WDT
                <br />
                WDT(0, 1, 2, 4, 8)
                <ul class="container mx-auto">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div class="ring-offset-0 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-1 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-2 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-8 ring-purple-500 ring-4 bg-purple-500 text-white text-center rounded-md p-2 my-6">Elton</div>
                            </div>
                            <div class="text-xs font-mono font-light text-gray-500 mt-4"><span class="font-bold">--tw-offset-width</span>: VARIED</div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-WDT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">WDT</b><br />0 1 2 4 8</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-offset-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Offset Color</div>
                • ring-offset-COL-STR


                <ul class="container mx-auto">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div class="ring-offset-4 ring-offset-gray-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-red-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-yellow-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-green-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-blue-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-indigo-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-purple-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                                <div class="ring-offset-4 ring-offset-pink-500 ring-black ring-4 bg-black text-white text-center rounded-md p-2 my-6">Elton</div>
                            </div>
                            <div class="text-xs font-mono font-light text-gray-500 mt-4"><span class="font-bold">--tw-ring-offset-color</span>: VARIED</div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">ring-offset-COL</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">COL</b><br />
                                transparent current black white<br />
                                gray red yellow green blue indigo purple pink</div>
                        </div>
                    </li>
                </ul>




                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-offset-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Ring Focus Variants</div>
                • focus:
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <button class="focus:outline-none bg-blue-500 text-white font-bold rounded-md p-2 mr-2">Normal</button>
                            <button class="focus:ring-8 focus:ring-pink-400 bg-blue-500 text-white font-bold rounded-md p-2 my-4">Focus</button>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">:focus</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_02/index.html#ring-focus-variants'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section>
            <ScrollToTopButton />
        </>
    )
}

export default Borders