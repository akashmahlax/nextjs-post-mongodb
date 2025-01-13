import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Blog App',
  description: 'A simple blog app with user registration and posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Simple Blog App</Link>
            <div className="space-x-4">
              <Link href="/register" className="hover:underline">Register</Link>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/posts" className="hover:underline">Posts</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  )
}

