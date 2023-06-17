import { Link } from "react-router-dom"
const FontDirectives = () => {
    return (
        <section id="fontdirectives">
            <ul className="container mx-auto divide-y divide-gray-400 divide-dotted font-raleway">
                <li className="flex items-center justify-between px-4 py-2">
                    <div>
                        <div className="font-sans font-light text-5xl align-middle mb-2">Font Sans</div>
                        <p className="font-sans text-md leading-tight">Rex is the Mayor of Binaryville and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
                        <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</div>
                    </div>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-sans</div>
                </li>
                <li className="flex items-center justify-between px-4 py-2">
                    <div>
                        <div className="font-serif font-light text-5xl align-middle mb-2">Font Serif</div>
                        <p className="font-serif text-md leading-tight">Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!</p>
                        <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;</div>
                    </div>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-serif</div>
                </li>
                <li className="flex items-center justify-between px-4 py-2">
                    <div>
                        <div className="font-mono font-light text-5xl align-middle mb-2">Font Mono</div>
                        <p className="font-mono text-md leading-tight">Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that ¬originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.</p>
                        <div className="text-xs font-mono font-light leading-tight text-gray-500 mt-2"><span className="font-bold">font-family</span>: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;</div>
                    </div>
                    <div className="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">font-mono</div>
                </li>
            </ul>
            <Link to='https://raybo.org/slides_tailwind/notes/slides/02_01/index.html#font-family'>
                <button className='text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-indigo-400 rounded-2 my-3'>Descriptions</button>
            </Link>

        </section>
    )
}

export default FontDirectives