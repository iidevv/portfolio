import './styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '../components/Header';
import Providers from './providers';
import Footer from '../components/Footer';

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
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
