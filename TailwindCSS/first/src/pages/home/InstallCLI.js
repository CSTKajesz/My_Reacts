import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const InstallCLI = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Installation with CLI</div>

                <p className="my-8 border-b-2" >
                    The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">1</div>
                        npm install -D tailwindcss
                        <br />
                        npx tailwindcss init
                        <div className="select-auto text-md">Install tailwindcss via npm, and create your tailwind.config.js file.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Install Tailwind CSS</div>
                        <div className='relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10'></div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/installation'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />

        </>
    )
}

export default InstallCLI