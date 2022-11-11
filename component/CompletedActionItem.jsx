import React from 'react'
import styles from '../styles/CompletedActionItem.module.scss'

const ActionItem = ({action}) => {
  return (
    <div className={styles.container} >      
      <div className={styles.textTitle}>{action.title} </div>
      <div className={styles.point} >+{action.point}</div>
    </div>
  )
}

export default ActionItem