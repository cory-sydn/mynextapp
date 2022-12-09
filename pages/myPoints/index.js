import React from 'react'
import axios from 'axios'
import CompletedActions from '../../component/CompletedActions'

const myPoints = ({actions}) => {
  return (
    <div>
      <CompletedActions actions={actions} type={"notActive"} />
    </div>
  )
}

export const getStaticProps = async () => {
	const response = await axios.get(`${process.env.API_URL}`)
	return {
		props: {
			actions: response.data
		}
	}
}

export default myPoints