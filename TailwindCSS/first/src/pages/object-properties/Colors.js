import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopBuuton';


const Borders = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Border Width</div>
                • border(-SID)(-AMT)
                <br />
                SID (t, r, b, l)
                <br />
                AMT (0, 2, 4, 8)
                <main class="flex w-screen flex flex-col items-center justify-center">
                    <h1 class="text-4xl mt-3 font-extrabold text-gray-900 tracking-tight text-indigo-500">Tailwind CSS Colors</h1>
                    <p class="my-4 text-center leading-loose">
                        <code class="bg-gray-200 px-3 py-1 rounded-lg">-inherit</code>
                        <code class="bg-gray-200 px-3 py-1 rounded-lg">-current</code>
                        <code class="bg-gray-200 px-3 py-1 rounded-lg">-transparent</code>
                        <code class="bg-gray-200 px-3 py-1 rounded-lg">-black</code>
                        <code class="bg-gray-200 px-3 py-1 rounded-lg">-white</code>
                        <br />as well as the following:
                    </p>
                    <div x-data="{ colors: ['', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']}">
                        <template x-for="color in colors" key={{ "color"}}>
                            <div class="grid grid-rows-10 grid-flow-col items-left">
                                <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-50'">50</div>
                            <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-100'">100</div>
                    <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-200'">200</div>
                <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-300'">300</div>
            <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-400'">400</div >
                <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-500'" > 500</div >
                    <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-600'" > 600</div >
                        <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-700'" > 700</div >
                            <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-800'" > 800</div >
                                <div: class="'h-12 w-24 m-1 flex items-center justify-center rounded-xl bg-' + color + '-900'" > 900</div >
                                    <div class="h-12 w-24 m-1 flex items-center justify-items-start" x-text="'-' + color"></div>
      </div >
    </template >
  </div >
</main >







    <Link to='https://raybo.org/slides_tailwind/notes/slides/03_01/index.html#border-width'>
        <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
    </Link>


            </section >
    <ScrollToTopButton />
        </>
    )
}

export default Borders