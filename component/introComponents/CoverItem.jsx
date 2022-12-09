import React, { forwardRef } from 'react'
import Image from "next/image";
import styles from '../../styles/Slider.module.scss'

const CoverItem = forwardRef((props, ref) => {

  return (
    <Image
    src={props.cover}
    className={styles.item}
    height={300}
    width={300}
    alt=""
    draggable={false}
    priority="false"
    />
  )
});

export default CoverItem