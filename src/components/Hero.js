import React from 'react'

function Hero() {
  return (
    <div className="max-w-7xl mx-auto my-5 relative bg-white-800">
    <div className="relative py-16 flex justify-center px-4 sm:px-0">
        <div className="max-w-3xl text-center">
            <div className="pb-4">
                <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">Unlock the potential of Renting.</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                One stop solution for all your rental
            </h1>
            <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16">Rentals help to save the environment and reduce carbon footprint and provide better usability of the products.

</p>
            <div className="mt-8 flex w-full space-x-8 justify-center"><a
                href="#"><button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-white !px-12 !shadow-lg !rounded-full !text-base"><p>Start now for free</p></button></a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero