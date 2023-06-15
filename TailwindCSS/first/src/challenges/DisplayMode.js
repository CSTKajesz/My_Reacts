const Flex = () => {
    return (

        <>
            {/* < !--Example 1 -- > */}
            <div className=" flex justify-center items-center">
                <div className="bg-yellow-600 w-16 h-16">1</div>
                <div className="bg-teal-700 w-16 h-16">2</div>
                <div className="bg-red-700 w-16 h-16">3</div>
            </div>
            {/* <!-- Must take up all of the available space --> */}
            {/* <!-- Evenly distributed 3x3 grid --> */}
            {/* <!-- Letters must be centered on the square --> */}
            {/* <!-- Must have some spacing between the blocks --> */}
            <div class="h-screen flex flex-wrap">
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-100 m-2 w-full flex justify-center items-center">A</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-200 m-2 w-full flex justify-center items-center">B</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-300 m-2 w-full flex justify-center items-center">C</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-400 m-2 w-full flex justify-center items-center">D</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-500 m-2 w-full flex justify-center items-center">E</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-600 m-2 w-full flex justify-center items-center">F</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-700 m-2 w-full flex justify-center items-center">G</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-800 m-2 w-full flex justify-center items-center">H</div>
                </div>
                <div class="flex w-1/3 h-1/3">
                    <div class="bg-teal-900 m-2 w-full flex justify-center items-center">I</div>
                </div>
            </div>

        </>
    )
}
export default Flex