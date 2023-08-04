import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const FormUtilities = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Placeholder Colors
                </div>
                • placeholder-COL-STR
                <p className="my-8 border-b-2" >
                    Shockingly enough, there's only two className groups related to input fields. Everything else is handled through the rest of Tailwind classNamees, which is really different from something like Bootstrap.
                    If we take a look at the example, you can see that the opacity is separate from the input group opacity. Also, take a look at the code and you can see how I've made pretty good looking input fields by just adding some margin and padding classNamees.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <input className="placeholder-gray-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-red-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-yellow-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-green-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-blue-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-pink-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">color</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">placeholder-COL-STR</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">COL</b><br />gray red yellow green blue purple pink</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">STR</b><br />100 200 300 400 500 600 700 800 900</div>
                        </div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Placeholder Opacity</div>
                • placeholder-opacity-AMT
                <br />
                AMT (0, 5, 10, 20, 5, 30, 40, 50, 60, 70, 750, 80, 90, 95, 100)
                <p className="my-8 border-b-2" >
                    The other className group is related to opacity and just like with regular text opacity you can see that the numbers are not a pure decimal distribution but have more stops at the beginning and at the end.
                    Again, this allows you to modify the opacity of just the text and not the entire element by using a css variable.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted" >

                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="antialiased">
                            <input className="placeholder-opacity-0 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-5 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-10 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-20 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-25 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-30 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-40 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-50 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-60 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-70 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-75 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-80 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-90 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-95 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <input className="placeholder-opacity-100 placeholder-purple-500 border rounded-md p-2 my-1" placeholder="eileen@binaryville.com" />
                            <div className="text-xs font-mono font-light text-gray-500 mt-2"><span className="font-bold">--tw-placeholder-opacity</span>: VARIED</div>
                        </div>
                        <div className="ml-5 text-right">
                            <div className="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">placeholder-opacity-AMT</div>
                            <div className="text-xs font-mono text-gray-500"><b className="text-black mt-3 inline-block">AMT</b><br />0 5 10 20 25 30 40 50 60 70 75 80 90 95 100</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default FormUtilities