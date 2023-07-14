import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Transformations from './animations/Transformations';
import Transistions from './animations/Transistions';

const Animation = () => {
    const [active, setActive] = useState('transform');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'transform' ? `#${active}` : '';
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
            setActive('transform');
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
                                        to="#transform"
                                        className={`hover:text-black ${active === 'transform' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('transform')}
                                    >
                                        Transformations
                                    </Link>
                                    <Link
                                        to="#transitions"
                                        className={`hover:text-black ${active === 'transitions' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('transitions')}
                                    >
                                        Transitions
                                    </Link>
                                    {/* <Link
                                        to="#alignment"
                                        className={`hover:text-black ${active === 'alignment' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('alignment')}
                                    >
                                        BoxAlignment
                                    </Link> */}

                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'transform' && <Transformations />}
                    {active === 'transitions' && <Transistions />}
                    {/* {active === 'alignment' && <BoxAlignment />} */}
                </div>
            </main>
        </>
    );
};

export default Animation;
