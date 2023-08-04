import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Jit = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">JIT Advantages</div>
                • Small files
                <br />
                • Arbitrary values
                <br />
                • Variants enabled/stackable
                <br />
                <p className="my-8 border-b-2" >
                    In Just in Time mode, the main advantage is that it generates files that are based only on the existing classes on your projects, so the files will be much smaller.
                    Also, all variants will automatically be enabled. That means you won't have to modify the config file to turn them on.
                    Another HUGE advantage is that you can use any value you want, not just the ones available as official classes. Keep that in mind when looking through the rest of this course.
                </p>

                <Link to='https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mb-8 mt-20">Arbitrary Values</div>
                /* color */
                <br />
                bg-[#f5e6c0]

                <br />
                /* width */
                <br />
                w-[150px]
                <br />
                <p className="my-8 border-b-2" >
                    Another cool feature is that you can now specify custom values.
                    Although you can still use any of the built in values I'll be showing you in this course, the arbitrary values are super powerful since it creates only the styles for those.
                </p>

                <Link to='https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Jit