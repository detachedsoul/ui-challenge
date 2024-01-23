import Link from "next/link";
import Image from "next/image";
import MarcusBergson from "@/assets/img/marcus-bergson.svg";
import JaydonVaccaro from "@/assets/img/jaydon-vaccaro.svg";
import CoreySchleifer from "@/assets/img/corey-schleifer.svg";
import CooperPress from "@/assets/img/cooper-press.svg";
import PhillipLubin from "@/assets/img/phillip-lubin.svg";

type ordersType = {
    id: number,
    customerImage: string,
    customerName: string,
    date: string,
    amount: string,
    status: number
};

const MainContent = (): JSX.Element => {
    const orders: ordersType[] = [
        {
            id: 1,
            customerImage: MarcusBergson,
            customerName: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: 1
        },
        {
            id: 2,
            customerImage: JaydonVaccaro,
            customerName: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: "$150,000",
            status: 0
        },
        {
            id: 3,
            customerImage: CoreySchleifer,
            customerName: "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: "$87,000",
            status: 1
        },
        {
            id: 4,
            customerImage: CooperPress,
            customerName: "Cooper Press",
            date: "Nov 14, 2023",
            amount: "$100,000",
            status: 0
        },
        {
            id: 3,
            customerImage: PhillipLubin,
            customerName: "Phillip Lubin",
            date: "Nov 13, 2023",
            amount: "$78,000",
            status: 1
        },
    ];

    return (
        <div className="grid gap-4 lg:col-span-7">
            <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[0.625rem]">

            </div>

            <div className="bg-white p-4 rounded-[0.875rem] border border-[#edf2f7] grid gap-[1.06rem]">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="header">
                        Last Orders
                    </h2>

                    <Link className="text-[#34caa5] font-medium text-lg leading-[1.625rem]" href="">
                        See All
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse whitespace-nowrap">
                        <thead className="text-left border-b border-gray-300">
                            <tr>
                                <th className="text-[#9ca4ab] font-medium leading-6 pb-[1.06rem] pr-4 last:pr-0">
                                    Name
                                </th>

                                <th className="text-[#9ca4ab] font-medium leading-6 pb-[1.06rem] pr-4 last:pr-0">
                                    Date
                                </th>

                                <th className="text-[#9ca4ab] font-medium leading-6 pb-[1.06rem] pr-4 last:pr-0">
                                    Amount
                                </th>

                                <th className="text-[#9ca4ab] font-medium leading-6 pb-[1.06rem] pr-4 last:pr-0">
                                    Status
                                </th>

                                <th className="text-[#9ca4ab] font-medium leading-6 pb-[1.06rem] pr-4 last:pr-0">
                                    Invoice
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order: ordersType): JSX.Element => (
                                <tr className="first:pt-4 border-b border-gray-300" key={order.id}>
                                    <td className="py-4 pr-4">
                                        <div className="inline-flex gap-[0.625rem] items-center leading-6 font-medium text-[#3a3f51]">
                                            <Image src={order.customerImage} alt={order.customerName} />

                                            {order.customerName}
                                        </div>
                                    </td>

                                    <td className="ml-[0.625rem] py-4 pr-4 text-[#737373]">
                                        {order.date}
                                    </td>

                                    <td className="py-4 pr-4 leading-6 font-medium text-[#0d062d]">
                                        {order.amount}
                                    </td>

                                    <td className={`py-4 pr-4 leading-6 ${order.status === 1 ? 'text-[#34caa5]' : 'text-[#ed544e]'}`}>
                                        {order.status === 1 ? 'Paid' : 'Refund'}
                                    </td>

                                    <td className="py-4 pr-4 leading-[1.375rem] text-[#0d062d]">
                                        <Link className="flex items-center gap-[0.3rem]" href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z" fill="#292D32" />
                                                <path d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z" fill="#292D32" />
                                                <path d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z" fill="#292D32" />
                                                <path d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z" fill="#292D32" />
                                            </svg>

                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
