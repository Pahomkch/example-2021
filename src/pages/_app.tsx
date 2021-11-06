import 'assets/globals.css'
import 'assets/normolize.css'
import {AppProps} from 'next/dist/shared/lib/router/router'
import {Fragment} from 'react'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <Fragment>
    <Head>
      <title>Compare courses</title>
    </Head>

    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
