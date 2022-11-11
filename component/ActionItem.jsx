import React from 'react'
import styles from '../styles/ActionItem.module.scss'
import Image from 'next/image'

const ActionItem = ({action, handler}) => {
  return (
    <div className={styles.container} onClick={() => handler(action)} >
      <div className={styles.Image}>
        <Image src={action.image} width="36" height="36" alt="" />
      </div>
      <div className={styles.textArea} >
        <div className={styles.textTitle}>{action.title} </div>
        <div className={styles.desc}>{action.description} </div>
      </div>
      <div className={styles.point} >
        +{action.point}
      </div>
    </div>
  )
}

export default ActionItem