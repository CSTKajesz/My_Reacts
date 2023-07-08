import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopBuuton";

const WidthAndHeights = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-0 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>0 - 0</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-0.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>0.5 -</span> 1.125 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1 - 1.</span>25 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1.5 -</span> 1.375 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2 - 1.</span>5 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2.5 -</span> 1.625 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3 - 1.</span>75 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3.5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3.5 -</span> 1.875 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4 - 1 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5 - 1.</span>25 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-6 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>6 - 1.</span>5 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-7 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>7 - 1.</span>75 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-8 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>8 - 2 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-9 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>9 - 1.</span>25 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-10 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>10 - 1.</span>5 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-11 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>11 - 1.</span>75 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-12 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>12 - 3 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-14 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>14 - 1.</span>5 rem</div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-16 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>16 - 4 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-20 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>20 - 24 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-24 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>24 - 6 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-28 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>28 - 7 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-32 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>32 - 8 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-36 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>36 - 9 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-40 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>40 - 10 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-44 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>44 - 11 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-48 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>48 - 12 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-52 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>52 - 13 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-56 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>56 - 14 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-60 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>60 - 15 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-64 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>64 - 16 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-72 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>72 - 18 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-80 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>80 - 20 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-96 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>96 - 24 rem</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/2 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/2 - 50%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/3 - 33.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2/3 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/3 - 66.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/4 - 25%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/4 - 50%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3/4 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/4 - 75%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/5 - 20%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/5 - 40%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/5 - 60%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-4/5 h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/5 - 80%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/6 - 16.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/6 - 33.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/6 - 50%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-4/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/6 - 66.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-5/6  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5/6 - 83.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-1/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>1/12 - 8.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-2/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>2/12 - 16.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-3/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>3/12 - 25%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-4/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>4/12 - 33.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-5/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>5/12 - 41.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-6/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>6/12 - 50%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-7/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>7/12 - 58.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-8/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>8/12 - 66.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-9/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>9/12 - 75%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-10/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>10/12 - 83.333333%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-11/12  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>11/12 - 91.666667%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-full  h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <br /><span>full - 100%</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-auto h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>auto - auto</span></div>
                                <div class="whitespace-nowrap flex content-center"><span class="w-px h-5 m-1 text-center inline-block bg-green-200 text-green-900"></span> <span>px - 1 px</span></div>
                                w-screen 100vw, w-min - min-content, w-max - max-content


                            </div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">w-SIZ</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">SIZ</b><br /> 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96<br />1/2 1/3 2/3 1/4 2/4 3/4 1/5 2/5 3/5 4/5 1/6 2/6 3/6 4/6 5/6 1/12 2/12 3/12 4/12 5/12 6/12 7/12 8/12 9/12 10/12 11/12<br />auto px full screen min max
                            </div>
                        </div>
                    </li>

                </ul>

                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_04/index.html#box-decoration-break'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default WidthAndHeights