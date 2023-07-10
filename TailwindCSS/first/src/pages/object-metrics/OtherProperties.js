import { Link } from "react-router-dom"
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useEffect } from "react";

const OtherProperties = () => {
    const containerStyle = {
        fontFamily: "Raleway",
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const scrollPosition = urlParams.get('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
        }
    }, [window.location.search]);
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Z-Index</div>
                • z-(AMT)
                <br />
                SID (0, 10, 20, 30, 40, 50, auto)
                <p className="my-8 border-b-2" >Content is layered in CSS using a property called the z-index. Tailwind gives you 0 plus 5 other values you can use, plus auto. Remember that you can add your own by modifying the tailwind.config.js file.</p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="w-full position-relative">
                            <div class="z-auto inset-0 absolute w-16 h-16 bg-red-500 text-white px-3 py-2 rounded-md mb-1">1</div>
                            <div class="z-0 inset-4 absolute w-16 h-16 bg-green-500 text-white px-3 py-2 rounded-md mb-1">2</div>
                            <div class="z-10 inset-8 absolute w-16 h-16 bg-blue-500 text-white px-3 py-2 rounded-md mb-1">3</div>
                            <div class="z-20 inset-12 absolute w-16 h-16 bg-indigo-500 text-white px-3 py-2 rounded-md mb-1">4</div>
                            <div class="z-30 inset-16 absolute w-16 h-16 bg-purple-500 text-white px-3 py-2 rounded-md mb-1">5</div>
                            <div class="z-40 inset-20 absolute w-16 h-16 bg-yellow-300 text-white px-3 py-2 rounded-md mb-1">6</div>
                            <div class="z-50 inset-24 absolute w-16 h-16 bg-pink-500 text-white px-3 py-2 rounded-md mb-1">7</div>
                        </div>
                        <div class="ml-5 text-right">
                            <div class="text-xs font-semibold inline-block font-mono whitespace-nowrap px-2 py-1 rounded text-white bg-pink-500 rounded-2">z-AMT</div>
                            <div class="text-xs font-mono text-gray-500"><b class="text-black mt-3 inline-block">AMT</b><br />auto 0 10 20 30 40 50</div>
                        </div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/z-index'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Visibility</div>

                • visible, invisible
                <p className="my-8 border-b-2">
                    A couple of classes to make elements show or hide throught their CSS visibility properties.
                    Remember that these can be used with responsive variants to make things show up or hide at different breakpoints.
                    However, these only hide the elements while leaving their space showing. If you want to completely hide elements, then use the display properties instead.
                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted" >
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="text-left">

                            <h2 class="font-regular text-4xl align-middle mt-3 text-blue-500">Rex</h2>
                            <p class="invisible md:visible text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>

                            <h2 class="font-regular text-4xl align-middle mt-3 text-blue-500">Dolores</h2>
                            <p class="invisible md:visible text-md leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!</p>

                            <h2 class="font-regular text-4xl align-middle mt-3 text-blue-500">Bubbles</h2>
                            <p class="invisible md:visible text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>

                            <h2 class="font-regular text-4xl align-middle mt-3 text-blue-500">Fred</h2>
                            <p class="invisible md:visible text-md leading-tight">Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants. He's been at the forefront of many inventions, but has a special affinity for improving the world through alternative energy and green-living. Fred's engineering collaborations with the City of Binaryville have helped the city reduce its energy consumption year over year, and he's twice been awarded the highly coveted Binaryville Medallion of Honor.</p>

                        </div>
                        <div>
                            <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2 mb-1">visible</div>
                            <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">invisible</div>
                        </div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/visibility'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Opacity</div>
                • opacity-(AMT)
                <br />
                AMT (0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100)
                <p className="my-8 border-b-2">
                    You can apply opacity to any element or to individual items within an element,
                    so for example some items like the background allow you to change the opacity of just the background,
                    but not the rest of the items, that's pretty powerful, but there is an overall opacity value as well.
                </p>

                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-0 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-0</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-5 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-5</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-10 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-10</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-20 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600 flex justify-center items-center text-xl font-bold"><div>Elton</div></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-20</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-25 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-25</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-30 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-30</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-40 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-40</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-50 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-50</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-60 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-60</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-70 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-70</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-75 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-75</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-80 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-80</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-90 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-90</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-95 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-95</div>
                    </li>
                    <li class="flex items-center justify-between px-4 py-2">
                        <div class="opacity-100 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">Elton</div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">opacity-100</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/opacity'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>


            </section >
            <ScrollToTopButton />
        </>
    )
}

export default OtherProperties