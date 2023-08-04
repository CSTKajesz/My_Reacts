import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormUtilities from './other-options/FormUtilities';
import Tables from './other-options/Tables';



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
                                    {/*<Link
                                        to="#animation"
                                        className={`hover:text-black ${active === 'animation' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('animation')}
                                    >
                                        Animations
                                    </Link>
                                    <Link
                                        to="#filter"
                                        className={`hover:text-black ${active === 'filter' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('filter')}
                                    >
                                        Filter
                                    </Link>
                                    <Link
                                        to="#mixing"
                                        className={`hover:text-black ${active === 'mixign' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('mixign')}
                                    >
                                        Mixing Utilities
                                    </Link> */}

                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'form' && <FormUtilities />}
                    {active === 'tables' && <Tables />}
                    {/*{active === 'animation' && <Animations />}
                    {active === 'filter' && <Filters />}
                    {active === 'mixing' && <MixingUtilities />} */}
                </div>
            </main>
        </>
    );
};

export default OtherOptions