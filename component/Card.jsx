import React from 'react'
import styles from "../styles/Card.module.scss";
import confirmIcon from "../public/images/Vector.svg"
import Image from "next/image";

const Card = ({action, handler}) => {
  return (
    <div className={styles.container} >
      <div className={styles.Image}>
      {action.image === "confirm" 
        ? <Image src={confirmIcon} width="72" height="auto" alt="" />
        : <img src={action.image} width="72" height="auto" alt="" ></img>
      }
      </div>
      {action.point && 
        <div className={styles.point}>+{action.point} </div>
      }
      <header>
        <div  className={styles.title}>{action.title} </div>
        <div className={styles.desc}>{action.description} </div>
      </header>
      <button onClick={() => handler(action)}>
        {action.image === "confirm" ? "Close" : " Earn Points"}
      </button>
    </div>
  )
}

export default Card