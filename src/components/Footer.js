import React from 'react'
import logo from '../XingodaLogo.svg'
function Footer() {
    return (
        <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div class="sm:col-span-2">
                    <a href="#" class="inline-flex items-center">
                        <img src={logo} alt="logo" class="h-12 w-12" />
                    </a>
                    <div class="mt-6 lg:max-w-xl">
                        <p class="text-sm text-gray-800">
                            Xingoda serves as a comprehensive rental solution, amalgamating both user and vendor rentals onto a single platform to facilitate a smooth and efficient rental process.
                            User Rentals: Everyday individuals can leverage our platform to rent out items lying idle at home, providing them with an opportunity to earn extra income.
                            Vendor Rentals: Our platform serves as a central hub, aggregating various rental vendors. This approach not only expands the customer base for vendors but also ensures a seamless rental experience for customers.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-2 text-sm">

                    <p class="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
                    <a href="#">Human Resource Management</a>
                    <a href="#">Operations Management</a>
                    <a href="#">Marketing Management</a>
                </div>

                <div>
                    <p class="text-base font-bold tracking-wide text-gray-900">XINGODA IS ALSO AVAILABLE ON</p>
                    <div class="flex items-center gap-1 px-2">
                        <a href="https://play.google.com/store/apps/details?id=com.xingoda.app" class="w-full min-w-xl">
                            <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                class="h-10" />
                        </a>
                        <a class="w-full min-w-xl" href="https://www.youtube.com/watch?v=U1l6X7NTDSc">
                            <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                class="h-28" />
                        </a>
                    </div>
                    <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div class="flex">
                        <p class="mr-1 text-gray-800">Email:</p>
                        <a href="#" title="send email">support@xingoda.com</a>
                    </div>
                </div>

            </div>
            <div class="flex justify-center space-x-5 lg:justify-center border-t pt-5 pb-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a href="https://www.linkedin.com/company/xingodaxingoda/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a href="https://www.instagram.com/xingoda/?igsh=MTM3bXk3N2N3Nm10aQ" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a href="https://twitter.com/xingoda?t=bRnq9l6heChLc--hh_q63A&s=09" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
            </div>

            <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-600">© Copyright 2004-2025 Xingoda. All rights reserved.</p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="#"
                            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer