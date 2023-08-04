import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTopButton from '../../components/ScrollToTopButton';


const Interactive = () => {
    return (
        <>
            <section>
                <div className="text-2xl border-t-8 border-b-2 mb-8">User Select</div>
                • select(-TYP)
                <br />
                TYP (auto, text, none, all)
                <p className="my-8 border-b-2" >
                    Technically this next feature is under interactivity in the Tailwind manual, but I think it belongs here. It allows you to conrol how the user can select some text inside an element.
                    The default and reset is auto, which defaults to the typical browser behavior of letting you select some text. Nex is text, which technically does the same thing, but you're explicitly saying that you want the user to be able to select text regardless of previous defaults.
                    Then there are two interesting ones. none prevents users from selecting text in an element and all makes the entire contents of the element selectable with a single click.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="select-auto text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">select-auto</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="select-text text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">select-text</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="select-all text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">select-all</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="select-none text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">select-none</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/user-select'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
                <div className="text-2xl border-t-8 border-b-2 mb-8 mt-20">Cursor</div>
                • cursor(-TYP)
                <br />
                TYP (auto, default, pointer, wait, text, move, not-allowed)
                <p className="my-8 border-b-2" >
                    This would normally be under the interactivity section, but I'm going to cover it here. These options lets you control what cursor you have when you're over an element.
                    Auto lets the browser take control of what the cursor does. While default is pretty similar, it changes the cursor to use the default cursor for the platform, which normally is a cursor.
                    The rest of them changes the cursor to look like different things. pointer changes the mouse to a pointer, wait a watch or hourglass. text changes it to the input tool and move changes it to the move pointer and finally not-allowed shows the icon for non-interaction.
                </p>
                <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-auto text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-auto</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-default text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-default</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-pointer text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-pointer</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-wait text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-wait</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-text text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-text</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-move text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-move</div>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                        <div className="cursor-not-allowed text-md">Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered.</div>
                        <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">cursor-not-allowed</div>
                    </li>
                </ul>

                <Link to='https://tailwindcss.com/docs/cursor'>
                    <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
                </Link>
            </section >
            <ScrollToTopButton />
        </>
    )
}

export default Interactive