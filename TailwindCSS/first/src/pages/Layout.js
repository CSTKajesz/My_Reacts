import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Flexbox from './layout/Flexbox';
import Grids from './layout/Grids';
import BoxAlignment from './layout/BoxAlignment';

const Layout = () => {
    const [active, setActive] = useState('flex');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'flex' ? `#${active}` : '';
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
            setActive('flex');
        }
    }, [location]);

    return (
        <>
            <main className="h-screen relative flex flex-row mt-[125px]">
                <div className="max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col">
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold text-indigo-300">Layout</h2>
                                <aside className="flex flex-col space-y-1">
                                    <Link
                                        to="#flex"
                                        className={`hover:text-black ${active === 'flex' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('flex')}
                                    >
                                        Flexbox
                                    </Link>
                                    <Link
                                        to="#grid"
                                        className={`hover:text-black ${active === 'grid' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('grid')}
                                    >
                                        Grids
                                    </Link>
                                    <Link
                                        to="#alignment"
                                        className={`hover:text-black ${active === 'alignment' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('alignment')}
                                    >
                                        BoxAlignment
                                    </Link>
                                    {/* <Link
                                        to="#float"
                                        className={`hover:text-black ${active === 'float' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('float')}
                                    >
                                        Floating and Containment
                                    </Link> */}
                                    {/* <Link
                                        to="#other"
                                        className={`hover:text-black ${active === 'other' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('other')}
                                    >
                                        Other Properties
                                    </Link> */}
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'flex' && <Flexbox />}
                    {active === 'grid' && <Grids />}
                    {active === 'alignment' && <BoxAlignment />}
                    {/* {active === 'float' && <FloatingAndContainment />} */}
                    {/* {active === 'other' && <OtherProperties />} */}
                </div>
            </main>
        </>
    );
};

export default Layout;
