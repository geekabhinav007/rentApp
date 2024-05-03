import React, { useEffect, useState } from 'react';
import logo from '../XingodaLogo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });
        return unsubscribe;
    }, []);



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
        <>
            <div className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#FBFBFB] p-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start" style={{ zIndex: 1 }}>
                <div className="relative flex h-10 space-x-10 w-full">
                    <div className="flex justify-start">
                        <a className="flex flex-shrink-0 items-center" href="/">
                            <img className="block h-8 w-auto" height="32" src={logo} />
                        </a>
                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
                        {!isLoggedIn && (
                            <>
                                <Link className="text-gray-700 hover:text-lime-700 text-sm font-medium" to="/login">Login</Link>
                                <Link className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm" to="/login">Sign up</Link>
                            </>
                        )}
                        <Link className="text-white bg-red-600 hover:bg-red-800 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm" to="/cart">Cart</Link>
                        {isLoggedIn && (
                            <Link className="text-white bg-red-600 hover:bg-red-800 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm" onClick={handleSignOut}>Logout</Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
