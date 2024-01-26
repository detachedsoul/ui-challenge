"use client";

import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";

const Receipt = ({
    isActive,
    setIsActive,
    id,
    name,
    amount
}: { isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>>, amount: string, id: string, name: string}) => {
    useEffect(() => {
        isActive ? document.querySelector("body")!.style!.overflow = "hidden" : document.querySelector("body")!.style!.overflow = "auto";
    }, [isActive]);

    return (
        <div
            className={`fixed top-0 left-0 z-[1024] h-full w-full place-items-center bg-slate-900/50 backdrop-blur-[2px] duration-500 ease-linear overflow-y-auto ${isActive ? "animate-fadeIn grid" : "animate-fadeOut hidden gap-4"
            }`}
        >
            <div
                className="h-auto z-[1024] my-8 w-[calc(100%-10%)] grid gap-2 rounded-[12px] bg-[#f2f2f2] text-[#666666] px-6 py-6 min-[500px]:w-3/5 min-[600px]:w-1/3 dark:bg-slate-800 dark:text-slate-200"
            >
                <div className="flex items-center justify-end bg-[#f2f2f2] text-[#666666] dark:bg-slate-800">

                    <button className="flex items-center justify-between gap-2" type="button" onClick={() => setIsActive(false)} aria-label="Close modal">
                        <X size={20} />
                    </button>

                </div>

                <div className="grid gap-4">
                    <div className="mx-auto grid gap-1 text-center">
                        <svg className="mx-auto" width="50" height="50" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36.5" cy="36" r="36" fill="#23A26D" fill-opacity="0.12" />
                            <path d="M37 19.3333C27.8167 19.3333 20.3334 26.8166 20.3334 36C20.3334 45.1833 27.8167 52.6666 37 52.6666C46.1834 52.6666 53.6667 45.1833 53.6667 36C53.6667 26.8166 46.1834 19.3333 37 19.3333ZM44.9667 32.1666L35.5167 41.6166C35.2834 41.85 34.9667 41.9833 34.6334 41.9833C34.3 41.9833 33.9834 41.85 33.75 41.6166L29.0334 36.9C28.55 36.4166 28.55 35.6166 29.0334 35.1333C29.5167 34.65 30.3167 34.65 30.8 35.1333L34.6334 38.9666L43.2 30.4C43.6834 29.9166 44.4834 29.9166 44.9667 30.4C45.45 30.8833 45.45 31.6666 44.9667 32.1666Z" fill="#23A26D" />
                        </svg>

                        <h3 className="font-medium leading-7 text-xl dark:text-white">
                            Payment Success!
                        </h3>

                        <p>
                            Your payment has been successfully done.
                        </p>
                    </div>

                    <div className="bg-white border border-[#edf2f7] dark:bg-slate-700 p-4 rounded-2xl dark:border-slate-700 grid gap-4">
                        <div className="flex justify-between gap-2 items-center">
                            <p>
                                Amount
                            </p>

                            <p className="text-white text-lg">
                                {amount}
                            </p>
                        </div>

                        <div className="flex justify-between gap-2 items-center pb-4 border-b border-[#edf2f7] dark:border-slate-600">
                            <p>
                                Payment status
                            </p>

                            <p className="bg-[rgba(65,_209,_149,_0.12)] text-[#41d195] rounded-[1.4375rem] py-[0.375rem] px-[0.625rem] leading-4 text-[0.625rem]">
                                Success
                            </p>
                        </div>

                        <div className="flex justify-between gap-2 items-center">
                            <p>
                                Ref number
                            </p>

                            <p className="text-white">
                                {id}
                            </p>
                        </div>

                        <div className="flex justify-between gap-2 items-center">
                            <p>
                                Merchant name
                            </p>

                            <p className="text-white">
                                {name}
                            </p>
                        </div>

                        <div className="flex justify-between gap-2 items-center">
                            <p>
                                Payment method
                            </p>

                            <p className="text-white">
                                Bank transfer
                            </p>
                        </div>

                        <div className="flex justify-between gap-2 items-center">
                            <p>
                                Payment time
                            </p>

                            <p className="text-white">
                                Jan 26, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
