import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-auto flex flex-col w-full items-center justify-center bg-cover  bg-no-repeat min-w-[300px] bg-mobile md:bg-desktop
      ${inter.className, montserrat.className}`} >{children}</body>
    </html>
  )
}
