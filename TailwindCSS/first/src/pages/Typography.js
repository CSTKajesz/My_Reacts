import Dropdown from './../components/Dropdown'
const Typography = () => {
    return (
        <>
            <div className='max-w-[200px] mt-[125px] h-screen text-left flex flex-col'>
                {/* <div className='max-w-[250px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center'> */}
                {/* <Dropdown /> */}
                <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-sm font-semibold text-indigo-300">Typography solutions</h2>
                            <div className="flex flex-col space-y-1">
                                <a className=' hover:text-black' rel="noopener noreferrer" href="#">Font directives</a>
                                <a className=' hover:text-black' rel="noopener noreferrer" href="#">Text directives</a>
                                <a className=' hover:text-black' rel="noopener noreferrer" href="#">List styles</a>
                                <a className=' hover:text-black' rel="noopener noreferrer" href="#">Spacing Typography</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Typography