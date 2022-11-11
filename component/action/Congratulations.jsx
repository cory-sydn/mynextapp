import React from "react";
import Card from "../Card";
import styles from "../../styles/View.module.scss";

const Congratulations = ({ handler }) => {
	const message = {
		image: "confirm",
		title: "Congratulations!",
		description:
			"You've earned points for your participation! Keep Up the great work!",
	};

	return (
		<div className={styles.container}>
			<Card action={message} handler={handler} />
		</div>
	);
};

export default Congratulations;
