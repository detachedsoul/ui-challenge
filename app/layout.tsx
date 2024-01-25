import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
    ]
});

export const metadata: Metadata = {
    title: "Analytics Dashboard",
    description: "GeegPay UI Challenge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>

            <body className={`${jakartaSans.className} text-base leading-[160%] antialiased text-balance scroll-smooth flex items-start dark:bg-slate-900 dark:text-slate-400`}>
                {children}
            </body>
        </html>
    );
}
