import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Flashcards',
    description: 'Apprendre et réviser avec les fiches mémos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="text-center items-center p-10">
                    <Link href="/" >
                        <h1 className="text-stone-200 font-bold text-2xl">Fiches mémos</h1>
                    </Link>
                </nav>
                <main className="flex min-h-screen flex-col items-center p-18">
                    {children}
                </main>
            </body>
        </html>
    )
}
