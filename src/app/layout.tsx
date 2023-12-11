import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from "@/src/app/registry";
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
        <Header />
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}