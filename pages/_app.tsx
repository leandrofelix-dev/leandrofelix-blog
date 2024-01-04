import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Fira_Code, Inter } from 'next/font/google'
import 'styles/globals.css'

export const firaCode = Fira_Code({ subsets: ['latin'] })
export const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Component {...pageProps}/>;
    </>
  )
}
