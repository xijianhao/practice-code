import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=414,user-scalable=no,viewport-fit=cover"></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}