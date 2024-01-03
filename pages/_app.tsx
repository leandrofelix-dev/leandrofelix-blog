import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'
import { Fira_Code } from 'next/font/google'
import 'styles/globals.css'

export const firaCode = Fira_Code({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_ID &&
        process.env.NEXT_PUBLIC_UMAMI_URL && (
          <Script
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
          />
        )}
      <Toaster />
      <Component {...pageProps} />;
    </>
  )
}
