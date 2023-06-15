const Buttons = () => {
    return (

        <>

            {/* <!-- blue background, rounded, thick left border --> */}
            <div>
                <button className="m-4 bg-blue-800 py-2 px-4 text-gray-400 text-sm rounded-lg border-l-8 border-blue-700">
                    Submit
                </button>
            </div>

            {/* <!-- Red text, outlined --> */}
            <div>
                <button className="m-4 border-2 border-red-500 text-red-500 rounded px-3">
                    Cancel
                </button>
            </div>

            {/* <!-- light Indigo background, bottom border, indigo text --> */}
            <div>
                <button className="m-4 bg-indigo-200 border-b-4 border-t-4 border-indigo-800 px-4 py-1">
                    Save
                </button>
            </div>

            {/* <!-- Thick rounded, lots of padding, large button --> */}
            <div>
                <button className="m-4 rounded-full border-4 px-16 py-3 uppercase font-bold text-sm bg-orange-600 border-orange-800">
                    Buy Now
                </button>
            </div>

            {/* <!-- Outlined, serif font, uppercase, rounded --> */}
            <div>
                <button className="m-4 border font-serif text-xs uppercase rounded-lg p-2">Send Postcard</button>
            </div>
        </>
    )
}
export default Buttons