import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton";

const DisplayAndPosition = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Display</div>
                • block, inline-block, inline
                <br />
                • flex, inline-flex
                <br />
                • flow-root, grid, inline-grid, contents, hidden
                <br />
                • table, inline-table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row-group, table-row
                <br />
                • list-item, flow-root, grid, inline-grid, contents, hidden
                <p className="my-8 border-b-2" >
                    Let's talk about the display property. It's one of the richest and part of every element in HTML.
                    These classes allow you to modify the display property so that any element doesn't have to use it's standard display properties and can take on any other type of display properties in CSS.
                    Let's take a look at our example though.
                    We have the block, inline an inline-block classes. Block is meant for large areas of content and each block section appears on a new line.
                    Inline isn't allowed a width or heights.
                    When you choose the inline-block, you have an inline that can take width and heights. Unless there is no spacing between tags, there will be spacing between inline-block items.
                    There are a number of classes related to different parts of table elements. That lets any element emulate a table's properties. You'll probably never use this one, but you can take a look at the example.
                    There's support for the two newer layout types. Flex and grid. More on those later.
                    There's a couple of interesting ones that you might not have used before. Flow root is the Tailwind equivalent of the clearfix and is meant to clear floated elements.
                    Contents is super interesting in tha it creates a phantom piece of content that can act as it's own element.
                    Finally hidden is mean or hiding certain elements.
                </p>


                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <span className="block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span className="block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span className="block w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span className="block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">block</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <span className="inline-block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span className="inline-block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span className="inline-block w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span className="inline-block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-block</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <span className="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span className="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span className="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span className="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div>
                            <div className="table w-full">
                                <div className="table-row-group">
                                    <div className="table-row">
                                        <div className="table-cell w-16 h-16 bg-red-500 text-white bg-red-500 text-white p-2">1</div>
                                        <div className="table-cell w-16 h-16 bg-red-500 text-white bg-green-500 text-white p-2">2</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell w-16 h-16 bg-red-500 text-white bg-blue-500 text-white p-2">3</div>
                                        <div className="table-cell w-16 h-16 bg-red-500 text-white bg-yellow-300 text-white p-2">4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 text-right">
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 mr-1">table</span><span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">inline-table</span><br />
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-row</span>
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-cell</span>
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-caption</span><br />
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-column</span>
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-column-group</span><br />
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-header-group</span>
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-row-group</span><br />
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1 text-xs">table-footer-group</span>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <span className="list-item w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span className="list-item w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span className="list-item w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span className="list-item w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">list-item</div>
                        </div>
                    </li>  <li className="flex items-center justify-between px-4 py-2">
                        <div className="flex w-full">
                            <span className="inline w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mr-1 mb-1">1</span>
                            <span className="inline w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mr-1 mb-1">2</span>
                            <span className="inline w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mr-1 mb-1">3</span>
                            <span className="inline w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mr-1 mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">flex</span>
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-flex</span>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="grid grid-cols-2 gap-1">
                            <span className="flex-1 w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">1</span>
                            <span className="flex-1 w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">2</span>
                            <span className="flex-1 w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">3</span>
                            <span className="flex-1 w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2 mb-1">grid</span><br />
                            <span className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">inline-grid</span>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <span className="flow-root">

                            <img className="float-left" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img className="float-left" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                            <img className="float-left" src="http://pixelprowess.com/i/powship.svg" alt="POW Logo" />
                        </span>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">flow-root</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full inline-block">
                            <span className="inline-block w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <div className="contents grid grid-cols-2 gap-1 inline-block">
                                <span className="flex-1 w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md">2</span>
                                <span className="flex-1 w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md">3</span>
                                <span className="flex-1 w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md">4</span>
                                <span className="flex-1 w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md">5</span>
                            </div>
                            <span className="inline-block w-16 h-16 bg-pink-500 text-white px-3 py-2 rounded-md mb-1">6</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">contents</div>
                        </div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="w-full">
                            <span className="inline-block w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</span>
                            <span className="inline-block w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</span>
                            <span className="hidden w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</span>
                            <span className="inline-block w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">4</span>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">hidden</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/display'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Position</div>
                • static, fixed, absolute, relative, sticky
                <p className="my-8 border-b-2" >
                    Position matches the css positioning atribute
                    static is the default and means that the element is positioned where it would normally go in the page. Static will also ignore offsets.
                    Relative means that the element is placed relative to where it would normally go, but you can use offsets to move the element by a certain amounts.
                    Absolute positions an element outside the normal flow as if it didn't exist. Offsets happen from the nearest parent that has a position other than static.
                    Fixed means that it is positioned relative to the viewport. Normally the browser window.
                    Sticky is one of the newer attributes and means that the element is positioned as relative until it crosses a certain point.
                </p>
                <div className="container mx-auto">
                    <p className="mb-5">Quaerat corrupti voluptatem reiciendis commodi dolores quod alias obcaecati dolore impedit hic libero, voluptatum ducimus sit! Nam autem dolore, quos consectetur, neque saepe ipsam, at dolorum veritatis praesentium nisi delectus?</p>
                    <ul className="sticky top-0 divide-y divide-gray-400 mb-5">
                        <li className="flex items-center justify-between px-4 py-2">
                            <div className="relative w-full bg-green-600 object-none h-32 w-full">
                                <img className="absolute right-0 bottom-0" src="http://pixelprowess.com/i/powship.svg" alt="POW Ship" />
                            </div>
                            <div className="ml-5 text-right">
                                <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">position-TYP</div>
                                <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">TYP</b><br />static<br />fixed<br />absolute<br />relative<br />sticky</div>
                            </div>
                        </li>
                    </ul>
                    <p className="mb-5">Dolorum soluta reprehenderit molestias doloremque quos atque ut exercitationem sequi praesentium vero assumenda nisi facilis in, veritatis itaque, tenetur ad non, earum animi. Incidunt, eius laudantium earum minus molestiae dolores.</p>
                    <p className="mb-5">Libero placeat sequi at assumenda iste maiores magni possimus, eveniet eius deserunt, dicta velit reiciendis dolore! Aspernatur maxime ad consequatur eos natus sapiente assumenda ducimus, culpa perferendis magni porro vero?</p>
                    <p className="mb-5">Labore exercitationem facere unde voluptatem inventore rerum! Rerum nesciunt fugiat soluta eum minus nam, repudiandae reiciendis totam, alias sint accusamus illo non doloribus iste mollitia porro impedit? Debitis, fugiat laborum.</p>
                    <p className="mb-5">Iusto error ratione, repudiandae sequi velit beatae? Sint exercitationem adipisci, labore ipsam iusto maxime excepturi illo repudiandae nemo ipsa, praesentium laudantium, harum rem facilis! Ad consectetur voluptatem saepe! Nostrum, nihil?</p>
                    <p className="mb-5">Omnis sequi illum enim autem consequuntur, nihil neque mollitia molestias exercitationem architecto eum qui debitis aliquam sit laborum dolorem? Possimus perferendis officiis quo magni accusamus cupiditate beatae at aliquid a!</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae quaerat provident aut iusto facilis minima. Eligendi obcaecati dolorum enim delectus eius ea ad ipsam, architecto, autem, officiis sint eum!</p>
                    <p className="mb-5">Modi dicta consequatur odit, ut perferendis voluptatum nam obcaecati fugiat velit at! Quos praesentium sit modi eligendi sapiente delectus, repudiandae corporis voluptates neque? Rem voluptatum ducimus eaque possimus necessitatibus veniam.</p>
                    <p className="mb-5">Illum nemo rerum provident cumque adipisci neque ad consequuntur omnis magnam quasi asperiores porro animi veniam, enim rem esse sapiente officia quas perferendis temporibus! Molestiae tempore consectetur nam tempora fugiat.</p>
                    <p className="mb-5">Quas eveniet perspiciatis incidunt ducimus dignissimos cumque atque est! Dicta maxime quidem porro quo itaque atque, iste natus quos eaque doloremque, ad mollitia voluptas accusamus voluptatem vitae assumenda facilis repellat?</p>
                    <p className="mb-5">Reprehenderit a ipsa temporibus delectus consequuntur quidem harum debitis. Non laudantium tenetur eveniet rem ipsa molestiae. Provident, laudantium eos? Quasi inventore sunt adipisci fugit aliquam soluta, sint eos labore harum?</p>
                    <p className="mb-5">Eaque deleniti unde non sit quo consectetur, odit eum mollitia qui accusamus quae consequuntur neque molestias impedit facere harum laboriosam hic nam consequatur. Blanditiis vitae, ad ex doloribus error esse!</p>
                    <p className="mb-5">Fugiat accusamus animi doloribus vero provident iusto, consectetur cumque dicta aliquid sequi earum non ut at consequatur, facere aspernatur natus magnam fuga perspiciatis quae velit ea deleniti. Facere, quibusdam sequi!</p>
                    <p className="mb-5">Et, nesciunt. Architecto quisquam alias iste nesciunt, nisi asperiores eius officiis et optio dolore, veritatis saepe mollitia quidem laudantium rem est sequi aperiam magnam reiciendis tenetur. Quo a similique dolor.</p>
                    <p className="mb-5">Deserunt deleniti veniam quod omnis dignissimos consequuntur ratione ab, exercitationem molestias veritatis, fuga impedit repellat quia magni id, libero officiis non illum dolores similique facilis illo. Tempore exercitationem saepe temporibus?</p>
                    <p className="mb-5">Ex, beatae distinctio culpa autem libero reprehenderit obcaecati corrupti minima voluptatem mollitia exercitationem temporibus odio ad possimus vitae nesciunt, voluptas quam nemo provident, eligendi architecto recusandae necessitatibus quisquam accusantium! Numquam!</p>
                </div>

                <Link to='https://tailwindcss.com/docs/position'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Top Right Bottom Left</div>
                • (-)(SID)(-DIR)(-SIZ)
                <br />
                SID (inset, top, right, bottom, left)
                <br />
                DIR (x, y)
                <br />
                SIZ (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
                <br />1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6, 1/12, 2/12, 3/12, 4/12, 5/12, 6/12, 7/12, 8/12, 9/12, 10/12, 11/12)
                <br />auto, px, full
                <p className="my-8 border-b-2" >
                    These directions allow you to position elements in almost any way you want. There is a large range of directions and positions you can use.
                    inset affects both sides. Also, the numbered sizes are sized relative to the root em, which is normally 16 pixels. A size of 4 in these sizes is 1 rem.
                    px means a single pixel, while the keyword full means 100% and auto means the browser decides.
                </p>
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


                <Link to='https://tailwindcss.com/docs/top-right-bottom-left'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default DisplayAndPosition