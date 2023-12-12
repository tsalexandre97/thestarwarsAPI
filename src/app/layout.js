import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-auto flex flex-col w-full items-center justify-center bg-cover md:bg-contain bg-no-repeat  min-w-[300px]
      ${inter.className, montserrat.className}`} style={{backgroundImage: 'linear-gradient(0deg, #000 -10.63%, rgba(0, 0, 0, 0.00) 85.07%), url("/bkg-md.svg")'}}>{children}</body>
    </html>
  )
}
