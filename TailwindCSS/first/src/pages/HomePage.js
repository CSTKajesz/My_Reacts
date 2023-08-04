import { HashLink as Link } from 'react-router-hash-link';

const HomePage = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Get started with Tailwind CSS</div>

                <p className="my-8 border-b-2" >
                    Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
                    It's fast, flexible, and reliable — with zero-runtime.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">1</div>
                        npm install -D tailwindcss
                        <br />
                        npx tailwindcss init
                        <div className="select-auto text-md">Install tailwindcss via npm, and create your tailwind.config.js file.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Install Tailwind CSS</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">2</div>
                        <div className="select-auto text-md">Add the paths to all of your template files in your tailwind.config.js file.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Configure your template paths</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">3</div>
                        <div className="select-auto text-md">Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Add the Tailwind directives to your CSS</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">4</div>
                        <div className="select-auto text-md">Run the CLI tool to scan your template files for classes and build your CSS.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Start the Tailwind CLI build process</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">5</div>
                        <div className="select-auto text-md">Add your compiled CSS file to the head and start using <br />Tailwind’s utility classes to style your content.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">Start using Tailwind in your HTML</div>
                    </li>

                </ul>

                <Link to='https://tailwindcss.com/docs/installation'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >

        </>
    )
}

export default HomePage