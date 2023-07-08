import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopBuuton";

const WidthAndHeights = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Width</div>
                • h-(SIZ)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,<br />1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6, 1/12, 2/12, 3/12, 4/12, 5/12, 6/12, 7/12, 8/12, 9/12, 10/12, 11/12)
                <br /> (auto, px, full, screen, min, max)

                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-0 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>0 - 0</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-0.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>0.5 -</span> 1.125 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1 - 1.</span>25 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1.5 -</span> 1.375 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2 - 1.</span>5 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2.5 -</span> 1.625 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3 - 1.</span>75 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3.5 -</span> 1.875 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4 - 1 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5 - 1.</span>25 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-6 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>6 - 1.</span>5 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-7 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>7 - 1.</span>75 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-8 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>8 - 2 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-9 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>9 - 1.</span>25 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-10 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>10 - 1.</span>5 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-11 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>11 - 1.</span>75 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-12 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>12 - 3 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-14 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>14 - 1.</span>5 rem</div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-16 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>16 - 4 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-20 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>20 - 24 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-24 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>24 - 6 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-28 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>28 - 7 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-32 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>32 - 8 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-36 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>36 - 9 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-40 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>40 - 10 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-44 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>44 - 11 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-48 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>48 - 12 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-52 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>52 - 13 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-56 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>56 - 14 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-60 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>60 - 15 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-64 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>64 - 16 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-72 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>72 - 18 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-80 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>80 - 20 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-96 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>96 - 24 rem</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/2 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/2 - 50%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/3 - 33.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2/3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/3 - 66.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/4 - 25%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/4 - 50%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/4 - 75%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/5 - 20%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/5 - 40%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/5 - 60%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-4/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/5 - 80%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/6 - 16.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/6 - 33.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/6 - 50%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-4/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/6 - 66.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-5/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5/6 - 83.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-1/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/12 - 8.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-2/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/12 - 16.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-3/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/12 - 25%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-4/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/12 - 33.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-5/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5/12 - 41.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-6/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>6/12 - 50%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-7/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>7/12 - 58.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-8/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>8/12 - 66.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-9/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>9/12 - 75%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-10/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>10/12 - 83.333333%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-11/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>11/12 - 91.666667%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-full  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <br /><span>full - 100%</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-auto h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>auto - auto</span></div>
                                <div className="whitespace-nowrap flex content-center"><span className="w-px h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>px - 1 px</span></div>
                                w-screen 100vw, w-min - min-content, w-max - max-content


                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">w-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br /> 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96<br />1/2 1/3 2/3 1/4 2/4 3/4 1/5 2/5 3/5 4/5 1/6 2/6 3/6 4/6 5/6 1/12 2/12 3/12 4/12 5/12 6/12 7/12 8/12 9/12 10/12 11/12<br />auto px full screen min max
                            </div>
                        </div>
                    </li>

                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Height</div>
                • h-(SIZ)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
                <br />1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6, 1/12, 2/12, 3/12, 4/12, 5/12, 6/12, 7/12, 8/12, 9/12, 10/12, 11/12)
                <br /> (auto, px, full, screen)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div>
                                <div className="h-screen flex content-center">
                                    <span className="h-96 w-full p-10 m-1 text-center inline-block bg-yellow-200 text-yellow-900 overflow-hidden">
                                        <div className="font-light text-5xl align-middle mb-2">Rex</div>
                                        <p className="text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">h-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br /> 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96<br />1/2 1/3 2/3 1/4 2/4 3/4 1/5 2/5 3/5 4/5 1/6 2/6 3/6 4/6 5/6 1/12 2/12 3/12 4/12 5/12 6/12 7/12 8/12 9/12 10/12 11/12<br />auto px full screen min max
                            </div>
                        </div>
                    </li>

                </ul>
                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#height'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Min Width</div>
                • min-w-(SIZ)
                <br />
                SIZ (0, full, min, max)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li >
                        <div className="antialiased">
                            <div>
                                <span className="w-10 min-w-min p-10 text-center inline-block bg-yellow-200 text-yellow-900">
                                    <div className="font-light text-5xl align-middle mb-2">Rex</div>
                                    <p className="text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 p-10">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">min-w-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br /> 0 full min max
                            </div>
                        </div>
                    </li>

                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#min-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Max Width</div>
                • max-w-(SIZ)
                <br />
                SIZ (0, none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full, min, max, prose,
                screen-sm, screen-md, screen-lg, screen-xl, screen-2xl)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li >
                        <div className="antialiased">
                            <div>
                                <span className="max-w-prose p-10 text-center inline-block bg-yellow-200 text-yellow-900">
                                    <div className="font-light text-5xl align-middle mb-2">Rex</div>
                                    <p className="text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 p-10">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">max-w-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b> - max-width<br /><br />
                                0 - 0,
                                none - none<br /><br />
                                REMs:
                                xs - 20rem, sm - 24rem, md - 28rem, lg - 32rem, xl - 36rem, 2xl - 42rem, 3xl - 48rem, 4xl - 56rem, 5xl - 64rem, 6xl - 72rem, 7xl - 80rem,
                                <br /><br />
                                CONTENT: full - 100%, min - min-content, max - max-content, prose - 65ch
                                <br /><br />
                                SCREEN: screen-sm - 640px, screen-md - 768px, screen-lg - 1024px, screen-xl - 1280px, screen-2xl - 1536px
                            </div>
                        </div>
                    </li>

                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#max-width'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Min Height</div>
                • min-h-(SIZ)
                <br />
                SIZ (0, full, screen)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div>
                                <div className="flex content-center">
                                    <span className="min-h-full w-full p-10 m-1 text-center inline-block bg-yellow-200 text-yellow-900 overflow-hidden">
                                        <div className="font-light text-5xl align-middle mb-2">Rex</div>
                                        <p className="text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">min-h-(SIZ)</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b> min-height<br /> 0-0, full-100%, screen-100vh
                            </div>
                        </div>
                    </li>

                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#min-height'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Max Height</div>
                • max-h-(SIZ)
                <br />
                SIZ (0, none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full, min, max, prose,
                screen-sm, screen-md, screen-lg, screen-xl, screen-2xl)
                <ul className="container mx-auto">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <div className="flex content-center">
                                <span className="max-h-80 overflow-y-auto w-full p-10 m-1 inline-block bg-yellow-200 text-yellow-900" >
                                    <div className="font-light text-6xl align-middle mb-2">The Robot Roundup Vintage Camper Rally Winds Down</div>
                                    <div className="font-light text-2xl align-middle mb-2">Over 280 Caravans and Campers Gather and Glamp from All Corners of the Country</div>
                                    <p className="text-md leading-tight"></p>
                                    <p className="mt-3 font-bold text-red-700 text-2xl"><b>Q:</b> Why did the robot go camping?</p>
                                    <p className="font-medium text-red-900 text-2xl"><b>A:</b> He needed to recharge his batteries.</p>

                                    <p className="mt-4 mb-3">Chipper and cheery jokes, stories, and songs filled the air this week at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke doesn’t qualify as the funniest, it’s the first joke I heard when I walked up to the Rally’s first bonfire of the week, and was far from being the last.</p>

                                    <p className="mb-3">There were serious topics on the table, too, such as the ethical dilemma of integrating robotics into a vintage camper rebuild in order to better control interior climate and overall power usage. Purists argued that doing things “the old-fashioned human way” was the only proper way to camp, and claimed that those who “destroy” the authentic-ness of a vintage camper are meanies. It was later unanimously decided that no robot in attendance—no matter what their vintage camper preference was—wanted to be a meanie. The purists reluctantly agreed with the renovators that they were “free spirited artists” and stated that there is enough room on the planet for whatever a person wants to do to their camper.</p>

                                    <p className="mb-3">A growing number of robots were interested in being on the road full-time. Social media influencers Plam and Plotter, co-stars of the Travel-Worn Robots  TubeYou channel, shared their experience and tips to transitioning to life on the road. After the session, participants were asked to raise a limb to show how many of them were interested in living full-time in their camper, and nearly all said they would love to be full-timers at least part of the time.</p>

                                    <p className="mb-3">In short, the 4th Annual Robot Roundup Vintage Camper Rally has been an event to write home about. In fact, I wrote several postcards to my family every day—including one that featured my favorite joke of the rally:</p>

                                    <p className="mt-3 font-bold text-red-700 text-2xl"><b>Q:</b> What did the beaver say to the tree?</p>
                                    <p><b>A:</b> It’s been nice gnawing you!</p>
                                </span>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">max-h-SIZ</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b> - max-width<br /><br />
                                0-0, px-1px, full-100%, screen-100vh<br /><br />
                                REMs:
                                0.5-0.125, 1-0.25, 1.5-0.375, 2-0.5, 2.5-0.625, 3-0.75, 3.5-0.875, 4-1, 5-1.25, 6-1.5, 7-1.75, 8-2, 9-2.25, 10-2.5, 11-2.75, 12-3, 14-3.5, 16-4, 20-5, 24-6, 28-7, 32-8, 36-9, 40-10, 44-11, 48-12, 52-13, 56-14, 60-15, 64-16, 72-18, 80-20, 96-24
                                <br /><br />
                            </div>
                        </div>
                    </li>

                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/04_01/index.html#max-height'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default WidthAndHeights