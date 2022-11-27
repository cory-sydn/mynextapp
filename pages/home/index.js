import axios from 'axios'
import React from 'react'
import ActionsList from '../../component/ActionsList'

const home = ({actions}) => {
  return (
    <div>
      <ActionsList actions={actions} />
    </div>
  )
}

export const getStaticProps = async () => {
	//const response = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/actions`)
	const response = await axios.get(`${process.env.API_URL}`)
	return {
		props: {
			actions: response.data
		}
	}
}

export default home