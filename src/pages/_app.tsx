import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import Loader from '@/components/Loader'
import RootLayout from '@/components/Layouts/RootLayout'
import { PersistGate } from 'redux-persist/integration/react'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (loading)
    return (
      <div className="root_container">
        <Loader />
      </div>
    )
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </PersistGate>
    </Provider>
  )
}

export default App
