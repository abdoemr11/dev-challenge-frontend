import '../styles/button.scss'
import '../styles/globals.scss'
import '../styles/input.scss'
import { Noto_Sans_Javanese } from 'next/font/google'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
const noto = Noto_Sans_Javanese({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
export default function App({ Component, pageProps }: AppProps) {
  return <Layout className={noto.className}>
    <Component {...pageProps} />

  </Layout>

}
