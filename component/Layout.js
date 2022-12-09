import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useRouter } from "next/router";

const Layout = ({children}) => {
  const router = useRouter();

  useEffect(() => {
		if (typeof window !== 'undefined') {
			const status = sessionStorage.getItem("pageView")
			if( status !== "started" && window.location.pathname !== "/intro" ) {
        router.push( "/intro" , "/intro" , undefined)
      }
		}
	}, [])

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default Layout