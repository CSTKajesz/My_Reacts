import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WidthAndHeights from './object-metrics/WidthAndHeight';
import PaddingAndMargin from './object-metrics/PaddingAndMargin';
import DisplayAndPosition from './object-metrics/DisplayAndPosition';
import FloatingAndContainment from './object-metrics/FloatingAndContainment';

const ObjectMetrics = () => {
    const [active, setActive] = useState('width');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'width' ? `#${active}` : '';
        const url = `${pathname}${hash}`;

        if (!originalUrl) {
            setOriginalUrl(url);
        }

        window.history.replaceState(null, null, url);
    }, [active, location, originalUrl]);

    const handleBackButtonClick = () => {
        if (originalUrl) {
            navigate(originalUrl);
        } else {
            navigate(-1);
        }
    };

    useEffect(() => {
        const { hash } = location;
        const activeMenu = hash.slice(1);

        if (activeMenu) {
            setActive(activeMenu);
        } else {
            setActive('width');
        }
    }, [location]);

    return (
        <>
            <main className="h-screen relative flex flex-row mt-[125px]">
                <div className="max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col">
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold text-indigo-300">Object metrics</h2>
                                <aside className="flex flex-col space-y-1">
                                    <Link
                                        to="#width"
                                        className={`hover:text-black ${active === 'width' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('width')}
                                    >
                                        Width and Height
                                    </Link>
                                    <Link
                                        to="#padding"
                                        className={`hover:text-black ${active === 'padding' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('padding')}
                                    >
                                        Padding and Margins
                                    </Link>
                                    <Link
                                        to="#display"
                                        className={`hover:text-black ${active === 'display' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('display')}
                                    >
                                        Display and Position
                                    </Link>
                                    <Link
                                        to="#float"
                                        className={`hover:text-black ${active === 'float' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('float')}
                                    >
                                        Floating and Containment
                                    </Link>
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="h-screen mt-[125px]">
                    {active === 'width' && <WidthAndHeights />}
                    {active === 'padding' && <PaddingAndMargin />}
                    {active === 'display' && <DisplayAndPosition />}
                    {active === 'float' && <FloatingAndContainment />}
                </div>
            </main>
            {!originalUrl && (
                <button onClick={handleBackButtonClick}>Go Back</button>
            )}
        </>
    );
};

export default ObjectMetrics;
