import { Provider } from 'react-redux'
import Layout from '../component/Layout'
import { store } from '../redux/store'
import '../styles/globals.scss'
import { useEffect, useState } from 'react';
import Spinner from "../component/Spinner"

function MyApp({ Component, pageProps }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // make them wait till the real content rendered. Because if you don't, it will cause hydration problems.
    return <Spinner />;
  }

  return (
    <Provider store={store} >
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
