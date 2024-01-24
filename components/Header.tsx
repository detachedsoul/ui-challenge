"use client";

import MobileNavBar from "@/components/MobileNavBar";
import MobileSearchBar from "@/components/MobileSearchBar";
import MobileUserPreview from "@/components/MobileUserPreview";
import Link from "next/link";
import Image from "next/image";
import UserImage from "@/assets/img/user-icon.svg";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon, UserIcon, SearchIcon } from "lucide-react";

const Header = (): JSX.Element => {
    const [navBarIsActive, setNavBarIsActive] = useState<boolean>(false);
    const [searchBarIsActive, setSearchBarIsActive] = useState<boolean>(false);
    const [userPreviewIsActive, setPreviewIsActive] = useState<boolean>(false);

    return (
        <header className="bg-[#fafafa] border-b border-[#e5eaef] p-[1.125rem] flex items-center gap-4 justify-between sticky top-0 z-50">
            <p className="text-xl font-semibold leading-7 text-[#26282c]">
                Dashboard
            </p>

            <div className="flex items-center gap-6 lg:hidden">
                <button type="button" aria-label="Toggle searchbar" onClick={() => setSearchBarIsActive(() => {
                    setPreviewIsActive(false);
                    setNavBarIsActive(false);

                    return !searchBarIsActive;
                })}>
                    <SearchIcon />
                </button>

                <button type="button" aria-label="Toggle user preview" onClick={() => setPreviewIsActive(() => {
                    setNavBarIsActive(false);
                    setSearchBarIsActive(false);

                    return !userPreviewIsActive;
                })}>
                    <UserIcon />
                </button>

                <button type="button" aria-label="Toggle navbar" onClick={() => setNavBarIsActive(() => {
                    setPreviewIsActive(false);
                    setSearchBarIsActive(false);

                    return !navBarIsActive;
                })}>
                    {navBarIsActive ? (
                        <XIcon />
                    ) : (
                        <MenuIcon />
                    )}
                </button>
            </div>

            <MobileNavBar isActive={navBarIsActive} />
            <MobileSearchBar isActive={searchBarIsActive} />
            <MobileUserPreview isActive={userPreviewIsActive} />

            <div className="hidden items-center gap-6 lg:flex">
                <form className="flex items-center bg-white border border-[#dadddd] px-4 py-3 gap-2 rounded-3xl" method="get">
                    <button type="submit" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A" />
                        </svg>
                    </button>

                    <input className="text-[#a3a3a3] leading-6 focus:outline-none focus:ring-0 focus:border-none bg-transparent" type="search" name="search" id="search" placeholder="Search..." />
                </form>

                <p className="flex items-center gap-2 font-medium text-[#26282c] text-sm leading-[1.375rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z" stroke="black" strokeWidth="1.37144" />
                        <path d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999" stroke="black" strokeWidth="1.37144" strokeLinecap="round" />
                        <path d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z" fill="black" />
                    </svg>

                    November 15, 2023
                </p>

                <div className="flex items-center gap-5">
                    <button type="button" aria-label="Notification Bell">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.384615" y="0.384615" width="39.2308" height="39.2308" rx="19.6154" stroke="#DADDDD" strokeWidth="0.769231" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0001 11.0416C18.2872 11.0416 16.6445 11.7221 15.4333 12.9332C14.2221 14.1444 13.5417 15.7871 13.5417 17.5V18.0866C13.5417 18.6674 13.3697 19.2351 13.0476 19.7183L12.0917 21.1541C10.9801 22.8208 11.8284 25.0858 13.7609 25.6125C14.3901 25.7841 15.0251 25.9291 15.6642 26.0483L15.6659 26.0525C16.3059 27.7625 18.0184 28.9583 20.0001 28.9583C21.9817 28.9583 23.6942 27.7625 24.3351 26.0525L24.3367 26.0483C24.9769 25.9292 25.6119 25.7838 26.2401 25.6125C28.1726 25.0858 29.0209 22.8208 27.9092 21.1541L26.9526 19.7183C26.6304 19.2351 26.4584 18.6674 26.4584 18.0866V17.5C26.4584 15.7871 25.778 14.1444 24.5668 12.9332C23.3556 11.7221 21.7129 11.0416 20.0001 11.0416ZM22.8134 26.2808C20.9442 26.5041 19.0551 26.5041 17.1859 26.2808C17.7784 27.1316 18.8092 27.7083 20.0001 27.7083C21.1909 27.7083 22.2209 27.1316 22.8134 26.2808ZM14.7917 17.5C14.7917 16.1186 15.3405 14.7939 16.3172 13.8171C17.294 12.8404 18.6187 12.2916 20.0001 12.2916C21.3814 12.2916 22.7062 12.8404 23.6829 13.8171C24.6597 14.7939 25.2084 16.1186 25.2084 17.5V18.0866C25.2084 18.9141 25.4534 19.7233 25.9126 20.4116L26.8692 21.8475C27.0175 22.0695 27.1108 22.3235 27.1415 22.5887C27.1722 22.8539 27.1393 23.1226 27.0457 23.3726C26.9521 23.6226 26.8004 23.8467 26.6031 24.0265C26.4057 24.2063 26.1685 24.3366 25.9109 24.4066C22.0407 25.4621 17.9585 25.4621 14.0884 24.4066C13.831 24.3364 13.594 24.206 13.3969 24.0263C13.1998 23.8465 13.0482 23.6225 12.9546 23.3727C12.8611 23.1228 12.8282 22.8544 12.8587 22.5893C12.8892 22.3243 12.9822 22.0703 13.1301 21.8483L14.0884 20.4116C14.5472 19.723 14.7919 18.9141 14.7917 18.0866V17.5Z" fill="#0D062D" />
                        </svg>
                    </button>

                    <div className="rounded-[1.75rem] border border-[#dadddd] py-1.5 px-2 flex items-center gap-3 justify-between">
                        <Image src={UserImage} alt="Justin Bergson" />

                        <div>
                            <h4 className="text-[#26282c]">
                                Justin Bergson
                            </h4>

                            <p className="text-[#787486] text-sm">
                                Justin@gmail.com
                            </p>
                        </div>

                        <button className="text-[#0d062d]" type="button" aria-label="Toggle button">
                            <ChevronDownIcon />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
