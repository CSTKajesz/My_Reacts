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
    <div class="filter blur-none bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-none</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-sm bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-sm</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-md bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-md</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-lg bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-lg</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-xl bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-xl</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-2xl bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-2xl</div>
  </li>
  <li class="flex items-center justify-between py-4">
    <div class="filter blur-3xl bg-cover bg-center bg-no-repeat w-32 h-32" style="background-image:url('http://pixelprowess.com/i/swamp_sq.png');"></div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-2 rounded text-white bg-pink-500 rounded-2">blur-3xl</div>
  </li>
</ul>


                <Link to='https://tailwindcss.com/docs/blur'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>

            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Filters