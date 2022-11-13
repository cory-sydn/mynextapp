import React, { useEffect, useState } from 'react'
import ActionItem from "./ActionItem";
import styles from "../styles/ActionsList.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { loadActions, solveAction } from '../redux/userSlice';
import View from './action/View';
import Congratulations from './action/Congratulations';
import { useRouter } from "next/router";
import Spinner from './Spinner';

const ActionsList = ({actions}) => {
	const [openAction, setOpenAction] = useState(false);
	const {actionsList, solvedActions, initialActionsCount} = useSelector((state) => state)
	const [isLoading, setIsLoading] = useState(true);
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
		solvedActions.length && 
			initialActionsCount === solvedActions.length &&
			router.push( "/finished" , "/finished" , undefined)
	}

	const handleOpenAction = (action) => {
		setOpenAction(action)
	}

	useEffect(() => {
		actionsList.length === 0 && dispatch(loadActions(actions))
	}, [])

	useEffect(() => {
		actionsList.length && setIsLoading(false)
	}, [actionsList.length])

	return (
		<div className={styles.container}>			
			<div className={styles.containerTitle}>Actions to be completed</div>
			<div className={styles.list}>
				{actions?.length > 0 &&
				  actions.map((action) => !solvedActions.includes(action.id) && (
					  <ActionItem key={action.id} action={action} handler={handleOpenAction} />
				))}
			</div>
			{isLoading && <Spinner /> }
			{openAction && 
				<View action={openAction} handleEarnPoints={handleEarnPoints} congrats={congrats} />
			}
			{congrats && <Congratulations handler={handleReturn} /> }
		</div>
	);
}

export default ActionsList;
