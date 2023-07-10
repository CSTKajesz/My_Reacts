import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import WidthAndHeights from './object-metrics/WidthAndHeight';
import PaddingAndMargin from './object-metrics/PaddingAndMargin';
import DisplayAndPosition from './object-metrics/DisplayAndPosition';


const ObjectMetrics = () => {

    const [active, setActive] = useState('width');

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
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('width')}>Width and Height</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('padding')}>Padding and Margins</Link>
                                    <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('display')}>Display and Position</Link>
                                    {/* <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('background')}>Backgrounds</Link> */}
                                    {/* <Link to="#" smooth className="hover:text-black" onClick={() => handleMenuItemClick('shadow')}>Box Shadow</Link> */}
                                </aside>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='h-screen mt-[125px]'>
                    {active === 'width' && <WidthAndHeights />}
                    {active === 'padding' && <PaddingAndMargin />}
                    {active === 'display' && <DisplayAndPosition />}
                    {/* {active === 'background' && <Backgrounds />} */}
                    {/* {active === 'shadow' && <BoxShadow />} */}
                </div>
            </main>
        </>
    )
}


export default ObjectMetrics