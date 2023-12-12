import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen flex w-full justify-center bg-cover bg-no-repeat 
      ${inter.className, montserrat.className}`} style={{backgroundImage: 'linear-gradient(0deg, #000 -10.63%, rgba(0, 0, 0, 0.00) 85.07%), url("/spaceship.png")',}}>{children}</body>
    </html>
  )
}
