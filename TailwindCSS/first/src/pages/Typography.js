import { HashLink as Link } from 'react-router-hash-link';
import FontDirectives from './typography/FontDirectives';
import TextDirectives from './typography/TextDirectives';
import { useState, useEffect } from 'react';
import ListStyles from './typography/ListStyles';
import Spacing from './typography/SpacingTypography';
import { useLocation, useNavigate } from 'react-router-dom';

const Typography = () => {
    const [active, setActive] = useState('font');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'font' ? `#${active}` : '';
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
            setActive('font');
        }
    }, [location]);

    return (
        <>
            <main className='h-screen relative flex flex-row mt-[125px]'>
                <div className='max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col'>
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold text-indigo-300">Typography solutions</h2>
                                <aside className="flex flex-col space-y-1">
                                    <Link
                                        to="#font"
                                        className={`hover:text-black ${active === 'font' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('font')}
                                    >
                                        Font directives
                                    </Link>
                                    <Link
                                        to="#text"
                                        className={`hover:text-black ${active === 'text' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('text')}
                                    >
                                        Text directives
                                    </Link>
                                    <Link
                                        to="#list"
                                        className={`hover:text-black ${active === 'list' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('list')}
                                    >
                                        List styles
                                    </Link>
                                    <Link
                                        to="#spacing"
                                        className={`hover:text-black ${active === 'spacing' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('spacing')}
                                    >
                                        Spacing Typography
                                    </Link>
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='h-screen mt-[125px]'>
                    {active === 'font' && <FontDirectives />}
                    {active === 'text' && <TextDirectives />}
                    {active === 'list' && <ListStyles />}
                    {active === 'spacing' && <Spacing />}
                </div>
            </main>
        </>
    )
}

export default Typography