import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton";
const FontDirectives = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section id="fontdirectives">
                <div className="text-2xl border-t-8 border-b-2 mb-8">Font Family</div>
                • font-sans font-serif font-mono
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-sans font-light text-5xl align-middle mb-2">Font Sans</div>
                            <p className="font-sans text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-sans</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-serif font-light text-5xl align-middle mb-2">Font Serif</div>
                            <p className="font-serif text-md leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-serif</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-mono font-light text-5xl align-middle mb-2">Font Mono</div>
                            <p className="font-mono text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-mono</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/font-family'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Font Size</div>
                • text-SIZ
                <br />
                • SIZ (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl)
                <ul className="container mx-auto pl-2 leading-none divide-y divide-gray-400 divide-dotted font-raleway">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-xs align-middle mb-2">Rex</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 0.75rem; <span className="font-bold">line-height:</span>: 1rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-xs</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-sm align-middle mb-2">Dolores</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 0.875rem; <span className="font-bold">line-height:</span>: 1.25rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-sm</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-base align-middle mb-2">Bubbles</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 1rem; <span className="font-bold">line-height:</span>: 1.5rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-base</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-lg align-middle mb-2">Fred</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 1.125rem; <span className="font-bold">line-height:</span>: 1.75rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-lg</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-xl align-middle mb-2">Rivet</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 1.25rem; <span className="font-bold">line-height:</span>: 1.75rem;</div>
                        </div>
                        <div className="text-xs font-medium font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-2xl align-middle mb-2">Eileen</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 1.5rem; <span className="font-bold">line-height:</span>: 2rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-2xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-3xl align-middle mb-2">Belle</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 1.875rem; <span className="font-bold">line-height:</span>: 2.25rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-3xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-4xl align-middle mb-2">Cosmo</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 2.25rem; <span className="font-bold">line-height:</span>: 2.5rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-4xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-5xl align-middle mb-2">Dolly</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 3rem; <span className="font-bold">line-height:</span>: 1;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-5xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="text-6xl align-middle mb-2">Sergeant</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500"><span className="font-bold">font-size:</span>: 3.75rem; <span className="font-bold">line-height:</span>: 1rem;</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">text-6xl</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/font-size'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Font Weight</div>
                • font-WGT
                <br />
                • WGT (thin, extralight, light, normal, medium, semibold, bold, extrabold, black)
                <ul className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted font-raleway">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-thin text-5xl align-middle mb-2">Rex</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 100</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-thin</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-extralight text-5xl align-middle mb-2">Dolores</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 200</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-extralight</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-light text-5xl align-middle mb-2">Bubbles</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 300</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-light</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-normal text-5xl align-middle mb-2">Fred</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 400</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-normal</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-medium text-5xl align-middle mb-2">Rivet</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 500</div>
                        </div>
                        <div className="text-xs font-medium font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-medium</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-semibold text-5xl align-middle mb-2">Eileen</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 600</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-semibold</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-bold text-5xl align-middle mb-2">Belle</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 700</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-bold</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-extrabold text-5xl align-middle mb-2">Cosmo</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 800</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-extrabold</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-black text-5xl align-middle mb-2">Dolly</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-weight</span>: 900</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">font-black</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/font-weight'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Font Style</div>
                • italic, not-italic
                <ul className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted font-raleway">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="italic font-light text-6xl align-middle mb-2">Eileen</div>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-style</span>: italic</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-italic</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <i className="not-italic block font-light text-6xl align-middle mb-2">Dolores</i>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-style</span>: normal</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">not-italic</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <i className="not-italic text-gray-200 block font-bold font-outline-2 text-6xl align-middle mb-2">Bubbles</i>
                            <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-style</span>: normal whit outline</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">outline</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/font-style'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Font Variant Numeric</div>
                • normal-nums, ordinal, slashed-zero, lining-nums, oldstyle-nums, proportional-nums, tabular-nums, diagonal-fractions, stacked-fractions
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>42nd</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric: </span>: normal</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">normal-nums</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="ordinal font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>42nd</div>
                            <div className="text-xs font-mono text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: ordinal</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">ordinal</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="slashed-zero font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>20,000</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: slashed-zero</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">slashed-zero</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="slashed-zero font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>802,701</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: lining-nums</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-green-500 rounded-2">lining-nums</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="oldstyle-nums font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>299,792,458</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: oldstyle-nums</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-green-500 rounded-2">oldstyle-nums</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="proportional-nums font-sans font-light text-4xl align-middle" style={{ fontFamily: 'Source Sans Pro' }}>01-01-1885</div>
                            <div className="proportional-nums font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>11-12-1955</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: proportional-nums</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-blue-500 rounded-2">proportional-nums</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="tabular-nums font-sans font-light text-4xl align-middle" style={{ fontFamily: 'Source Sans Pro' }}>01-01-1885</div>
                            <div className="tabular-nums font-sans font-light text-4xl align-middle mb-2" style={{ fontFamily: 'Source Sans Pro' }}>11-12-1955</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: tabular-nums</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-blue-500 rounded-2">tabular-nums</div>
                    </li>


                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="diagonal-fractions font-sans font-light  text-4xl align-middle mb-2">1/2</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: diagonal-fractions</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-yellow-400 rounded-2">diagonal-fractions</div>
                    </li>

                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="stacked-fractions font-mono font-light  text-4xl align-middle mb-2" style={{ fontFamily: 'Ubuntu Mono' }}>1/2</div>
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">font-variant-numeric</span>: stacked-fractions</div>
                        </div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-yellow-400 rounded-2">stacked-fractions</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/font-variant-numeric'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default FontDirectives