import './globals.css'
import type { Metadata } from 'next'
import {Nav}  from './components/nav'


export const metadata: Metadata = {
  title: 'TaskGlitter',
  description: 'A project management app',
}

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-[4.5rem]'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
