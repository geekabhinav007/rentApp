import React from 'react'
import logo from '../XingodaLogo.svg'

function Navbar() {
    return (
        <>        <div className=" flex-no-wrap mb-5 fixed top-0 z-10 flex w-full items-center justify-between bg-[#FBFBFB] p-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start ">
            <div className="relative flex h-10 space-x-10 w-full">
                <div className="flex justify-start"><a className="flex flex-shrink-0 items-center" href="/">
                    <img className="block h-8 w-auto" height="32" src={logo} />
                </a>
                </div>
                <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end "><a
                    className="text-gray-700 hover:text-lime-700 text-sm font-medium" href="#">Login</a>
                    <a className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                        href="#">Sign up</a>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Navbar;