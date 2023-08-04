import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton"

const ListStyles = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">List Style Type</div>
                • list-TYP
                <br />
                TYP (none, disc, decimal)
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="font-light text-3xl align-middle mb-2">Favorite Rivets</div>
                            <ul class="list-none">
                                <li>Buck rivets</li>
                                <li>Olympic rivets</li>
                                <li>Pop rivets</li>
                            </ul>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">list-style-type</span>: none;</div>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">list-none</div>
                    </li>

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="font-light text-3xl align-middle mb-2">Favorite Rivets</div>
                            <ul class="list-disc">
                                <li>Buck rivets</li>
                                <li>Olympic rivets</li>
                                <li>Pop rivets</li>
                            </ul>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">list-style-type</span>: disc;</div>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">list-disc</div>
                    </li>

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="font-light text-3xl align-middle mb-2">Favorite Rivets</div>
                            <ul class="list-decimal">
                                <li>Buck rivets</li>
                                <li>Olympic rivets</li>
                                <li>Pop rivets</li>
                            </ul>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">list-style-type</span>: decimal;</div>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">list-decimal</div>
                    </li>

                </ul>

                <Link to='https://tailwindcss.com/docs/list-style-type'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">List Style Position</div>
                • list-TYP
                <br />
                TYP (inside, outside)


                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="font-light text-3xl align-middle mb-2">Favorite Rivets</div>
                            <ul class="list-outside list-disc">
                                <li>Buck rivets</li>
                                <li>Olympic rivets</li>
                                <li>Pop rivets</li>
                            </ul>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">list-style-position</span>: outside;</div>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">list-outside</div>
                    </li>

                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="antialiased">
                            <div class="font-light text-3xl align-middle mb-2">Favorite Rivets</div>
                            <ul class="list-inside list-disc">
                                <li>Buck rivets</li>
                                <li>Olympic rivets</li>
                                <li>Pop rivets</li>
                            </ul>
                            <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">list-style-position</span>: inside;</div>
                        </div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">list-inside</div>
                    </li>

                </ul>

                <Link to='https://tailwindcss.com/docs/list-style-position'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>



            </section>
            <ScrollToTopButton />
        </>
    )
}

export default ListStyles