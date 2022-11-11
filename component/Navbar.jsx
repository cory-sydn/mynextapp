import React from 'react'
import Logo from './Logo'
import styles from '../styles/Navbar.module.scss'
import PillBox from './PillBox'
import Link from "next/link"

const Navbar = () => {
  return (
		<header className={styles.container}>
      <Link href="/home" >
        <Logo type="nav" />
      </Link>
      <PillBox />
    </header>
  )
}

export default Navbar