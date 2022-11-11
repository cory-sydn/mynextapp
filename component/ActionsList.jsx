import React, { useEffect, useState } from 'react'
import ActionItem from "./ActionItem";
import styles from "../styles/ActionsList.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { loadActions, solveAction } from '../redux/userSlice';
import View from './action/View';
import Congratulations from './action/Congratulations';
import { useRouter } from "next/router";

const ActionsList = ({actions}) => {
	const [openAction, setOpenAction] = useState(false);
	const {actionsList, solvedActions} = useSelector((state) => state)
	const [congrats, setCongrats] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter();

	const handleEarnPoints = (action) => {
		dispatch(solveAction(action))
		setOpenAction(false)
		!congrats && setCongrats(true)
	}

	const handleReturn = () => {
		setCongrats(false)
	}

	const handleOpenAction = (action) => {
		setOpenAction(action)
	}

	useEffect(() => {
		actionsList.length === 0 && dispatch(loadActions(actions))
		actionsList.length === solvedActions.length && solvedActions.length > 0 && router.push( "/finished" , "/finished" , undefined)
	}, [])

	return (
		<div className={styles.container}>			
			<div className={styles.containerTitle}>Actions to be completed</div>
			<div className={styles.list}>
				{actions.map((action) => !solvedActions.includes(action.id) && (
					<ActionItem key={action.id} action={action} handler={handleOpenAction} />
				))}
			</div>
			{openAction && 
				<View action={openAction} handleEarnPoints={handleEarnPoints} congrats={congrats} />
			}
			{congrats && <Congratulations handler={handleReturn} /> }
		</div>
	);
}

export default ActionsList;
