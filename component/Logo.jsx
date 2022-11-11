import React from "react";
import styles from "../styles/Logo.module.scss"

const Logo = ({ type }) => {
	return (
		<div className={styles.container}>
			<h1 className={type === "head" ? styles.titleHead : styles.titleNav}>
				TestCase{" "}
				<span
					className={type === "head" ? styles.titleBigHead : styles.titleBigNav}
				>
					App
				</span>
			</h1>
		</div>
	);
};

export default Logo;
