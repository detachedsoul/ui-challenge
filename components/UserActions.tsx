"use client";

import Link from "next/link";
import Image from "next/image";
import UserImage from "@/assets/img/user-icon.svg";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const UserActions = (): JSX.Element => {
    const [profilePopUpIsActive, setProfilePopupIsActive] = useState<boolean>(false);

    return (
        <div className="rounded-[1.75rem] border border-[#dadddd] py-1.5 px-2 dark:border-slate-700 relative">
            <button className="flex items-center gap-3 justify-between dark:border-slate-700 w-full" type="button" onClick={() => setProfilePopupIsActive(!profilePopUpIsActive)}>
                <div className="flex items-center gap-3">
                    <Image src={UserImage} alt="Justin Bergson" />

                    <div>
                        <h4 className="text-[#26282c] dark:text-white">
                            Justin Bergson
                        </h4>

                        <p className="text-[#787486] text-sm dark:text-slate-200">
                            Justin@gmail.com
                        </p>
                    </div>
                </div>

                {profilePopUpIsActive ? (
                    <ChevronUpIcon className="text-[#0d062d] dark:text-slate-200" strokeWidth={1} />
                ) : (
                    <ChevronDownIcon className="text-[#0d062d] dark:text-slate-200" strokeWidth={1} />
                )}
            </button>

            <div className={`bg-white rounded-[0.875rem] border border-[#edf2f7] absolute top-[calc(100%+1rem)] text-xs leading-4 text-[#3a3f51] w-full left-0 transition-all duration-500 ease-in-out dark:text-slate-white dark:bg-slate-700 dark:border-slate-700 ${profilePopUpIsActive ? "animate-fadeIn" : "animate-fadeOut"}`}>
                <Link className="transition-colors duration-300 ease-in-out hover:bg-[#f7f8fa] p-3 text-left rounded-t-[0.875rem] w-full dark:hover:bg-slate-800 dark:text-white block" href="">
                    Profile
                </Link>

                <Link className="transition-colors duration-300 ease-in-out hover:bg-[#f7f8fa] p-3 text-left w-full dark:hover:bg-slate-800 dark:text-white block" href="">
                    Settings
                </Link>

                <Link className="transition-colors duration-300 ease-in-out hover:bg-[#f7f8fa] p-3 text-left rounded-b-[0.875rem] w-full dark:hover:bg-slate-800 dark:text-white block" href="">
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default UserActions;
