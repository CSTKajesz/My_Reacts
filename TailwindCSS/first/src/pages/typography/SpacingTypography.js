import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton"

const SpacingTypography = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Line Height</div>
                • leading-TYP
                <br />
                TYP (line-height...in rem 3, 4, 5, 6, 7, 8, 9, 10)
                <br />
                TYP (line-height...in relative none, tight, snug, normal, relaxed, loose)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-3 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: .75rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-3</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-4 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-4</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-5 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.25rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-5</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-6 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.5rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-6</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-7 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.75rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-7</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-8 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 2rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-8</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-9 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 2.25rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-9</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-10 text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 2.5rem</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">leading-10</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-none text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-none</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-tight text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.25</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-tight</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-snug text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.375</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-snug</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-normal text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.5</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-normal</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-relaxed text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 1.625</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-relaxed</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="leading-loose text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</p>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">line-height</span>: 2</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-black bg-pink-500 rounded-2">leading-loose</div>
                    </li>

                </ul>

                <Link to='https://tailwindcss.com/docs/line-height'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Letter Spacing</div>
                • tracking-TYP
                <br />
                TYP (letter-spaci ng...in ems tighter, tight, normal, wide, wider, widest)


                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-tighter text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing:</span>: -0.05em</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-tighter</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-tight text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing</span>: -0.025em</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-tight</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-normal text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing:</span>: 0</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-normal</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-wide text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing</span>: 0.025em</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-wide</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-wider text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing</span>: 0.05em</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-wider</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <p className="tracking-widest text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">letter-spacing</span>: 0.1em</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">tracking-widest</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/letter-spacing'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section>
            <ScrollToTopButton />
        </>
    )
}

export default SpacingTypography