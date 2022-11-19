import React from 'react';
import CompletedActionItem from "./CompletedActionItem";
import styles from "../styles/CompletedActions.module.scss"
import { useSelector } from 'react-redux';

const ActionsList = ({actions}) => {
	const {solvedActions} = useSelector((state) => state)

	return (
		<div className={styles.container}>
			<div className={styles.containerTitle}>Completed Actions</div>	
			<div className={styles.list}>
				{actions?.map((action) => solvedActions.includes(action.id) && (
					<CompletedActionItem key={action.id} action={action} />
				))}
			</div>
		</div>
	);
}

export default ActionsList;
