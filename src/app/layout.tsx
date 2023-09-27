import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NavBar from '../components/NavBar';
import Providers from './providers';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ilya Ilyich - Full Stack Developer",
  description: "This website serves as my digital card and a showcase of my skills as a Full Stack developer. Here you'll find samples of my work, information about me, and ways to get in touch.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={roboto.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html >
  )
}
