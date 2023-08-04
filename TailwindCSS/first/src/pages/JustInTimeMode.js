import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WorkingWithJIT from './jit/WorkingWithJIT'
import JITVariants from './jit/JITVariants';

const JustInTimeMode = () => {
    const [active, setActive] = useState('jit');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'jit' ? `#${active}` : '';
        const url = `${pathname}${hash}`;

        if (!originalUrl) {
            setOriginalUrl(url);
        }

        window.history.replaceState(null, null, url);
    }, [active, location, originalUrl]);

    useEffect(() => {
        const { hash } = location;
        const activeMenu = hash.slice(1);

        if (activeMenu) {
            setActive(activeMenu);
        } else {
            setActive('jit');
        }
    }, [location]);

    return (
        <>
            <main className="h-screen relative flex flex-row mt-[125px]">
                <div className="max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col">
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <aside className="flex flex-col space-y-1">
                                    <Link
                                        to="#jit"
                                        className={`hover:text-black ${active === 'jit' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('jit')}
                                    >
                                        Working with JIT
                                    </Link>
                                    <Link
                                        to="#jitvariants"
                                        className={`hover:text-black ${active === 'jitvariants' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('jitvariants')}
                                    >
                                        JIT Variants
                                    </Link>

                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'jit' && <WorkingWithJIT />}
                    {active === 'jitvariants' && <JITVariants />}
                </div>
            </main>
        </>
    );
};

export default JustInTimeMode