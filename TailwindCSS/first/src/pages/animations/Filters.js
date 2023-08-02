import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Filters = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Toggle Classes
                </div>
                • filter, filter-none
                <p className="my-8 border-b-2" >
                    To start using filters, you normally use two tags to toggle their effect. By themselves these classes don't do anything, so let's take a look at the different options available for filters.

                </p>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Blur</div>
                • blur(-AMT)
                <br />
                AMT (none, sm, *, md, lg, xl, 2xl, 3xl)
                <p className="my-8 border-b-2" >
                    The blur filter gets an amount. You can use it without an amount and that would really be between the small and medium amount. I feel like the blur classes are a little agressive in terms of the strengths of the blurs though.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-none bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-none</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-sm bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-sm</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-md bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-md</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-lg bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-lg</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-xl bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-xl</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-2xl bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-2xl</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter blur-3xl bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-3xl</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/blur'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Drop Shadow</div>
                • drop-shadow(-AMT)
                <br />
                AMT (sm, *, md, lg, xl, 2xl, 3xl, none)
                <p className="my-8 border-b-2" >
                    You can add the dropshadow filter with different amounts. If you don't add an amount, it will do a drop shadow between sm and medium.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-none bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-none</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-sm bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-sm</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-md bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-md</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-lg bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-lg</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-xl bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-xl</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter drop-shadow-2xl bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">drop-shadow-2xl</div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/drop-shadow'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Brightness</div>
                • brightness(-AMT)
                <br />
                AMT (0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200)
                <p className="my-8 border-b-2" >
                    The brightness filter lets you apply brightness to some content.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-50 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-50</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-75 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-75</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-100 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-100</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-125 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-125</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-150 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-150</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter brightness-200 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">brightness-200</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/brightness'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Contrast</div>
                • contrast(-AMT)
                <br />
                AMT (0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200)
                <p className="my-8 border-b-2" >
                    Then there's a way to adjust the contrast of an image with an amount from 0 to 200 which really pushes the contrast of an image.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-50 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-50</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-75 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-75</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-100 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-100</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-125 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-125</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-150 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-150</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter contrast-200 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">contrast-200</div>
                    </li>
                </ul>


                <Link to='https://tailwindcss.com/docs/contrast'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Saturate</div>
                • saturate-(AMT)
                <br />
                AMT (0, 50, 100, 150, 200)
                <p className="my-8 border-b-2" >
                    Saturate modify how strong an image colors look. There's just a few amounts to worry about.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter saturate-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">saturate-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter saturate-50 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">saturate-50</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter saturate-100 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">saturate-100</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter saturate-150 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">saturate-150</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter saturate-200 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">saturate-200</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/saturate'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Hue Rotate</div>
                • (-)hue-rotate-(AMT)
                <br />
                AMT (0, 15, 30, 60, 90, 180)
                <p className="my-8 border-b-2" >
                    The hue-rotate filter lets you rotate the colors in an image 360 degrees.
                    To use it you specify an amount that goes from -180 to 180. The rotation is about a 30 degree offset, but there are some numbers clearly missing here after 90 degrees.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter -hue-rotate-180 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">-hue-rotate-180</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter -hue-rotate-90 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">-hue-rotate-90</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter -hue-rotate-60 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">-hue-rotate-60</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter -hue-rotate-30 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">-hue-rotate-30</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter -hue-rotate-15 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">-hue-rotate-15</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-15 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-15</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-30 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-30</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-60 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-60</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-90 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-90</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter hue-rotate-180 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/powship.svg')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">hue-rotate-180</div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/hue-rotate'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Grayscale</div>
                • grayscale
                • grayscale-0
                <p className="my-8 border-b-2" >
                    The grayscale filter is one of the simplest filters and simply takes a color image and converts it to grayscale.
                    There's a reset option to toggle the image back to full color.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter grayscale-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">grayscale-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter grayscale bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">grayscale</div>
                    </li></ul>



                <Link to='https://tailwindcss.com/docs/grayscale'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Invert</div>
                • invert
                • invert-0
                <p className="my-8 border-b-2" >
                    The invert filter flips the colors in an image with their oposite color. There's just two options, one to invert and one to reset.

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter invert-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">invert-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter invert bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">invert</div>
                    </li>
                </ul>
                <Link to='https://tailwindcss.com/docs/invert'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mt-20 mb-8">Sepia</div>
                • sepia
                • sepia-0
                <p className="my-8 border-b-2" >
                    Sepia gives photo a duotone sort of style that looks pretty cool. It has a simple toggle style where you apply the filter with the sepia keyword and reset it with sepia-0

                </p>
                <ul class="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li class="flex items-center justify-between py-4">
                        <div class="filter sepia-0 bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">sepia-0</div>
                    </li>
                    <li class="flex items-center justify-between py-4">
                        <div class="filter sepia bg-cover bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url('http://pixelprowess.com/i/swamp_sq.png')" }}></div>
                        <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">sepia</div>
                    </li>
                </ul>



                <Link to='https://tailwindcss.com/docs/sepia'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Filters