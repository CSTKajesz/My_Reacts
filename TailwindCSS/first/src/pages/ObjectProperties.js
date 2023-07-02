import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Borders from './object-properties/Borders';
import Rings from './object-properties/Rings';
import Divide from './object-properties/Divide';
import BoxShadow from './object-properties/BoxShadow';


const ObjectProperties = () => {
    const [active, setActive] = useState('border');

    const handleMenuItemClick = (menuId) => {
        setActive(menuId);
    };
    return (
        <>
            <main className='h-screen relative flex flex-row mt-[125px]'>
                <div className='max-w-[200px] mt-[125px] mr-[75px] h-screen text-left flex flex-col'>
                    <div className="w-full p-6 sm:w-60 bg-gray-200 text-indigo-500 sticky top-0">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold text-indigo-300">Object properties</h2>
                                <aside className="flex flex-col space-y-1">
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('border')}>Borders</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('ring')}>Rings</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('divide')}>Divide</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('shadow')}>Spacing Typography</Link>
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='h-screen mt-[125px]'>
                    {active === 'border' && <Borders />}
                    {active === 'ring' && <Rings />}
                    {active === 'divide' && <Divide />}
                    {active === 'shadow' && <BoxShadow />}
                </div>
            </main>
        </>
    )
}

export default ObjectProperties