import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Welcome from './home/Welcome';
import InstallCLI from './home/InstallCLI';
import UsingPostCSS from './home/UsingPostCSS';

const HomePage = () => {
    const [active, setActive] = useState('welcome');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };


    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'welcome' ? `#${active}` : '';
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
            setActive('welcome');
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
                                        to="#welcome"
                                        className={`hover:text-black ${active === 'welcome' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('welcome')}
                                    >
                                        Welcome
                                    </Link>
                                    <Link
                                        to="#cli"
                                        className={`hover:text-black ${active === 'cli' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('cli')}
                                    >
                                        Install with CLI
                                    </Link>
                                    <Link
                                        to="#post"
                                        className={`hover:text-black ${active === 'post' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('post')}
                                    >
                                        Using Post CSS
                                    </Link>

                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'welcome' && <Welcome />}
                    {active === 'cli' && <InstallCLI />}
                    {active === 'post' && <UsingPostCSS />}

                </div>
            </main>
        </>
    );
};

export default HomePage