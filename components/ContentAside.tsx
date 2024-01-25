import Link from "next/link";

type topPlatformType = {
    id: number,
    type: string,
    amount: string,
    percentage: string,
    color: string,
    width: string
};

const ContentAside = (): JSX.Element => {
    const platforms: topPlatformType[] = [
        {
            id: 1,
            type: "Book Bazaar",
            amount: "$2,500,000",
            percentage: "+15%",
            color: "after:bg-[#6160dc]",
            width: "after:w-1/2"
        },
        {
            id: 2,
            type: "Artisan Aisle",
            amount: "$1,800,000",
            percentage: "+10%",
            color: "after:bg-[#54c5eb]",
            width: "after:w-2/5"
        },
        {
            id: 3,
            type: "Toy Troop",
            amount: "$1,200,000",
            percentage: "+8%",
            color: "after:bg-[#ffb74a]",
            width: "after:w-1/3"
        },
        {
            id: 4,
            type: "XStore",
            amount: "$91,000",
            percentage: "+6%",
            color: "after:bg-[#ff4a55]",
            width: "after:w-1/4"
        },
    ];

    return (
        <div className="grid gap-4 lg:col-span-5 xl:gap-8">
            <div className="grid md:grid-cols-2 gap-4 xl:gap-8">
                <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[0.625rem] dark:bg-slate-800 dark:border-slate-900">
                    <div className="flex items-center justify-between">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.6429" stroke="#E6E6E6" strokeWidth="0.714286" />
                            <path opacity="0.4" d="M27.3499 13.66L21.0599 10.27C20.3999 9.91 19.5999 9.91 18.9299 10.27L12.6399 13.66C12.1799 13.91 11.8999 14.4 11.8999 14.94C11.8999 15.48 12.1799 15.97 12.6399 16.22L18.9299 19.61C19.2599 19.79 19.6299 19.88 19.9899 19.88C20.3499 19.88 20.7199 19.79 21.0499 19.61L27.3399 16.22C27.7999 15.97 28.0799 15.48 28.0799 14.94C28.0999 14.4 27.8099 13.91 27.3499 13.66Z" fill="#34caa5" />
                            <path opacity="0.4" d="M17.9002 20.79L12.0502 17.86C11.6002 17.63 11.0802 17.66 10.6502 17.92C10.2202 18.18 9.97021 18.64 9.97021 19.14V24.67C9.97021 25.63 10.5002 26.49 11.3602 26.92L17.2102 29.8401C17.4102 29.9401 17.6302 29.99 17.8502 29.99C18.1102 29.99 18.3702 29.92 18.6002 29.77C19.0302 29.51 19.2802 29.05 19.2802 28.55V23.02C19.2902 22.08 18.7602 21.22 17.9002 20.79Z" fill="#34caa5" />
                            <path opacity="0.4" d="M30.03 19.15V23.74C30.02 23.73 30.01 23.71 30 23.7C30 23.69 29.99 23.68 29.98 23.67C29.94 23.61 29.89 23.55 29.84 23.5C29.83 23.49 29.82 23.47 29.81 23.46C29 22.56 27.81 22 26.5 22C25.24 22 24.09 22.52 23.27 23.36C22.48 24.17 22 25.28 22 26.5C22 27.34 22.24 28.14 22.65 28.82C22.82 29.11 23.03 29.37 23.26 29.61L22.79 29.85C22.59 29.95 22.37 30 22.15 30C21.89 30 21.63 29.93 21.39 29.78C20.97 29.52 20.71 29.06 20.71 28.56V23.04C20.71 22.08 21.24 21.22 22.1 20.79L27.95 17.87C28.4 17.64 28.92 17.66 29.35 17.93C29.77 18.19 30.03 18.65 30.03 19.15Z" fill="#34caa5" />
                            <path d="M29.98 23.67C29.16 22.66 27.91 22.02 26.5 22.02C25.44 22.02 24.46 22.39 23.69 23.01C22.65 23.83 22 25.1 22 26.52C22 27.36 22.24 28.16 22.65 28.84C22.92 29.29 23.26 29.68 23.66 30H23.67C24.44 30.64 25.43 31.02 26.5 31.02C27.64 31.02 28.67 30.6 29.46 29.9C29.81 29.6 30.11 29.24 30.35 28.84C30.76 28.16 31 27.36 31 26.52C31 25.44 30.62 24.44 29.98 23.67ZM28.76 25.96L26.36 28.18C26.22 28.31 26.03 28.38 25.85 28.38C25.66 28.38 25.47 28.31 25.32 28.16L24.21 27.05C23.92 26.76 23.92 26.28 24.21 25.99C24.5 25.7 24.98 25.7 25.27 25.99L25.87 26.59L27.74 24.86C28.04 24.58 28.52 24.6 28.8 24.9C29.09 25.21 29.07 25.68 28.76 25.96Z" fill="#34caa5" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                            <path d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fillOpacity="0.16" />
                            <path d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#77B900" stopOpacity="0" />
                                    <stop offset="0.809892" stopColor="#77B900" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h3 className="text-[#898989] font-medium leading-[1.625rem] text-lg dark:text-slate-200">
                        Total Order
                    </h3>

                    <p className="font-semibold text-[#3a3f51] text-2xl leading-8 dark:text-white">
                        350
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <p className="text-xs leading-4 font-medium text-[#34caa5] bg-[rgba(52,_202,_165,_0.12)] py-1 px-2 rounded-[62.5rem] flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5" stroke="#34caa5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 3.5H10.5V7" stroke="#34caa5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            23,5%
                        </p>

                        <p className="text-[#606060] text-sm dark:text-white">
                            vs. previous month
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[0.625rem] dark:bg-slate-800 dark:border-slate-900">
                    <div className="flex items-center justify-between">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.6429" stroke="#E6E6E6" strokeWidth="0.714286" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.5782 10.9119C12.8091 11.5544 10.75 14.0334 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17C9.25 12.7158 12.7158 9.25 17 9.25C17.2702 9.25 17.5195 9.39534 17.6526 9.63047C17.7858 9.8656 17.7821 10.1542 17.6431 10.3859L16.5931 12.1359C16.38 12.4911 15.9193 12.6062 15.5641 12.3931C15.209 12.18 15.0938 11.7193 15.3069 11.3641L15.5782 10.9119ZM30 22.25C30.4142 22.25 30.75 22.5858 30.75 23C30.75 27.2842 27.2842 30.75 23 30.75C22.7298 30.75 22.4805 30.6047 22.3474 30.3695C22.2142 30.1344 22.2179 29.8458 22.3569 29.6141L23.4069 27.8641C23.62 27.5089 24.0807 27.3938 24.4359 27.6069C24.791 27.82 24.9062 28.2807 24.6931 28.6359L24.4218 29.0881C27.1909 28.4456 29.25 25.9666 29.25 23C29.25 22.5858 29.5858 22.25 30 22.25Z" fill="#34caa5" />
                            <path d="M24.4004 16.21L20.6404 14.18C20.2404 13.97 19.7704 13.97 19.3704 14.18L15.6104 16.21C15.3404 16.36 15.1704 16.65 15.1704 16.98C15.1704 17.31 15.3404 17.6 15.6104 17.75L19.3704 19.78C19.5704 19.89 19.7904 19.94 20.0104 19.94C20.2304 19.94 20.4504 19.89 20.6504 19.78L24.4104 17.75C24.6804 17.6 24.8504 17.31 24.8504 16.98C24.8404 16.65 24.6704 16.36 24.4004 16.21Z" fill="#34caa5" />
                            <path opacity="0.4" d="M18.7402 20.4699L15.2402 18.7199C14.9702 18.5899 14.6602 18.5999 14.4002 18.7599C14.1402 18.9199 13.9902 19.1899 13.9902 19.4899V22.7999C13.9902 23.3699 14.3103 23.8899 14.8203 24.1399L18.3203 25.8899C18.4403 25.9499 18.5702 25.9799 18.7102 25.9799C18.8702 25.9799 19.0202 25.9399 19.1602 25.8499C19.4202 25.6899 19.5703 25.4199 19.5703 25.1199V21.8099C19.5703 21.2399 19.2602 20.7299 18.7402 20.4699Z" fill="#34caa5" />
                            <path opacity="0.4" d="M25.5904 18.7599C25.3304 18.5999 25.0204 18.5899 24.7504 18.7199L21.2504 20.4699C20.7404 20.7299 20.4204 21.2399 20.4204 21.8099V25.1199C20.4204 25.4199 20.5704 25.6899 20.8304 25.8499C20.9704 25.9399 21.1204 25.9799 21.2804 25.9799C21.4104 25.9799 21.5404 25.9499 21.6704 25.8899L25.1704 24.1399C25.6804 23.8799 26.0004 23.3699 26.0004 22.7999V19.4899C26.0004 19.1899 25.8504 18.9199 25.5904 18.7599Z" fill="#34caa5" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                            <path d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4687)" fillOpacity="0.16" />
                            <path d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_2133_4687" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ED544E" stopOpacity="0" />
                                    <stop offset="0.809892" stopColor="#ED544E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h3 className="text-[#898989] font-medium leading-[1.625rem] text-lg dark:text-slate-200">
                        Total Refund
                    </h3>

                    <p className="font-semibold text-[#3a3f51] text-2xl leading-8 dark:text-white">
                        270
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <p className="text-xs leading-4 font-medium text-[#ed544e] bg-[rgba(237,_84,_78,_0.12)] py-1 px-2 rounded-[62.5rem] flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8.5H10.5V5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            23,5%
                        </p>

                        <p className="text-[#606060] text-sm dark:text-white">
                            vs. previous month
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[0.625rem] dark:bg-slate-800 dark:border-slate-900">
                    <div className="flex items-center justify-between">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.6429" stroke="#E6E6E6" strokeWidth="0.714286" />
                            <path d="M24.25 30.5C25.2165 30.5 26 29.7165 26 28.75C26 27.7835 25.2165 27 24.25 27C23.2835 27 22.5 27.7835 22.5 28.75C22.5 29.7165 23.2835 30.5 24.25 30.5Z" fill="#34caa5" />
                            <path d="M16.25 30.5C17.2165 30.5 18 29.7165 18 28.75C18 27.7835 17.2165 27 16.25 27C15.2835 27 14.5 27.7835 14.5 28.75C14.5 29.7165 15.2835 30.5 16.25 30.5Z" fill="#34caa5" />
                            <path opacity="0.4" d="M12.84 11.94L12.64 14.39C12.6 14.86 12.97 15.25 13.44 15.25H28.75C29.17 15.25 29.52 14.93 29.55 14.51C29.68 12.74 28.33 11.3 26.56 11.3H14.29C14.19 10.86 13.99 10.44 13.68 10.09C13.19 9.56 12.49 9.25 11.77 9.25H10C9.59 9.25 9.25 9.59 9.25 10C9.25 10.41 9.59 10.75 10 10.75H11.74C12.05 10.75 12.34 10.88 12.55 11.1C12.76 11.33 12.86 11.63 12.84 11.94Z" fill="#34caa5" />
                            <path d="M28.5101 16.75H13.1701C12.7501 16.75 12.4101 17.07 12.3701 17.48L12.0101 21.83C11.8701 23.53 13.2101 25 14.9201 25H26.0401C27.5401 25 28.8601 23.77 28.9701 22.27L29.3001 17.6C29.3401 17.14 28.9801 16.75 28.5101 16.75Z" fill="#34caa5" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                            <path d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4687)" fillOpacity="0.16" />
                            <path d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_2133_4687" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ED544E" stopOpacity="0" />
                                    <stop offset="0.809892" stopColor="#ED544E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h3 className="text-[#898989] font-medium leading-[1.625rem] text-lg dark:text-slate-200">
                        Average Sales
                    </h3>

                    <p className="font-semibold text-[#3a3f51] text-2xl leading-8 dark:text-white">
                        1567
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <p className="text-xs leading-4 font-medium text-[#ed544e] bg-[rgba(237,_84,_78,_0.12)] py-1 px-2 rounded-[62.5rem] flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8.5H10.5V5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            23,5%
                        </p>

                        <p className="text-[#606060] text-sm dark:text-white">
                            vs. previous month
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[0.625rem] dark:bg-slate-800 dark:border-slate-900">
                    <div className="flex items-center justify-between">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.6429" stroke="#E6E6E6" strokeWidth="0.714286" />
                            <path opacity="0.4" d="M17.99 25.98C22.4028 25.98 25.98 22.4028 25.98 17.99C25.98 13.5772 22.4028 10 17.99 10C13.5772 10 10 13.5772 10 17.99C10 22.4028 13.5772 25.98 17.99 25.98Z" fill="#34caa5" />
                            <path d="M29.9701 23.99C29.9701 27.29 27.2901 29.97 23.9901 29.97C21.9501 29.97 20.1601 28.95 19.0801 27.4C23.4401 26.91 26.9101 23.44 27.4001 19.08C28.9501 20.16 29.9701 21.95 29.9701 23.99Z" fill="#34caa5" />
                            <path d="M19.45 17.71L17.05 16.87C16.81 16.79 16.76 16.77 16.76 16.42C16.76 16.16 16.94 15.95 17.17 15.95H18.67C18.99 15.95 19.25 16.24 19.25 16.6C19.25 17.01 19.59 17.35 20 17.35C20.41 17.35 20.75 17.01 20.75 16.6C20.75 15.45 19.86 14.51 18.75 14.46V14.41C18.75 14 18.41 13.66 18 13.66C17.59 13.66 17.25 13.99 17.25 14.41V14.46H17.16C16.11 14.46 15.25 15.34 15.25 16.43C15.25 17.38 15.67 17.99 16.54 18.29L18.95 19.13C19.19 19.21 19.24 19.23 19.24 19.58C19.24 19.84 19.06 20.05 18.83 20.05H17.33C17.01 20.05 16.75 19.76 16.75 19.4C16.75 18.99 16.41 18.65 16 18.65C15.59 18.65 15.25 18.99 15.25 19.4C15.25 20.55 16.14 21.49 17.25 21.54V21.6C17.25 22.01 17.59 22.35 18 22.35C18.41 22.35 18.75 22.01 18.75 21.6V21.55H18.84C19.89 21.55 20.75 20.67 20.75 19.58C20.75 18.63 20.32 18.02 19.45 17.71Z" fill="#34caa5" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                            <path d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fillOpacity="0.16" />
                            <path d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#77B900" stopOpacity="0" />
                                    <stop offset="0.809892" stopColor="#77B900" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h3 className="text-[#898989] font-medium leading-[1.625rem] text-lg dark:text-slate-200">
                        Total Income
                    </h3>

                    <p className="font-semibold text-[#3a3f51] text-2xl leading-8 dark:text-white">
                        $350.000
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <p className="text-xs leading-4 font-medium text-[#34caa5] bg-[rgba(52,_202,_165,_0.12)] py-1 px-2 rounded-[62.5rem] flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5" stroke="#34caa5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 3.5H10.5V7" stroke="#34caa5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            23,5%
                        </p>

                        <p className="text-[#606060] text-sm dark:text-white">
                            vs. previous month
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-5 p-4 bg-white rounded-lg dark:bg-slate-800">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="header">
                        Top Platform
                    </h2>

                    <Link className="text-[#34caa5] font-medium text-lg leading-[1.625rem]" href="">
                        See All
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
                    {platforms.map((platform: topPlatformType): JSX.Element => (
                        <div className="grid gap-[1.06rem]" key={platform.id}>
                            <h3 className="header text-[#22242c]">
                                {platform.type}
                            </h3>

                            <div className={`relative rounded-[2.5rem] bg-[#f5f5f5] h-3 after:absolute after:rounded-[2.5rem] ${platform.color} after:left-0 after:h-3 ${platform.width} dark:bg-slate-600`}></div>

                            <div className="flex items-center gap-4 justify-between">
                                <p className="text-[#525252] text-lg leading-[1.625rem] dark:text-slate-400">
                                    {platform.amount}
                                </p>

                                <p className="text-[#525252] text-lg leading-[1.625rem] dark:text-slate-400">
                                    {platform.percentage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentAside;
