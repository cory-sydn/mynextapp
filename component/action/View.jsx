import React from "react";
import Card from "../Card";
import styles from '../../styles/View.module.scss'

const View = ({action, handleEarnPoints}) => {
	return (
		<div className={styles.container}>
			<Card action={action} handler={handleEarnPoints} />
		</div>
	);
};

export default View;
