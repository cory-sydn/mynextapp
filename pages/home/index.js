import axios from 'axios'
import React, { useEffect } from 'react'
import ActionsList from '../../component/ActionsList'

const home = ({actions}) => {
	useEffect(() => {
		document.title = "TestCase App"
	}, [])
  
  return (
    <div>
      <ActionsList actions={actions} />
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

export default home