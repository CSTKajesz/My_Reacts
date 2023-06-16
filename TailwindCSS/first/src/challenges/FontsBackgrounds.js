const Text = () => {
    return (

        <>
            {/* <!-- Title case heading 1 text in dark gray --> */}
            < h1 className="capitalize text-xl text-gray-900" >
                Lorem ipsum dolor sit amet consectetur.
            </h1 >
            {/* <!-- Title text opacity csak akkor lehet text opat változtatni ha adunk színt a textnek lehet opacityt állítani és akkor a hátteret is átlátszóvá teszi--> */}
            < h1 className="capitalize text-xl text-white bg-indigo-900 text-opacity-40" >
                Lorem ipsum dolor sit amet consectetur.
            </h1 >

            {/* <!-- Change to poppins font, with a primary color --> */}
            < h1 className="text-xl text-primary-800 font-poppins" >
                Lorem ipsum dolor sit amet consectetur.
            </h1 >

            {/* <!-- Paragraph styling with 1.5 line heights & letter spacing --> */}
            < p className='mt-3 leading-loose tracking-wide' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam suscipit orci ac nisl varius varius.Nullam auctor finibus pulvinar.Morbi porttitor placerat enim nec consequat.
            </p >

            {/* <!-- Treated like a quote with a background and plenty of padding. Italic title --> */}
            < div className='m-2 p-6 bg-blue-900 text-blue-200' >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
                </p>
                <p className='mt-3 text-gray-400'>- CSTKlara,
                    <span className='italic'>developer</span>
                </p>
            </div >

            {/* <!-- Call to action button, blue with good padding and uppercase --> */}
            < button className='uppercase bg-blue-500 test-blue-100 px-4 py-3' >
                Enroll Now
            </button >

            {/* text owerflow használata */}
            <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                <li className="flex items-center justify-between px-4 py-2">
                    <p className="truncate w-96 bg-yellow-200 text-md p-4">Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants. He's been at the forefront of many inventions, but has a special affinity for improving the world through alternative energy and green-living. Fred's engineering collaborations with the City of Binaryville have helped the city reduce its energy consumption year over year, and he's twice been awarded the highly coveted Binaryville Medallion of Honor.</p>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">truncate</div>
                </li>

                <li className="flex items-center justify-between px-4 py-2">
                    <p className="overflow-ellipsis overflow-hidden w-96 p-4 bg-yellow-200 text-md">
                        Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</p>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">overflow-ellipsis</div>
                </li>

                <li className="flex items-center justify-between px-4 py-2">
                    <p className="overflow-clip overflow-hidden w-96 p-4 bg-yellow-200 text-md">
                        Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</p>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">overflow-clip</div>
                </li>
            </ul>
        </>
    )
}
export default Text