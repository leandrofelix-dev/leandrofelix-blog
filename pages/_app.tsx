import { Toaster } from 'react-hot-toast'
import { Fira_Code, Inter, Source_Sans_3 } from 'next/font/google'
import type { AppProps } from 'next/app'
import 'src/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const firaCode = Fira_Code({ subsets: ['latin'] })
export const inter = Inter({ subsets: ['latin'] })
export const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}
