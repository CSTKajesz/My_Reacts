const Text = () => {
    return (

        <>
            {/* <!-- Title case heading 1 text in dark gray --> */}
            < h1 className="capitalize text-xl text-gray-900" >
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
        </>
    )
}
export default Text