import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Borders from './object-properties/Borders';
import Rings from './object-properties/Rings';
import Divide from './object-properties/Divide';
import BoxShadow from './object-properties/BoxShadow';
import Backgrounds from './object-properties/Backgrounds';
import { useLocation, useNavigate } from 'react-router-dom';


const ObjectProperties = () => {
    const [active, setActive] = useState('border');
    const [originalUrl, setOriginalUrl] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };

    useEffect(() => {
        const { pathname } = location;
        const hash = active !== 'border' ? `#${active}` : '';
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
            setActive('border');
        }
    }, [location]);
    return (
        <>
            <main className='h-screen relative flex flex-row mt-[125px]'>
                <div className='max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col'>
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <aside className="flex flex-col space-y-1">
                                    <Link
                                        to="#border"
                                        className={`hover:text-black ${active === 'border' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('border')}
                                    >
                                        Borders
                                    </Link>
                                    <Link
                                        to="#ring"
                                        className={`hover:text-black ${active === 'ring' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('ring')}
                                    >
                                        Rings
                                    </Link>
                                    <Link
                                        to="#divide"
                                        className={`hover:text-black ${active === 'divide' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('divide')}
                                    >
                                        Divide
                                    </Link>
                                    <Link
                                        to="#background"
                                        className={`hover:text-black ${active === 'background' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('background')}
                                    >
                                        Backgrounds
                                    </Link>
                                    <Link
                                        to="#shadow"
                                        className={`hover:text-black ${active === 'shadow' && 'font-bold'}`}
                                        onClick={() => handleMenuItemClick('shadow')}
                                    >
                                        Box Shadow
                                    </Link>
                                    {/* <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('border')}>Borders</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('ring')}>Rings</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('divide')}>Divide</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('background')}>Backgrounds</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('shadow')}>Box Shadow</Link> */}
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='h-screen mt-[125px]'>
                    {active === 'border' && <Borders />}
                    {active === 'ring' && <Rings />}
                    {active === 'divide' && <Divide />}
                    {active === 'background' && <Backgrounds />}
                    {active === 'shadow' && <BoxShadow />}
                </div>
            </main>
        </>
    )
}

export default ObjectProperties