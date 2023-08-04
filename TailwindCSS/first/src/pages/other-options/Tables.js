import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Tables = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Table Layout
                </div>
                • table-auto, table-fixed
                <p className="my-8 border-b-2" >
                    These first group of classNamees let you control wether the browser decides to auto-size your table with table-auto or if you want all cells to be the exact same size with table-fixed.
                    You can see by my example that you style tables with the same set of classNamees that you use for everything else.
                    table-auto is also the default, so you don't have to add it, but it's good if you need to programmatically reset the border.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full">
                            <table className="table-auto text-sm w-full">
                                <thead>
                                    <tr className="bg-purple-800 text-white">
                                        <th className="px-1">Product</th>
                                        <th className="px-1">Description</th>
                                        <th className="px-1">Size</th>
                                        <th className="px-1">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-dotted divide-purple-500">
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">T-shirt</th>
                                        <td className="px-1 text-xs py-2">Our t-shirts are made from ringspun, long-staple organic cotton that's ethically-sourced from member farms of local organic cotton cooperatives.</td>
                                        <td className="px-1 text-xs py-2">S-M-L-XL-XXL</td>
                                        <td className="px-1 text-xs py-2">$26</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">Baseball Hat</th>
                                        <td className="px-1 text-xs py-2">Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill.</td>
                                        <td className="px-1 text-xs py-2">One size fits most</td>
                                        <td className="px-1 text-xs py-2">$29</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">Apron</th>
                                        <td className="px-1 text-xs py-2">Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester.</td>
                                        <td className="px-1 text-xs py-2">24" wide x 30" long</td>
                                        <td className="px-1 text-xs py-2">$24</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">table-auto</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full">
                            <table className="table-fixed text-sm w-full">
                                <thead>
                                    <tr className="bg-purple-800 text-white">
                                        <th className="px-1">Product</th>
                                        <th className="px-1">Description</th>
                                        <th className="px-1">Size</th>
                                        <th className="px-1">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-dotted divide-purple-500">
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">T-shirt</th>
                                        <td className="px-1 text-xs py-2">Our t-shirts are made from ringspun, long-staple organic cotton that's ethically-sourced from member farms of local organic cotton cooperatives.</td>
                                        <td className="px-1 text-xs py-2">S-M-L-XL-XXL</td>
                                        <td className="px-1 text-xs py-2">$26</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">Baseball Hat</th>
                                        <td className="px-1 text-xs py-2">Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill.</td>
                                        <td className="px-1 text-xs py-2">One size fits most</td>
                                        <td className="px-1 text-xs py-2">$29</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 text-xs py-2 text-purple-700">Apron</th>
                                        <td className="px-1 text-xs py-2">Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester.</td>
                                        <td className="px-1 text-xs py-2">24" wide x 30" long</td>
                                        <td className="px-1 text-xs py-2">$24</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">table-fixed</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/table-layout'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Border Collapse</div>
                • border-collapse, border-separate
                <p className="my-8 border-b-2" >
                    These first group of classNamees let you control wether the browser decides to auto-size your table with table-auto or if you want all cells to be the exact same size with table-fixed.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full">
                            <table className="border-collapse text-sm w-full">
                                <thead>
                                    <tr className="bg-purple-800 text-white">
                                        <th className="px-1 border-2 border-purple-500">Product</th>
                                        <th className="px-1 border-2 border-purple-500">Description</th>
                                        <th className="px-1 border-2 border-purple-500">Size</th>
                                        <th className="px-1 border-2 border-purple-500">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-dotted divide-purple-500">
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">T-shirt</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Our t-shirts are made from ringspun, long-staple organic cotton that's ethically-sourced from member farms of local organic cotton cooperatives.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">S-M-L-XL-XXL</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$26</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">Baseball Hat</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">One size fits most</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$29</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">Apron</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">24" wide x 30" long</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$24</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-collapse</div>
                        </div>
                    </li>
                    <li className="w-full flex items-center px-4 py-2">
                        <div className="w-full">
                            <table className="border-separate border border-purple-600 text-sm w-full">
                                <thead>
                                    <tr className="bg-purple-800 text-white">
                                        <th className="px-1 border-2 border-purple-500">Product</th>
                                        <th className="px-1 border-2 border-purple-500">Description</th>
                                        <th className="px-1 border-2 border-purple-500">Size</th>
                                        <th className="px-1 border-2 border-purple-500">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">T-shirt</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Our t-shirts are made from ringspun, long-staple organic cotton that's ethically-sourced from member farms of local organic cotton cooperatives.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">S-M-L-XL-XXL</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$26</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">Baseball Hat</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">One size fits most</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$29</td>
                                    </tr>
                                    <tr>
                                        <th className="px-1 border-2 border-purple-500 text-xs py-2 text-purple-700">Apron</th>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester.</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">24" wide x 30" long</td>
                                        <td className="px-1 border-2 border-purple-500 text-xs py-2">$24</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ml-5 text-right w-1/3">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">border-separate</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/border-collapse'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Tables