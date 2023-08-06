import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navigation = [
    { name: 'Typography', to: '/typography' },
    { name: 'Object Properties', to: '/object-properties' },
    { name: 'Object Metrics', to: '/object-metrics' },
    { name: 'Layout', to: '/layout' },
    { name: 'Animation', to: '/animation' },
    { name: 'Other Options', to: '/other-options' },
    { name: 'Just-in-Time Mode', to: '/just-intime-mode' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isShowing, setIsShowing] = useState(false);
    const active = location.pathname;


    return (
        <Disclosure as="nav" className="bg-gray-100">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setIsShowing(!isShowing)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <NavLink to='/'
                                    >
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="hidden h-8 w-auto lg:block mr-3"
                                    >
                                        <img
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </NavLink>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <div key={item.name} className="relative">
                                                <NavLink
                                                    to={item.to}
                                                    className="text-indigo-500 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                                                    onClick={() => {
                                                        setIsShowing(false);
                                                        navigate(item.to);
                                                    }}
                                                    onMouseEnter={() => setIsShowing(true)}
                                                    onMouseLeave={() => setIsShowing(false)}
                                                    style={{ borderBottom: active === item.to ? '2px solid rgba(63, 99, 255, 0.2)' : 'none' }}
                                                >
                                                    {item.name}
                                                    {location.pathname === item.to && (
                                                        <button
                                                            type="button"
                                                            className="absolute top-0 right-0 h-full w-full text-gray-900 hover:text-white-900 rounded-md"
                                                        ></button>
                                                    )}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        'block rounded-md px-3 py-2 text-indigo-500 font-medium',
                                        location.pathname === item.to && 'bg-indigo-500 text-white'
                                    )}
                                    onClick={() => setIsShowing(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
