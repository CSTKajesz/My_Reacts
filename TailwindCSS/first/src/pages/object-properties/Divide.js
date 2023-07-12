import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Divide = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Divide Width</div>
                • divide(-DIR)(-AMT)
                <br />
                SID (x, yellow)
                <br />
                AMT (0, 2, 4, 8, reverse)
                <p className="my-8 border-b-2" >

                </p>

                <ul className="container mx-auto">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-y-2">
                                <div className="text-center py-3">Fred</div>
                                <div className="text-center py-3">Rivet</div>
                                <div className="text-center py-3">Eileen</div>
                                <div className="text-center py-3">Belle</div>
                                <div className="text-center py-3">Cosmo</div>
                                <div className="text-center py-3">Dolly</div>
                            </div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-4"><span className="font-bold">border</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">divide-(DIR)(-STR)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />x y</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STR</b><br />0 2 4 8 reverse</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/divide-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Divide Opacity</div>
                • Divide-opacity-AMT
                <br />
                AMT (0, 5, 10, 20 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <p className="my-8 border-b-2" >

                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-0 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-0</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-5 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-5</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-10 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-10</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-20 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-20</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-25 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-25</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-30 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-30</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-40 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-40</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-50 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-50</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-60 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-60</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-70 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-70</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-75 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-75</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-80 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-80</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-90 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-90</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-95 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">divide-opacity-95</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="divide-opacity-100 divide-x-4 divide-red-500">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">divide-opacity-100</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/divide-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Divide Color</div>
                • divide-COL-STR
                <p className="my-8 border-b-2" >

                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between pl-4 py-2">
                        <div>
                            <div className="divide-gray-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-red-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-yellow-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-green-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-blue-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-indigo-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-purple-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-pink-500 py-3 divide-x-4">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">divide-COL-STR</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">COL</b><br />transparent current black<br />white gray red<br />yellow green blue<br />indigo purple pink</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STR</b><br />100 200 300<br />400 500 600<br />700 800 900</div>
                        </div>
                    </li>
                </ul>
                <div className="container mx-auto">
                </div>


                <Link to='https://tailwindcss.com/docs/divide-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Divide Style</div>
                • divide-(STL)
                <br />
                STL (none, solid, dashed, dotted, double)
                <p className="my-8 border-b-2" >

                </p>

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between pl-4 py-2">
                        <div>
                            <div className="divide-solid divide-x-4 divide-indigo-600 py-3">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-dashed divide-x-4 divide-indigo-600 py-3">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-dotted divide-x-4 divide-indigo-600 py-3">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-double divide-x-4 divide-indigo-600 py-3">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                            <div className="divide-none divide-x-4 divide-indigo-600 py-3">
                                <span className="text-center px-3">Fred</span>
                                <span className="text-center px-3">Rivet</span>
                                <span className="text-center px-3">Eileen</span>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-600 rounded-2">divide-STYL</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STYL</b><br />solid dashed dotted double none</div>
                        </div>
                    </li>
                </ul>
                <div className="container mx-auto">
                </div>



                <Link to='https://tailwindcss.com/docs/divide-style'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section>
            <ScrollToTopButton />
        </>
    )
}

export default Divide