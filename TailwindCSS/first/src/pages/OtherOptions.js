import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormUtilities from './other-options/FormUtilities';
import Tables from './other-options/Tables';
import Svg from './other-options/Svg';
import ScreenReaders from './other-options/ScreenReaders';
import Interactive from './other-options/Interactive';



const OtherOptions = () => {
    const [active, setActive] = useState('form');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'form' ? `#${active}` : '';
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
            setActive('form');
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
                                        to="#form"
                                        className={`hover:text-black ${active === 'form' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('form')}
                                    >
                                        Form Utilities
                                    </Link>
                                    <Link
                                        to="#tables"
                                        className={`hover:text-black ${active === 'tables' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('Tables')}
                                    >
                                        Tables
                                    </Link>
                                    <Link
                                        to="#svg"
                                        className={`hover:text-black ${active === 'svg' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('svg')}
                                    >
                                        SVG
                                    </Link>
                                    <Link
                                        to="#screen-readers"
                                        className={`hover:text-black ${active === 'screen-raders' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('screen-readers')}
                                    >
                                        Screen Readers
                                    </Link>
                                    <Link
                                        to="#interactive"
                                        className={`hover:text-black ${active === 'interactive' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('interactive')}
                                    >
                                        Interactive
                                    </Link>

                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'form' && <FormUtilities />}
                    {active === 'tables' && <Tables />}
                    {active === 'svg' && <Svg />}
                    {active === 'screen-readers' && <ScreenReaders />}
                    {active === 'interactive' && <Interactive />}
                </div>
            </main>
        </>
    );
};

export default OtherOptions