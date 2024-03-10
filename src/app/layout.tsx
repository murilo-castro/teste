import ClientOnly from '@/components/ClientOnly'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import { MapsContextProvider } from '@/contexts/MapsContext'
import Header from '../components/header/header';
import Footer from '../components/footer/footer'

// export const metadata = {
//   title: 'Rex.pet',
//   description: 'Seu pet com tudo que ele precisa',
// }

const inter = Inter({
  subsets: ["latin"],
  weight: "100",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full min-h-full bg-main">
      <body className={inter.className + "h-screen min-h-screen"}>
        <MapsContextProvider>
          <div className="h-screen min-h-screen flex flex-col justify-between">
            <div className="md:container mx-auto grow">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </MapsContextProvider>
      </body>
    </html>
  );
}
