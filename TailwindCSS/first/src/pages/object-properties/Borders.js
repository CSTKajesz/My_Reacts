import { HashLink as Link } from 'react-router-hash-link';
// import ScrollToTop from '../../components/ScrollToTop'
import { AiOutlineToTop } from 'react-icons/ai';


const Borders = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Border Width</div>
                • border(-SID)(-AMT)
                <br />
                SID (t, r, b, l)
                <br />
                AMT (0, 2, 4, 8)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="border-0 border-red-500 font-bold text-red-500 rounded-md p-2 my-2 text-center">Rivet</div>
                            <div className="border-2 border-red-500 font-bold text-red-500 rounded-md p-2 my-2 text-center">Rivet</div>
                            <div className="border-4 border-red-500 font-bold text-red-500 rounded-md p-2 my-2 text-center">Rivet</div>
                            <div className="border-8 border-red-500 font-bold text-red-500 rounded-md p-2 my-2 text-center">Rivet</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-SID-AMT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SID</b><br />t r b l</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />0 2 4 8</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides//03_01/index.html#border-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Border Opacity</div>
                • border-opacity-AMT
                <br />
                AMT (0, 5, 10, 20 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)


                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div className="border-opacity-0 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-5 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-10 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-20 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-25 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-30 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-40 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-50 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-60 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-70 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-75 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-80 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-90 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-95 border-4 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                            <div className="border-opacity-100 border-4 0 border-purple-500 font-bold text-purple-500 rounded-md p-2 my-1 text-center">Rivet</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-opacity-AMT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />0 5 10 20 25 30 40 50 60 70 75 80 90 95 100</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_01/index.html#border-opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Border Color</div>
                • border-COL-STR
                <ul className="container mx-auto" >
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div>
                                <div className="border-gray-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-red-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-yellow-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-green-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-blue-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-indigo-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-purple-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                                <div className="border-pink-500 border-4 text-center rounded-md p-2 my-4">Belle</div>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-COL-STR</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">COL</b><br />transparent current black white<br />gray red yellow green blue indigo purple pink</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STR</b><br />100 200 300 400 500 600 700 800 900</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_01/index.html#border-color'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Border Radius</div>
                • rounded-(SID)(-AMT)
                <br />
                COL(t, tl, r, tr, b, br, l, bl)
                <br />
                AMT (none, full, sm, md, lg, xl, 2xl, 3xl)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="rounded-none border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-sm border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-md border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-lg border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-xl border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-2xl border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet</div>
                            <div className="rounded-3xl border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet<br />the Robot</div>
                            <div className="rounded-full border-2 border-red-500 font-bold text-red-500 p-2 my-2 text-center">Rivet<br />the Robot</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">border-radius</span>: rem</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">rounded(-SID)(-AMT)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SID</b><br />t tl r tr b br l bl</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />(.25) none-0  full-&infin;<br />sm-.125 md-.375 lg-.5<br />xl-.75 2xl-1 3xl-1.5</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_01/index.html#border-radius'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Border Style</div>
                • border-(STL)
                <br />
                STL(none, solid, dashed, dotted, double)

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="border-none rounded-lg border-2 border-blue-500 font-bold text-blue-500 p-2 my-2 text-center">Dolores</div>
                            <div className="border-solid rounded-lg border-2 border-blue-500 font-bold text-blue-500 p-2 my-2 text-center">Dolores</div>
                            <div className="border-dashed rounded-lg border-2 border-blue-500 font-bold text-blue-500 p-2 my-2 text-center">Dolores</div>
                            <div className="border-dotted rounded-lg border-2 border-blue-500 font-bold text-blue-500 p-2 my-2 text-center">Dolores</div>
                            <div className="border-double rounded-lg border-4 border-blue-500 font-bold text-blue-500 p-2 my-2 text-center">Dolores</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">border-style</span></div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-(STL)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STL</b><br />none solid dashed dotted double</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_01/index.html#border-style'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section>

        </>
    )
}

export default Borders