import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/PillBox.module.scss'
import Link from "next/link"

const PillBox = () => {
  const {points} = useSelector((state) => state)
  return (
    <Link href="/myPoints" >
      <div className={styles.container}>
        Points:
        <span className={styles.number}>{points}</span>
      </div>
    </Link>
  )
}

export default PillBox