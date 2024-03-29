import '@/styles/globals.css'
import '../styles/scss/global.scss'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';
 function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}
export default wrapper.withRedux(App);