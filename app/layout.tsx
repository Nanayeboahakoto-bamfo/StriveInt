import type { Metadata } from 'next'
import './globals.css'
import StoreProvider from './storeProvider'

export const metadata: Metadata = {
  title: 'Strive Int',
  description: 'Takes you from Study to a Career in the UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
       </body>
    </html>
  )
}
