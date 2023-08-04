import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Svg = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Stroke
                </div>
                • stroke-current
                <p className="my-8 border-b-2" >
                    There's a special className that you can use with SVGs that lets you control the color of the sroke called stroke-current.
                    When you apply it to an SVG element, it sets the color of that item to whatever the current color is.
                    That means that if you apply a text-color to the item using the text-color utilities., you can easily modify the color of the SVG.
                    The SVG really has to be specially prepared for this so that i's composed mostly of stroke items. You can also use some of the Tailwind classNamees to control the elements.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full bg-green-100 h-64 flex justify-center items-center">
                            <svg className="stroke-current text-purple-600 h-24" x="0px" y="0px" viewBox="0 0 160.3 114.1" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M81.1,30.7c0,4.4-3.9,8.1-8.8,8.1s-8.8-3.7-8.8-8.1s3.9-8.1,8.8-8.1C77.2,22.5,81.1,26.1,81.1,30.7z" />
                                <path d="M48.5,38.3C50.7,18.3,64,5.2,80.1,5.2c16.2,0,29.5,13.2,31.8,33.3" />
                                <polyline points="49.5,93.6 46.2,108.9 51.2,108.9 58.5,94.9 " />
                                <polyline points="100,94.9 107.3,108.9 112.2,108.9 109,93.7 " />
                                <ellipse cx="80.1" cy="65.9" rx="67.3" ry="24.2" />
                                <ellipse cx="31.6" cy="66.4" rx="5.5" ry="5.1" />
                                <ellipse cx="44.8" cy="70.3" rx="5.5" ry="5.1" />
                                <ellipse cx="58.9" cy="73" rx="5.5" ry="5.1" />
                                <ellipse cx="73.5" cy="74.2" rx="5.5" ry="5.1" />
                                <ellipse cx="88.3" cy="74.2" rx="5.5" ry="5.1" />
                                <ellipse cx="101.8" cy="73.1" rx="5.5" ry="5.1" />
                                <ellipse cx="116" cy="70.7" rx="5.5" ry="5.1" />
                                <ellipse cx="129.5" cy="67.2" rx="5.5" ry="5.1" />
                            </svg>
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">stroke-current</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/stroke'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Fill</div>
                • fill-current
                <p className="my-8 border-b-2" >
                    Like with stroke, fill-current lets you quickly modify an existing svg's image color by using the current color. You can still use the text-color utilities, although it seems sort of weird to switch fills and strokes with text clases.
                    It's better if the SVG is specially prepared for this purpose as I've done here. So I closed up the outline of the cabin at the top and made the holes compound objects in Illustrator.
                    Remember that the responsive classNamees work here as well, so changing the color on hover is easy.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full bg-yellow-200 h-64 flex justify-center items-center">
                            <svg className="fill-current text-red-600 hover:text-purple-500 h-24" x="0px" y="0px" viewBox="0 0 160.3 114.1" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M80.1,6.3c-16.1,0-29.4,14-31.6,34c0,0,9.3-3.3,30.8-3.3s32.6,3.5,32.6,3.5C109.6,20.4,96.3,6.3,80.1,6.3z M72.3,33.1c-4.9,0-8.8-3.7-8.8-8.1c0-4.4,3.9-8.1,8.8-8.1c4.9-0.1,8.8,3.5,8.8,8.1C81.1,29.4,77.2,33.1,72.3,33.1z" />
                                <polygon points="49.5,91.4 46.2,108.9 51.2,108.9 58.5,92.7 " />
                                <polygon points="100,92.7 107.3,108.9 112.2,108.9 109,91.5 " />
                                <path d="M80.1,41.7c-37.2,0-67.3,10.8-67.3,24.2s30.1,24.2,67.3,24.2c37.2,0,67.3-10.8,67.3-24.2S117.3,41.7,80.1,41.7z M31.6,71.5c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1S34.6,71.5,31.6,71.5z M44.8,75.4c-3,0-5.5-2.3-5.5-5.1 s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1S47.8,75.4,44.8,75.4z M58.9,78.1c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1 S61.9,78.1,58.9,78.1z M73.5,79.3c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1S76.5,79.3,73.5,79.3z M88.3,79.3 c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1S91.3,79.3,88.3,79.3z M101.8,78.2c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1 c3,0,5.5,2.3,5.5,5.1S104.8,78.2,101.8,78.2z M116,75.8c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1 S119,75.8,116,75.8z M129.5,72.3c-3,0-5.5-2.3-5.5-5.1s2.5-5.1,5.5-5.1c3,0,5.5,2.3,5.5,5.1S132.5,72.3,129.5,72.3z" />
                            </svg>
                        </div>
                        <div className="ml-5 text-right w-32">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">fill-current</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/fill'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Svg