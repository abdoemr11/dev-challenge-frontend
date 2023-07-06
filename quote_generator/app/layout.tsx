import "./globals.css";
import { Inter, Montserrat, Raleway } from "next/font/google";
import "material-icons/iconfont/material-icons.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});
const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Quote Generator",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.className + raleway.className}>
                <main className="container flex items-center flex-col justify-center gap-y-24">
                    <a
                        href="/"
                        className="w-full flex justify-end mt-4 text-lg text-[#333] text-[Raleway]"
                    >
                        random
                        <span className="material-icons">autorenew</span>
                    </a>
                    {children}
                </main>
            </body>
        </html>
    );
}