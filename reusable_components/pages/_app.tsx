import '../styles/button.scss'
import { Noto_Sans_Javanese } from 'next/font/google'
import type { AppProps } from 'next/app'

const noto = Noto_Sans_Javanese({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={noto.className}>
    <Component {...pageProps} />
  </main >
}
