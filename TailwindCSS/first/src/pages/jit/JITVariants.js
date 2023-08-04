import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const JITVariants = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">Before/After Variants</div>
                • before:
                <br />
                • after:
                <br />

                <p className="my-8 border-b-2" >
                    You now have access to before and after variants within JIT mode only. So example you can go to the emojipedia and add an icon to your page.
                </p>
                <h1 className='before:content-[***]'> About Variants</h1>

                <div className="text-2xl border-t-8 border-b-2 mb-8 mt-20">First Letter/Line</div>

                • first-letter:
                <br />
                • first-line:
                <br />
                <p className="my-8 border-b-2" >
                    You can also use first letter and first line variants, which let you modify some text on your page. For example first-line:text-4xl will make only the first line bigger.
                </p>
                <p class="first-line:uppercase first-line:tracking-widest first-letter:text-[20px] first-letter:font-bold first-letter:text-gray first-letter:mr-3">
                    Well, let me tell you something, funny boy. Y'know that little stamp, the one
                    that says "New York Public Library"? Well that may not mean anything to you,
                    but that means a lot to me. One whole hell of a lot.
                </p>

                <Link to='https://tailwindcss.com/docs/hover-focus-and-other-states#first-line-and-first-letter'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mb-8 mt-20">Selection Variant</div>

                • selection:
                <br />
                <p className="my-8 border-b-2" >
                    You can also change the color of the selected text.
                    <body class="selection:bg-purple-800 selection:text-white"></body>
                </p>
                <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
                    <p>
                        So I started to walk into the water. I won't lie to you boys, I was
                        terrified. But I pressed on, and as I made my way past the breakers
                        a strange calm came over me. I don't know if it was divine intervention
                        or the kinship of all living things but I tell you Jerry at that moment,
                        I <em>was</em> a marine biologist.
                    </p>
                </div>

                <Link to='https://tailwindcss.com/docs/hover-focus-and-other-states'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mb-8 mt-20">Pseudo Classes</div>
                only, first-of-type, last-of-type, only-of-type, target default, indeterminate, placeholder-shown, autofill, required, valid invalid, in-range, out-of-range
                <br />
                <p className="my-8 border-b-2" >
                    JIT now offers additional CSS Pseudo-class support. Here's the full list of additional pseudo-classes you can use with the platform. They correspond to css pseudo-classes.
                </p>


                <Link to='https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section >
            <ScrollToTopButton />
        </>
    )
}

export default JITVariants