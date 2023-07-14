import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Grids = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Grid Template Columns</div>
                • grid-cols(-AMT)
                <br />
                AMT (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, none)
                <p className="my-8 border-b-2" >
                    You can control up to a 12 columns using grid containers. using grid-cols, you add an amount from 1 to 12 or they keyword none.
                    Remember that you can use these with responsive variants to control how they are displayed depending on the size of the viewport.

                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-rows-3 gap-2">
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">10</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">11</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">12</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">grid-cols-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />1 2 3<br />4 5 6<br />7 8 9<br />10 11 12<br />none</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/grid-template-columns'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Gap</div>
                • gap(-DIR)(-SIZ)
                <br />
                DIR (x, y)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20,
                24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, px)

                <p className="my-8 border-b-2" >
                    Gaps are how you place spacing inside rows and columns and you can specify an optional direction here so you can have a different horizontal and vertical gaps, plus the traditional size scale from 0 to 96, plus px, which is the same as one pixel.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="gap-2 grid-cols-3 grid">
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">gap(-DIR)(-SIZ)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />
                                x y<br />
                                <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />
                                    0 0.5 1 1.5 2<br />
                                    2.5 3 3.5 4 5 6<br />
                                    7 8 9 10 11 12<br />
                                    14 16 20 24 28<br />
                                    32 36 40 44 48 52<br />
                                    56 60 64 72 80 96<br />
                                    px
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/gap'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Template Columns</div>
                • col(-TYP)(-AMT)
                <br />
                TYP (auto, span, start, end)
                <br />
                AMT (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, full)
                <p className="my-8 border-b-2" >
                    When working with columns, you can also control how many columns each element takes.
                    The types can be auto, which lets the browser decide, then span, which lets you spacify a number of columns the element takes up.
                    Start and end are pretty interesting because they let you pick the grid lines where the elements start and ends. Now, the grid lines start at 1 so the numbering is a little weird.
                    Definitely better to look at these in context.
                    In the example, you'll notice that sometimes, you can't use the width of items because it can affect the spanning.
                    Also that when you use end, you have to go one column past where you think you'd go.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="grid grid-cols-4 grid-rows-3 gap-2">
                            <span class="col-span-full h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="col-start-4 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="col-span-2 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="col-span-3 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                            <span class="col-start-1 col-end-4 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">10</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">11</span>
                            <span class="col-span-full h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">12</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">col(-TYP)(-AMT)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">TYP</b><br />auto start<br />end span</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />1 2 3<br />4 5 6<br />7 8 9<br />10 11 12<br />full</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/grid-column'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Template Rows</div>
                • grid-rows(-AMT)
                <br />
                AMT (1, 2, 3, 4, 5, 6, none)
                <p className="my-8 border-b-2" >
                    You can set up your grid so that it lets you control the amount of rows instead of columns, but the setup is a bit different, so the example here will help.

                    In the example, you can see that I've set this up with the grid-flow-col class, so that the columns flow up and down and then use the grid-rows class to control how many columns these display in.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class=" grid-rows-3 grid grid-flow-col gap-2">
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">10</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">11</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">12</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">grid-row-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />1 2 3<br />4 5 6<br />none</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/grid-template-rows'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Row Start/End</div>
                • col(-TYP)(-AMT)
                <br />
                TYP (auto, span, start, end)
                <br />
                AMT (1, 2, 3, 4, 5, 6, 7, full)
                <p className="my-8 border-b-2" >
                    These classes are similar to what we do with rows, but because there are only six columns, there are only seven numbers. Remember that the grid lines start at one and the last one would be seven.
                    In the example just like with rows you can see that sometimes you ahve to turn off the height in this case to properly adjust the spanning.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class=" grid-rows-5 grid grid-flow-col gap-2">
                            <span class="row-span-2 w-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="row-start-2 row-end-5 w-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">10</span>
                            <span class="row-start-5 w-16 bg-purple-500 text-white px-3 py-2 rounded-md">11</span>
                            <span class="row-span-full w-16 bg-yellow-300 text-white px-3 py-2 rounded-md">12</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">row(-TYP)(-AMT)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">TYP</b><br />auto start<br />end span</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />1 2 3<br />4 5 6 7<br />full</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/grid-row'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Auto Flow</div>
                • grid-flow-row, grid-flow-col, grid-flow-row-dense, grid-flow-col-dense
                <br />
                ORD (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, first, last, none)
                <p className="my-8 border-b-2" >
                    There's a few classes that let you change how items are placed on the grid. The key things is that the dense option allows the grid to fit the content.
                    This is just the type of thing that is best seen as an example. Take a look what what's happening here with the fifth element starting at a later space. Using grid-flow-row will leave a hole in the layout, but with the dense option the sixth element will fill the spot.
                    This can help build a better layout.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="grid grid-flow-row-dense grid-cols-4 gap-2">
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">4</span>
                            <span class="col-start-2 col-span-3 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">5</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">6</span>
                            <span class="w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">7</span>
                            <span class="w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">8</span>
                            <span class="w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">9</span>
                            <span class="w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md">10</span>
                            <span class="w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md">11</span>
                            <span class="w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">12</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">grid-flow(-TYP)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">TYP</b><br />row col<br />row-dense col-dense</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/grid-auto-flow'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Auto Columns</div>
                • auto-cols-auto, auto-cols-min, auto-cols-max, auto-cols-fr
                <br />
                ORD (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, first, last, none)
                <p className="my-8 border-b-2" >
                    There's a few classes that let you control what happens when there are too many items for the slots you've specified on a grid.
                    So if say nine items will fit on your specified grid slots, but you have 12, the browser lets you control how those extra items are displayed.
                    This is definitely better with an example, so take a peek.
                    You'll see that I have the aforementioned example where where I have a 3x3 grid where I'm forcing a column flow with grid-flow-col. When I do this, the order of the columns go from top left down.
                    Notice the last column. It's shorter than the other ones. Because it doesn't fit on my speficied grid, it's sized differently.
                    I'm specifying auto-cols-min, so the min is saying to use the smallest piece of content that will fit as the width. In this case, that's the word automation.
                    If I switch this to auto-cols-max, it will try to fit ALL of the content in the box. Switch it to auto-cols-auto and it will let the browser decide, which again, tries to fit everything it can.
                    Finally, if you choose auto-cols-fr, the width will match the width of the other elements.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="auto-cols-min grid-cols-3 grid-rows-3 grid-flow-col grid gap-2">
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>1. Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town.</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>2. Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations.</p>
                            </div>
                            <div class="bg-blue-500 text-white px-3 py-2 rounded-md">
                                <p>3. Bubbles is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s.</p>
                            </div>
                            <div class="bg-indigo-500 text-white px-3 py-2 rounded-md">
                                <p>4. Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants</p>
                            </div>
                            <div class="bg-purple-500 text-white px-3 py-2 rounded-md">
                                <p>5. Rivet descended from an assembly line of amphibious robots, but never quite took to deep water - though he does love rolling around in mucky marshes and soaking up the mud on vacation.</p>
                            </div>
                            <div class="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <p>6. Binaryville's Advanced Robotics Assembly Division has become a highly profitable manufacturer of automation technology under Eileen's watchful managerial eye.</p>
                            </div>
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>7. Belle is a safety inspector at Binaryville, blaring her siren when a concern is discovered</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>8. Cosmo manned the first ever flight to Mars from Binaryville.</p>
                            </div>
                            <div class="bg-purple-500 text-white px-3 py-2 rounded-md">
                                <p>9. Dolly is Binaryville's local fitness guru with the huge "can-do" attitude. </p>
                            </div>
                            <div class="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <p>10. Sergeant is always nearby to lend a helping claw to his fellow factory automation friends</p>
                            </div>
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>11. Oscar lives for watching Bronco’s games and managing their fan club.</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>12. Levi picks out defective parts and sorting them for recycle.</p>
                            </div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">auto-cols(-TYP)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">TYP</b><br />auto min max fr</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/grid-auto-columns'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grid Auto Rows</div>
                • auto-rows-auto, auto-rows-min, auto-rows-max, auto-rows-fr
                <p className="my-8 border-b-2" >
                    Grid Auto Rows is pretty similar to columns, but of course it works with rows instead. If you look at the example though, you'll see that using auto-rows-fr works well, but the other values are pretty similar.
                    That's because the making something the minimum height of an element doesn't make as much sense.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="w-full flex items-center justify-between px-4 py-2">
                        <div class="auto-rows-fr grid-rows-3 grid-cols-3 grid-flow-row grid gap-2">
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>1. Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town.</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>2. Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations.</p>
                            </div>
                            <div class="bg-blue-500 text-white px-3 py-2 rounded-md">
                                <p>3. Bubbles is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s.</p>
                            </div>
                            <div class="bg-indigo-500 text-white px-3 py-2 rounded-md">
                                <p>4. Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants</p>
                            </div>
                            <div class="bg-purple-500 text-white px-3 py-2 rounded-md">
                                <p>5. Rivet descended from an assembly line of amphibious robots, but never quite took to deep water - though he does love rolling around in mucky marshes and soaking up the mud on vacation.</p>
                            </div>
                            <div class="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <p>6. Binaryville's Advanced Robotics Assembly Division has become a highly profitable manufacturer of automation technology under Eileen's watchful managerial eye.</p>
                            </div>
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>7. Belle is a safety inspector at Binaryville, blaring her siren when a concern is discovered</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>8. Cosmo manned the first ever flight to Mars from Binaryville.</p>
                            </div>
                            <div class="bg-purple-500 text-white px-3 py-2 rounded-md">
                                <p>9. Dolly is Binaryville's local fitness guru with the huge "can-do" attitude. </p>
                            </div>
                            <div class="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <p>10. Sergeant is always nearby to lend a helping claw to his fellow factory automation friends</p>
                            </div>
                            <div class="bg-red-500 text-white px-3 py-2 rounded-md">
                                <p>11. Oscar lives for watching Bronco’s games and managing their fan club.</p>
                            </div>
                            <div class="bg-green-500 text-white px-3 py-2 rounded-md">
                                <p>12. Levi picks out defective parts and sorting them for recycle.</p>
                            </div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">auto-rows(-TYP)</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">TYP</b><br />auto min max fr</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/grid-auto-rows'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section>
            <ScrollToTopButton />
        </>
    )
}

export default Grids