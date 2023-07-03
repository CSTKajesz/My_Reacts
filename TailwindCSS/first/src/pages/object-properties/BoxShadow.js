import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopBuuton';


const BoxShadow = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Box Shadow</div>
                • shadow(-AMT)
                <br />
                AMT (none, inner, sm, md, lg, xl, 2xl)
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-none h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-none</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-inner h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-inner</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-sm h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-sm</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-md h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-md</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-lg h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-lg</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-xl h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-xl</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-4">
                        <div className="shadow-2xl h-16 w-full bg-white border border-black rounded-lg"></div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">shadow-2xl</div>
                    </li>
                </ul>


                <Link to='https://raybo.org/slides_tailwind/notes/slides/03_05/index.html#box-shadow'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section>
            <ScrollToTopButton />
        </>
    )
}

export default BoxShadow