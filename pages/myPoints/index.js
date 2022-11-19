import React, { useEffect } from 'react'
import axios from 'axios'
import CompletedActions from '../../component/CompletedActions'

const myPoints = ({actions}) => {
	useEffect(() => {
		document.title = "My Points"
	}, [])
	
  return (
    <div>
      <CompletedActions actions={actions} type={"notActive"} />
    </div>
  )
}

export const getStaticProps = async () => {
	const response = await axios.get("https://vercel.com/cory-sydn/mynextapp/api/actions")
	return {
		props: {
			actions: response.data
		}
	}
}

export default myPoints