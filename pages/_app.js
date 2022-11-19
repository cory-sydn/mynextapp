import { Provider } from 'react-redux'
import Layout from '../component/Layout'
import { store } from '../redux/store'
import '../styles/globals.scss'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
		if (typeof window !== 'undefined') {
			const status = sessionStorage.getItem("pageView")
			if( status !== "started") {
        router.push( "/intro" , "/intro" , undefined)
      }
		}
	}, [router])

  if (!hasMounted) {
    // make them wait till the real content rendered. Because if you don't, it will cause hydration problems. 
    return <div>Loading...</div>;
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
