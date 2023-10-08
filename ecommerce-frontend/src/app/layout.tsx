import './globals.css'
import Navbar from './components/common/Navbar/index'; 

import "@fontsource/space-grotesk";
import { Providers } from './providers';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{fontFamily:'Space Grotesk'}}>
        <Providers>
        <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  )
}
