import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Divide = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Flex Direction</div>
                • flex(-TYP)(-DIR)
                <br />
                TYP (rol, col)
                <br />
                DIR (reverse)
                <p className="my-8 border-b-2" >
                    You can control the direction that flexbox operates in a few different ways. In addition to adding a flex class, you can add a direction type with a direction option.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-row w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-row</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-row-reverse w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-row-reverse</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-col w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-col</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-col-reverse w-full">
                            <span class="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-col-reverse</span>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/flex-direction'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Flex Wrap</div>
                • flex-wrap, flex-wrap-reverse, flex-nowrap
                <p className="my-8 border-b-2" >
                    You can tell an item to wrap to a next line or not with these classes. The default is for items not to wrap, but you can also have them wrap in reverse.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-wrap w-full">
                            <span class="inline w-32 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-32 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-32 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-32 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-wrap</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full flex-row-reverse">
                            <span class="inline w-32 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-32 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-32 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-32 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-row-reverse</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full flex-col-reverse">
                            <span class="inline w-32 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-32 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-32 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-32 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-col-reverse</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex flex-nowrap w-full">
                            <span class="inline w-32 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="inline w-32 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-32 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="inline w-32 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-nowrap</span>
                        </div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/flex-wrap'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Flex</div>
                • flex-1, flex-auto, flex-initial, flex-none
                <p className="my-8 border-b-2" >
                    Flex elements can grown and shrink, so there's a set of classes that let you control that.

                    <code> flex-1 </code>lets an item grow and shrink as needed, but ignores the original size.

                    <code> flex-auto </code>lets an item grow and shrink as needed, taking into account the original size.

                    <code> flex-initial</code> lets an item shrink, but not grow.

                    <code> flex-none</code> prevents an item from growing or shrinking.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-initial inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-initial inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-initial inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-initial</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-initial inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-1 inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-initial inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-1</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-initial inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-auto inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-initial inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-auto</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-1 inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-none inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-1 inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-none</span>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/flex'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Flex Grow</div>
                • flex-grow-0, flex-grow
                <p className="my-8 border-b-2" >
                    There's a couple of tags that you can also use to control wether an item grows to fit space as well,
                    but it's a bit different than the previous items.
                    <code> flex-grow</code> lets an item grow to fit the available space.
                    <code> flex-grow-0</code> prevents and item from growning.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-grow inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-grow</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-grow inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-grow-0 inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-grow inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-grow-0</span>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/flex-grow'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Flex Shrink</div>
                • flex-shrink-0, flex-shrink
                <p className="my-8 border-b-2" >
                    Like grow, the shrink classes control how an element shrinks.

                    <code> flex-shrink-0</code> prevents an item from shrinking

                    <code> flex-shrink </code>allows an item to shrink if needed.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-grow inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-shrink inline w-64 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-grow inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-shrink</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="flex-grow inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="flex-shrink-0 inline w-64 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="flex-grow inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                        </div>
                        <div class="ml-5 text-right">
                            <span class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex-shrink-0</span>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/flex-shrink'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Order</div>
                • order (-ORD)
                <br />
                ORD (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, first, last, none)
                <p className="my-8 border-b-2" >
                    Order lets you control the order that the items in a container appear in. You can assign more than one item the same order and they sort of work like layers, keeping items with the same order together.
                    There's a couple of named classes. first attempts to put an item first and has precendence over the other numbers. last does the same thing for the end. None is like a special order of zero.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="flex w-full">
                            <span class="order-2 inline w-24 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span class="order-2 inline w-24 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span class="order-2 inline w-24 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span class="order-1 inline w-24 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">z-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />1 2 3 4 5<br />6 7 8 9 10<br />11 12<br />
                                first last none</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/order'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section>
            <ScrollToTopButton />
        </>
    )
}

export default Divide