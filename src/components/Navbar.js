import React, { useEffect, useState } from 'react';
import logo from '../XingodaLogo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });
        return unsubscribe;
    }, []);


    const handleCart = () => {
        navigate('/cart');
    };

    const handleOrder = () => {
        navigate('/order');
    };

    const handleSignOut = () => {
        if (auth.currentUser) {
            signOut(auth)
                .then(() => {
                    navigate('/login');
                    alert('Logout Done');
                })
                .catch(err => {
                    alert(err.message);
                });
        }
    };

    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex flex-shrink-0 items-center" href="/">
                    <img className="block h-8 w-auto" height="32" src={logo} alt='logo' />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={` ${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        {!isLoggedIn && (
                            <>
                                <Link className="text-white bg-blue-800 hover:bg-blue-900 inline-flex items-center justify-center px-3 py-2 my-1 border border-transparent text-sm font-medium rounded-md shadow-sm" to="/login">Login</Link>
                                <Link className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 my-1 border border-transparent text-sm font-medium rounded-md shadow-sm" to="/login">Sign up</Link>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <button className="text-white bg-blue-800 hover:bg-blue-900 inline-flex items-center justify-center px-3 py-2 my-1 border border-transparent text-sm font-medium rounded-md shadow-sm" onClick={handleCart}>Cart</button>
                                <button className="text-white bg-green-800 hover:bg-green-900 inline-flex items-center justify-center px-3 py-2 my-1 border border-transparent text-sm font-medium rounded-md shadow-sm" onClick={handleOrder}>Orders</button>

                                <button className="text-white bg-red-800 hover:bg-red-900 inline-flex items-center justify-center px-3 py-2 my-1 border border-transparent text-sm font-medium rounded-md shadow-sm" onClick={handleSignOut}>Logout</button>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
