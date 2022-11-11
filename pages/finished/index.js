import React from 'react'
import { useSelector } from 'react-redux'
import Animation from '../../component/Animation'
import styles from "../../styles/Finished.module.scss"
import Link from 'next/link'

const Finished = () => {
  const { points } =useSelector((state) => state)

  return (
		<Link href="/myPoints" >
      <div className={styles.container}>			
        <Animation />
        <div className={styles.box}>
          <div className={styles.title}>Congratulations </div>
          <div className={styles.desc}>{`You've collected ${points} points`} </div>
        </div>
      </div>
    </Link>
  )
}

export default Finished