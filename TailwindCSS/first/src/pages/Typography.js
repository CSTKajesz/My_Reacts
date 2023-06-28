import { HashLink as Link } from 'react-router-hash-link';
import FontDirectives from './typography/FontDirectives';
import TextDirectives from './typography/TextDirectives';
import { useState } from 'react';

const Typography = () => {
    const [active, setActive] = useState('font');

    const showFontDirectives = () => {
        setActive('font');
    };

    const showTextDirectives = () => {
        setActive('text');
    };

    return (
        <>
            <main className='h-screen relative flex flex-row mt-[125px]'>
                <div className='max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col'>
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold text-indigo-300">Typography solutions</h2>
                                <aside className="flex flex-col space-y-1">
                                    <Link to="#fontdirectives" smooth className="hover:text-black" onClick={showFontDirectives}>Font directives</Link>
                                    <Link to="#textdirectives" className="hover:text-black" onClick={showTextDirectives}>Text directives</Link>
                                    <Link to="#" className="hover:text-black">List styles</Link>
                                    <Link to="#" className="hover:text-black">Spacing Typography</Link>
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='h-screen mt-[125px]'>
                    {active === 'font' && <FontDirectives />}
                    {active === 'text' && <TextDirectives />}
                </div>
            </main>
        </>
    )
}

export default Typography