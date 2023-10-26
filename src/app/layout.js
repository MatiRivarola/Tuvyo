import { Inter , Po } from 'next/font/google'
import './globals.css'
import HeadPage from './components/Head'
import { Providers } from './providers.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ECF0EE] `}>
        <Providers>
          <HeadPage/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
