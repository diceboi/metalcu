import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local';
import MainNav from './components/UI/MainNav';
import Footer from './components/UI/Footer';
import ContextProvider from './Context';
import { Toaster } from 'sonner';

const NeueKaine = localFont({
  src: [
    {
      path: '../public/fonts/NeueKaine-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../public/fonts/NeueKaine-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/NeueKaine-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../public/fonts/NeueKaine-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/NeueKaine-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: '../public/fonts/NeueKaine-Black.ttf',
      weight: '900',
      style: 'black',
    },
  ],
})

export const metadata = {
  title: 'Metalcu Trade Kft',
  description: 'Cégünk stratégiai partnerei és szakmailag elismert munkatársai révén évtizedes tapasztalattal rendelkezünk az alumínium, réz, bronz, acél kereskedelemben, és megmunkálásban.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${NeueKaine.className} bg-[--lightgrey]`}>
      <ContextProvider>
        <MainNav />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </ContextProvider>
      </body>
    </html>
  )
}
