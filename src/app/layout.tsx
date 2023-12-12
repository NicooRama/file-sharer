import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Header} from "@/src/core/components/Header/Header";


const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
