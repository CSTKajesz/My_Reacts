import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopBuuton";

const FloatingAndContainment = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Float</div>
                • float-(DIR)
                <br />
                • none, left, right
                <p className="my-8 border-b-2" >Float lets you control how an image wraps onto text. There are three classes. None, which is</p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted" >
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-none mr-2 w-32 h-32" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                            <p class="mb-2">Obcaecati consequuntur ullam beatae dolor omnis repellat, illo incidunt dolores possimus cumque aut a maxime necessitatibus, exercitationem expedita dolorem. Sed, impedit? Sint rerum quia tenetur dolore. Dolorem cupiditate perferendis consectetur.</p>
                            <p class="mb-2">Maxime a molestiae ut. Repellat voluptatem, laboriosam accusantium minus, expedita eligendi illo sint fuga et enim possimus voluptatibus! Sint, quae tenetur perferendis cupiditate nemo cum dignissimos repellat impedit blanditiis distinctio.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">float-none</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-left mr-2 w-32 h-32" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                            <p class="mb-2">Obcaecati consequuntur ullam beatae dolor omnis repellat, illo incidunt dolores possimus cumque aut a maxime necessitatibus, exercitationem expedita dolorem. Sed, impedit? Sint rerum quia tenetur dolore. Dolorem cupiditate perferendis consectetur.</p>
                            <p class="mb-2">Maxime a molestiae ut. Repellat voluptatem, laboriosam accusantium minus, expedita eligendi illo sint fuga et enim possimus voluptatibus! Sint, quae tenetur perferendis cupiditate nemo cum dignissimos repellat impedit blanditiis distinctio.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">float-left</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-right mr-2 w-32 h-32" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                            <p class="mb-2">Obcaecati consequuntur ullam beatae dolor omnis repellat, illo incidunt dolores possimus cumque aut a maxime necessitatibus, exercitationem expedita dolorem. Sed, impedit? Sint rerum quia tenetur dolore. Dolorem cupiditate perferendis consectetur.</p>
                            <p class="mb-2">Maxime a molestiae ut. Repellat voluptatem, laboriosam accusantium minus, expedita eligendi illo sint fuga et enim possimus voluptatibus! Sint, quae tenetur perferendis cupiditate nemo cum dignissimos repellat impedit blanditiis distinctio.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">float-right</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/float'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Clear</div>

                • clear-(DIR)
                <br />
                DIR (none, left, right, both)
                <p className="my-8 border-b-2">When you use floats in CSS, the clear properties allow you to control how those floats are cleared.

                    In the example you can see two images, both floated around some text.

                    In the clear-left example, you can see that the text unfloats or is cleared underneath the image on the left. With clear-right the text clears on the image to the right. With clear-both it's clearing the right image, but that's because it's the last thing with a float.</p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-left w-16 h-16" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img class="float-right w-32 h-32" src="http://pixelprowess.com/i/ship-red.svg" alt="POW Logo" />
                            <p class="clear-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">clear-none</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-left w-16 h-16" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img class="float-right w-32 h-32" src="http://pixelprowess.com/i/ship-red.svg" alt="POW Logo" />
                            <p class="clear-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">clear-left</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-left w-16 h-16" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img class="float-right w-32 h-32" src="http://pixelprowess.com/i/ship-red.svg" alt="POW Logo" />
                            <p class="clear-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">clear-right</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div>
                            <img class="float-left w-16 h-16" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img class="float-right w-32 h-32" src="http://pixelprowess.com/i/ship-red.svg" alt="POW Logo" />
                            <p class="clear-both">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam ad? In deleniti cum doloribus repellat vero nesciunt accusamus at recusandae praesentium soluta! Magni cumque vitae iusto, est exercitationem dolore.</p>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">clear-both</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/clear'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Object Fit</div>
                • object-(DIR)
                <br />
                DIR (contain, cover, fill, none, scale-down)
                <p className="my-8 border-b-2">Object fit controls how an element is stretched to fit it's container. It's similar to what you'd expect when using background images.

                    In the example, you'll see the same image set to a height of 32 and a full width of the container. Notice how the images differ in size.

                    <code> object-contain</code> resizes an element's content so that it's contained on the area it's in.

                    <code> object-cover</code> tries to fit the content proportionally in the space alloted. I like to use that one when I need to make sure an image fits in a container proportionally.

                    <code> object-fill </code>is similar but it stretches the content to fit. If you don't add anything to an image, this is the default way it will work.

                    <code> object-none</code> fills the container, but doesn't change the size of the image.

                    <code> object-scale-down</code> will try to leave the object at it's original size, but shrinks it down if necessary.</p>

                <div className="container mx-auto">
                    <ul className="sticky top-0 divide-y divide-gray-400 mb-5">
                        <li className="flex items-center justify-between px-4 py-2">
                            <div className="relative w-full bg-pink-500 object-none h-96 w-full">
                                <img className="inset-44 bottom-0 absolute" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            </div>
                            <div className="ml-5 text-right">
                                <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">(-)(SID)(-DIR)(-SIZ)</div>
                                <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">DIR</b><br />x y</div>
                                <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">SIZ</b><br />
                                    0 0.5 1 1.5 2 2.5<br />
                                    3 3.5 4 5 6 7 8 9<br />
                                    10 11 12 14 16 20<br />
                                    24 28 32 36 40 44<br />
                                    48 52 56 60 64 72<br />
                                    80 96<br /><br />

                                    1/2 1/3 2/3 1/4 2/4<br />
                                    3/4 1/5 2/5 3/5 4/5<br />
                                    1/6 2/6 3/6 4/6 5/6<br />
                                    1/12 2/12 3/12 4/12<br />
                                    5/12 6/12 7/12 8/12<br />
                                    9/12 10/12 11/12<br /><br />

                                    auto px full screen</div>
                            </div>
                        </li>
                    </ul>
                </div>


                <Link to='https://tailwindcss.com/docs/object-fit'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Object Position</div>
                • object-(POS)
                <br />
                DIR (left-top, top, right-top, left, center, right, left-bottom, bottom, right-bottom)

                <p className="my-8 border-b-2">Object position controls the position of an item within it's container. It makes sense, but requires some setup.
                    In the example, you'll notice that I've set up a logo with the different directions.
                    However, you might miss that in order to get this to work, you have to set up the object-none class as well in the element, otherwise, the default behavior is for the element to fill the container.
                    Also, I had to give the container a class of full, otherwise, you wouldn't be able to fill the container.</p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-left-top object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-left-top</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-top object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-top</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-right-top object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-right-top</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-left object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-left</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-center object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-center</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-right object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-right</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-left-bottom object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-left-bottom</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-bottom object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-bottom</div>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full">
                            <img class="object-right-bottom object-none h-36 w-full bg-purple-800" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">object-right-bottom</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/object-position'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default FloatingAndContainment