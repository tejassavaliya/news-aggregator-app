import React from 'react'

function Error({error}) {
	return (
		<div>Error : {error.message || 'Something went wrong...' }</div>
	)
}

export default Error